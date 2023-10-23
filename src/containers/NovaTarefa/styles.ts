import styled from 'styled-components'

export const Form = styled.form`
  max-width: 34.187rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: #666666;

  textarea {
    resize: none;
  }
`
export const Opcoes = styled.div`
  margin-bottom: 1rem;

  p {
    margin-bottom: 0.5rem;
  }

  label {
    margin-right: 0.5rem;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`

export const FieldWrapper = styled.div`
  margin-bottom: 1rem;
  campo {
    border: 1px solid red;
  }
`
