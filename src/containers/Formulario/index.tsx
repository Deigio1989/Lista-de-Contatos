import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  BotaoCadastrar,
  CampoCadastro,
  Form,
  TelefoneCadastro,
  Tipo,
  Titulo
} from './styles'
import { useDispatch } from 'react-redux'
import { Tipo as TipoEnum } from '../../utils/enums/Contato'
import ContatoClass from '../../models/Contato'
import { adicionar } from '../../store/reducers/contatos'

export default function Formulario() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [tipo, setTipo] = useState(TipoEnum.FAMILIA)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdiconar = new ContatoClass(nome, email, telefone, tipo, 1)

    dispatch(adicionar(contatoParaAdiconar))
    navigate('/')
  }

  return (
    <Form onSubmit={cadastrarContato}>
      <Titulo>Cadastrar um novo contato</Titulo>
      <CampoCadastro
        value={nome}
        required
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Nome"
      ></CampoCadastro>
      <CampoCadastro
        value={email}
        required
        onChange={(evento) => setEmail(evento.target.value)}
        placeholder="Email"
      ></CampoCadastro>
      <TelefoneCadastro
        value={telefone}
        required
        onChange={(evento) => setTelefone(evento.target.value)}
        placeholder="(11)11111-1111"
      ></TelefoneCadastro>
      <Tipo>
        <p>Tipo de Contato:</p>

        <input
          value={TipoEnum.FAMILIA}
          defaultChecked
          name="tipo"
          type="radio"
          id="familia"
          onChange={(evento) => setTipo(evento.target.value as TipoEnum)}
        />
        <label htmlFor="familia">Familia</label>
        <input
          value={TipoEnum.PESSOAL}
          name="tipo"
          type="radio"
          id="pessoal"
          onChange={(evento) => setTipo(evento.target.value as TipoEnum)}
        />
        <label htmlFor="pessoal">Pessoal</label>
        <input
          value={TipoEnum.TRABALHO}
          name="tipo"
          type="radio"
          id="trabalho"
          onChange={(evento) => setTipo(evento.target.value as TipoEnum)}
        />
        <label htmlFor="trabalho">Trabalho</label>
      </Tipo>
      <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
    </Form>
  )
}
