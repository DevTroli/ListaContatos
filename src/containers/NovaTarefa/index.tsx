import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MainContainer, BotaoSalvar, TituloForm } from '../../styles/index'
import { Campo } from '../../styles/index'
import { Form, Opcoes, Opcao, ErrorText, FieldWrapper } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { adicionar } from '../../store/reducers/tarefas'

const NovaTarefa = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [tituloContato, settitulo] = useState('')
  const [Contatos, setContatos] = useState('')
  const [tipoContato, settipoContato] = useState(enums.tipoContato.FACULDADE)
  const [errors, setErrors] = useState({ titulo: '', Contatos: '' })

  const validateForm = () => {
    const errors = { titulo: '', Contatos: '' }
    let isValid = true

    if (tituloContato.trim() === '') {
      errors.titulo = 'O título é obrigatório'
      isValid = false
    }

    if (Contatos.trim() === '') {
      errors.Contatos = 'Os Contatos (nome, email, telefone) são obrigatorios'
      isValid = false
    }

    setErrors(errors)

    return isValid
  }

  const mudaTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {
    settitulo(e.target.value)
  }

  const mudaContatos = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContatos(e.target.value)
  }

  const mudaTituloKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    mudaTitulo(e as unknown as React.ChangeEvent<HTMLInputElement>)
    validateForm()
  }

  const mudaContatosKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    mudaContatos(e as unknown as React.ChangeEvent<HTMLTextAreaElement>)
    validateForm()
  }

  const AddTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    if (validateForm()) {
      dispatch(
        adicionar({
          Titulo: tituloContato,
          tipoContato,
          Contatos
        })
      )
      navigate('/')
    }
  }

  return (
    <MainContainer>
      <TituloForm>Novo Contato</TituloForm>
      <Form onSubmit={AddTarefa}>
        <FieldWrapper className={errors.titulo ? 'temErro' : ''}>
          <Campo
            value={tituloContato}
            onChange={mudaTitulo}
            onKeyUp={mudaTituloKeyUp}
            type="text"
            placeholder="Título"
          />
          {errors.titulo && <ErrorText>{errors.titulo}</ErrorText>}
        </FieldWrapper>
        <FieldWrapper className={errors.Contatos ? 'temErro' : ''}>
          <Campo
            value={Contatos}
            onChange={mudaContatos}
            onKeyUp={mudaContatosKeyUp}
            as="textarea"
            name="Contatos"
            placeholder="Digite seu nome completo, email, ou telefone"
          />
          {errors.Contatos && <ErrorText>{errors.Contatos}</ErrorText>}
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
                defaultChecked={tipoContato === enums.tipoContato.FACULDADE}
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
