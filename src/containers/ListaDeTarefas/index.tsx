import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefas'
import { MainContainer, TituloForm as Titulo } from '../../styles/index'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { Itens } = useSelector((state: RootReducer) => state.Tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.Filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = Itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.Titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'tipoContato') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.tipoContato === valor
        )
      }
      return tarefasFiltradas
    } else {
      return Itens
    }
  }

  const exibeResultadoFiltrados = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} Contato(s) foram encontrada(s) como: todas ${complemento}`
    } else {
      mensagem = `${quantidade} Contato(s) foram encontrada(s) como: "${valor}" ${complemento}`
    }
    return mensagem
  }

  const Tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltrados(Tarefas.length)

  return (
    <MainContainer>
      <Titulo as="P">{mensagem}</Titulo>
      <ul>
        {Tarefas.map((t) => (
          <li key={t.Titulo}>
            <Tarefa
              id={t.id}
              tipoContato={t.tipoContato}
              Titulo={t.Titulo}
              Contatos={t.Contatos}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
