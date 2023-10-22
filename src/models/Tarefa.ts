import * as enums from '../utils/enums/Tarefa'

export class Tarefa {
  Titulo: string
  tipoContato: enums.tipoContato
  Contatos: string
  id: number

  constructor(
    Titulo: string,
    tipoContato: enums.tipoContato,
    Contatos: string,
    id: number
  ) {
    this.Titulo = Titulo
    this.tipoContato = tipoContato
    this.Contatos = Contatos
    this.id = id
  }
}
