import styled from 'styled-components'

type Props = {
  ativo?: boolean
}

export const Card = styled.div<Props>`
  padding: 0.5rem;
  border: 2px solid ${(props) => (props.ativo ? '#1E90FF' : '#B0D9B1')};
  background-color: ${(props) => (props.ativo ? '#F9F9F9' : '#fcfcfc')};
  border-radius: 0.5rem;
  color: ${(props) => (props.ativo ? '#1E90FF' : '#618264')};
  cursor: pointer;
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  display: block;
`
export const Label = styled.span`
  font-size: 0.875rem;
`
