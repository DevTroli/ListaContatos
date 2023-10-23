import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MainContainer, BotaoSalvar, TituloForm } from '../../styles/index'
import { Campo } from '../../styles/index'
import { Form, Opcoes, Opcao, FieldWrapper } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { adicionar } from '../../store/reducers/tarefas'
import { Contato } from '../../models/Tarefa'

const NovaTarefa = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [contato, setContato] = useState({
    nomeContato: '',
    emailContato: '',
    telefoneContato: ''
  })
  const [tipoContato, settipoContato] = useState(enums.tipoContato.FACULDADE)

  const mudaCampo =
    (campo: string) =>
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setContato((prevState) => ({ ...prevState, [campo]: value }))
    }

  const AddTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    const novoContato = new Contato(
      contato.nomeContato,
      contato.emailContato,
      contato.telefoneContato
    )

    dispatch(
      adicionar({
        Titulo: contato.nomeContato,
        tipoContato,
        Contatos: novoContato
      })
    )

    navigate('/')
  }

  return (
    <MainContainer>
      <TituloForm>Novo Contato</TituloForm>
      <Form onSubmit={AddTarefa}>
        <FieldWrapper>
          <Campo
            value={contato.nomeContato}
            onChange={mudaCampo('nomeContato')}
            type="text"
            placeholder="Nome Completo"
          />
        </FieldWrapper>
        <FieldWrapper>
          <Campo
            value={contato.emailContato}
            onChange={mudaCampo('emailContato')}
            type="email"
            placeholder="Email"
          />
        </FieldWrapper>
        <FieldWrapper>
          <Campo
            value={contato.telefoneContato}
            onChange={mudaCampo('telefoneContato')}
            type="tel"
            placeholder="Telefone"
          />
        </FieldWrapper>
        <Opcoes>
          <p>Tipo do Contato</p>
          {Object.values(enums.tipoContato).map((tipoContato) => (
            <Opcao key={tipoContato}>
              <input
                type="radio"
                name="tipoContato"
                value={tipoContato}
                onChange={(e) =>
                  settipoContato(e.target.value as enums.tipoContato)
                }
                id={tipoContato}
                defaultChecked={tipoContato === enums.tipoContato.FAMILIA}
              />
              <label htmlFor={tipoContato}>{tipoContato}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default NovaTarefa
