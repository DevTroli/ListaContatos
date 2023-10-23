import styled from 'styled-components'
import varievaeis from '../../styles/varievaeis'

import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  tipoContato?: enums.tipoContato
  parametro: 'tipoContato'
}

const retornaCor = (props: TagProps): string => {
  if (props.parametro === 'tipoContato') {
    if (props.tipoContato === enums.tipoContato.FAMILIA)
      return varievaeis.amarelo
    if (props.tipoContato === enums.tipoContato.AMIGOS) return varievaeis.verde
    if (props.tipoContato === enums.tipoContato.FACULDADE)
      return varievaeis.Roxo
    if (props.tipoContato === enums.tipoContato.ACEDEMIA)
      return varievaeis.Vinho
  }
  return '#537188'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
`

export const Titulo = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.25rem;
`

export const Tag = styled.span<TagProps>`
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  font-weight: bold;
  background-color: ${(props) => retornaCor(props)};
  color: #f9f9f9;
  border-radius: 0.5rem;
  margin-right: 1rem;
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`

export const EditContatos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContatoInput = styled.input`
  color: #8b8b8b;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
  padding: 0.25rem;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${varievaeis.vermelho};
`

export const Contatos = styled.textarea`
  color: #8b8b8b;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-family: 'Roboto Mono', monospace;
  dipslay: block;
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  resize: none;
  border: none;
  background-color: transparent;
`
