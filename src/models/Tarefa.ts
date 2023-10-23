import * as enums from '../utils/enums/Tarefa'

export class Contato {
  nomeCompleto: string
  email: string
  telefone: string

  constructor(nomeCompleto: string, email: string, telefone: string) {
    this.nomeCompleto = nomeCompleto
    this.email = email
    this.telefone = telefone
  }
}

export class Tarefa {
  Titulo: string
  tipoContato: enums.tipoContato
  Contatos: Contato
  id: number

  constructor(
    Titulo: string,
    tipoContato: enums.tipoContato,
    Contatos: Contato,
    id: number
  ) {
    this.Titulo = Titulo
    this.tipoContato = tipoContato
    this.Contatos = Contatos
    this.id = id
  }
}
