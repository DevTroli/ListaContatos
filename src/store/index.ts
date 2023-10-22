import { configureStore } from '@reduxjs/toolkit'

import TarefasReducer from './reducers/tarefas'
import FiltroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    Tarefas: TarefasReducer,
    Filtro: FiltroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
