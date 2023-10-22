import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'tipoContato' | 'todas'
  valor?: enums.tipoContato
}

const FiltroCard = ({ legenda, valor, criterio }: Props) => {
  const dispatch = useDispatch()
  const Filtro = useSelector((state: RootReducer) => state.Filtro)
  const Tarefas = useSelector((state: RootReducer) => state.Tarefas)

  const verificaAtivo = () => {
    const mesmoCriterio = Filtro.criterio === criterio
    const mesmoValor = Filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return Tarefas.Itens.length
    if (criterio === 'tipoContato') {
      return Tarefas.Itens.filter((item) => item.tipoContato === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const Contador = contarTarefas()
  const ativo = verificaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{Contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
