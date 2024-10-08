import { Tipo } from '../utils/enums/Contato'

class ContatoClass {
  nome: string
  email: string
  tel: string
  tipo: Tipo
  id: number

  constructor(
    nome: string,
    email: string,
    tel: string,
    tipo: Tipo,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.tel = tel
    this.tipo = tipo
    this.id = id
  }
}

export default ContatoClass
