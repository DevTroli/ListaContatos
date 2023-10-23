import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contato, Tarefa } from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  Itens: Tarefa[]
}

const initialState: TarefasState = {
  Itens: [
    {
      Titulo: 'Contato do meu Personal Trainer',
      tipoContato: enums.tipoContato.ACEDEMIA,
      Contatos: new Contato(
        'Fernando Nascimento',
        'fernandonascimento@gmail.com',
        '(13) 99999-9999'
      ),
      id: 1
    },
    {
      Titulo: 'Parceiro do TCC',
      tipoContato: enums.tipoContato.FACULDADE,
      Contatos: new Contato(
        'Rodrigo Rodrigues da Silva',
        'rodrigorogrigues@gmail.com',
        '(13) 98537-3516'
      ),
      id: 2
    },
    {
      Titulo: 'Contato da minha Mãe',
      tipoContato: enums.tipoContato.FAMILIA,
      Contatos: new Contato(
        'Gabriela Da Silva',
        'gabrieladasilva@gmail.com',
        '(13) 98142-1465'
      ),
      id: 3
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
    adicionar(
      state,
      action: PayloadAction<
        Omit<Tarefa, 'id'> & {
          Titulo: string
          tipoContato: enums.tipoContato
          Contatos: Contato
        }
      >
    ) {
      const tarefaExistente = state.Itens.find(
        (tarefa) =>
          tarefa.Titulo.toLowerCase() === action.payload.Titulo.toLowerCase()
      )
      if (tarefaExistente) {
        alert('Essa tarefa já existe!')
      } else {
        const ultimaTarefa = state.Itens[state.Itens.length - 1]

        const novaTarefa: Tarefa = {
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
