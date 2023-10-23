import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { Botao, BotaoSalvar } from '../../styles/index'
import { remover, editar } from '../../store/reducers/tarefas'
import { Tarefa as TarefaClass, Contato } from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  Titulo,
  tipoContato,
  Contatos: ContatosOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [Editando, setEditando] = useState(false)

  const [contato, setContato] = useState({
    nomeCompleto: '',
    email: '',
    telefone: ''
  })

  useEffect(() => {
    if (ContatosOriginal instanceof Contato) {
      setContato({
        nomeCompleto: ContatosOriginal.nomeCompleto,
        email: ContatosOriginal.email,
        telefone: ContatosOriginal.telefone
      })
    }
  }, [ContatosOriginal])

  const salvarTarefa = () => {
    const Novocontatos = new Contato(
      contato.nomeCompleto,
      contato.email,
      contato.telefone
    )

    dispatch(
      editar({
        id,
        Contatos: Novocontatos,
        tipoContato,
        Titulo
      })
    )

    setEditando(false)
  }

  return (
    <>
      <S.Card>
        <S.Titulo>
          {Editando && <em>Editando...</em>}
          {Titulo}
        </S.Titulo>
        <S.Tag parametro="tipoContato" tipoContato={tipoContato}>
          {tipoContato}
        </S.Tag>
        {Editando ? (
          <S.EditContatos>
            <S.ContatoInput
              type="text"
              placeholder="Nome Completo"
              value={contato.nomeCompleto}
              onChange={(e) =>
                setContato((prevState) => ({
                  ...prevState,
                  nomeCompleto: e.target.value
                }))
              }
            />
            <S.ContatoInput
              type="text"
              placeholder="Email"
              value={contato.email}
              onChange={(e) =>
                setContato((prevState) => ({
                  ...prevState,
                  email: e.target.value
                }))
              }
            />
            <S.ContatoInput
              type="text"
              placeholder="Telefone"
              value={contato.telefone}
              onChange={(e) =>
                setContato((prevState) => ({
                  ...prevState,
                  telefone: e.target.value
                }))
              }
            />
          </S.EditContatos>
        ) : (
          <>
            <S.ContatoInput
              disabled={!Editando}
              type="text"
              placeholder="Nome Completo"
              value={contato.nomeCompleto}
            />
            <S.ContatoInput
              disabled={!Editando}
              type="text"
              placeholder="Email"
              value={contato.email}
            />
            <S.ContatoInput
              disabled={!Editando}
              type="text"
              placeholder="Telefone"
              value={contato.telefone}
            />
          </>
        )}
        <S.BarraAcoes>
          {Editando ? (
            <>
              <BotaoSalvar onClick={salvarTarefa}>Salvar</BotaoSalvar>
              <S.BotaoCancelarRemover
                onClick={() => {
                  setEditando(false)
                  setContato((prevState) => ({ ...prevState }))
                }}
              >
                Cancelar
              </S.BotaoCancelarRemover>
            </>
          ) : (
            <>
              <Botao onClick={() => setEditando(true)}>Editar</Botao>
              <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                Remover
              </S.BotaoCancelarRemover>
            </>
          )}
        </S.BarraAcoes>
      </S.Card>
    </>
  )
}

export default Tarefa
