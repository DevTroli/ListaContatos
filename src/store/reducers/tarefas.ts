import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Tarefa } from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  Itens: Tarefa[]
}

const initialState: TarefasState = {
  Itens: [
    {
      Titulo: 'Parceiro do TCC',
      tipoContato: enums.tipoContato.FACULDADE,
      Contatos:
        'Gabriel Nascimento Souza\ngabrielnascimento@gmail.com\n(13)12345-6789',
      id: 1
    },
    {
      Titulo: 'Contato do meu chefe',
      tipoContato: enums.tipoContato.TRABALHO,
      Contatos: 'Robson Cleiton Rodrigues\nCleitin@gmail.com\n(13) 05732-8572',
      id: 2
    },
    {
      Titulo: 'Meu Irmao de Farda',
      tipoContato: enums.tipoContato.AMIGOS,
      Contatos: 'Caio Pereira Teixiera\ncaio@gmail.com\n(13)64534-5412',
      id: 3
    },
    {
      Titulo: 'Contato do meu Pai',
      tipoContato: enums.tipoContato.FAMILIA,
      Contatos:
        'Fernando Nascimento Souza\nfernandonascimento@gmail.com\n(13)12345-6789',
      id: 4
    },
    {
      Titulo: 'Contato da minha mãe',
      tipoContato: enums.tipoContato.FAMILIA,
      Contatos:
        'Gabriela SIlva Almeida\ngabrielasilva@gmail.com\n(13) 99999-9999',
      id: 5
    },
    {
      Titulo: 'Contato do meu Personal Trainer',
      tipoContato: enums.tipoContato.ACEDEMIA,
      Contatos: 'Richard Oliveira Silva\nrichies@gmail.com\n(13) 96978-8265',
      id: 6
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover(state, action: PayloadAction<number>) {
      state.Itens = state.Itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar(state, action: PayloadAction<Tarefa>) {
      const IndexTarefa = state.Itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (IndexTarefa > 0) {
        state.Itens[IndexTarefa] = action.payload
      }
    },
    adicionar(state, action: PayloadAction<Omit<Tarefa, 'id'>>) {
      const tarefaExiste = state.Itens.find(
        (tarefa) =>
          tarefa.Titulo.toLowerCase() === action.payload.Titulo.toLowerCase()
      )
      if (tarefaExiste) {
        alert('essa tarefa já existe!')
      } else {
        const ultimaTarefa = state.Itens[state.Itens.length - 1]

        const novaTarefa = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.Itens.push(novaTarefa)
      }
    }
  }
})

export const { remover, editar, adicionar } = tarefasSlice.actions

export default tarefasSlice.reducer
