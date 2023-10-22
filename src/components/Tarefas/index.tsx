import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { Botao, BotaoSalvar } from '../../styles/index'
import { remover, editar } from '../../store/reducers/tarefas'
import { Tarefa as TarefaClass } from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  Titulo,
  tipoContato,
  Contatos: Contatosriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [Editando, setEditando] = useState(false)
  const [Contatos, setContatos] = useState('')

  useEffect(() => {
    if (Contatosriginal.length > 0) setContatos(Contatosriginal)
  }, [Contatosriginal])

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
        <S.Contatos
          disabled={!Editando}
          value={Contatos}
          onChange={(evento) => setContatos(evento.target.value)}
        />
        <S.BarraAcoes>
          {Editando ? (
            <>
              <BotaoSalvar
                onClick={() => {
                  dispatch(
                    editar({
                      id,
                      Contatos,
                      tipoContato,
                      Titulo
                    })
                  )
                  setEditando(false)
                }}
              >
                Salvar
              </BotaoSalvar>
              <S.BotaoCancelarRemover
                onClick={() => {
                  setEditando(false)
                  setContatos(Contatosriginal)
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
