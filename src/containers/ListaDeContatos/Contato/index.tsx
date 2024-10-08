import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Card,
  Label,
  Tel,
  BarraAcoes,
  Icon,
  Tag,
  BotaoCancelar,
  BotaoSalvar
} from './styles'
import { remover, editar } from '../../../store/reducers/contatos'
import ContatoClass from '../../../models/Contato'
import { Botao, Campo } from '../../../styles'

type Props = ContatoClass

export default function Contato({
  nome: nomeOriginal,
  email: emailOriginal,
  tel: telOriginal,
  tipo,
  id
}: Props) {
  const dispatch = useDispatch()
  const [isEditing, setEditing] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
      nomeOriginal
    }
  }, [nomeOriginal])
  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])
  useEffect(() => {
    if (telOriginal.length > 0) {
      setTel(telOriginal)
    }
  }, [telOriginal])

  function salvarEdicao() {
    setEditing(false)
    dispatch(
      editar({
        nome,
        email,
        tel,
        tipo,
        id
      })
    )
  }
  function cancelarEdicao() {
    setEditing(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTel(telOriginal)
  }

  return (
    <Card>
      <div>
        <Icon tipo={tipo}>{nome !== '' ? nome[0].toUpperCase() : ''}</Icon>
        <Campo
          disabled={!isEditing}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        ></Campo>
        <Label htmlFor="email">E-mail:</Label>
        <Campo
          disabled={!isEditing}
          id="email"
          type="email"
          value={email.toLowerCase()}
          onChange={(evento) => setEmail(evento.target.value)}
        ></Campo>
        <Label htmlFor="nome">Tel:</Label>
        <Tel
          disabled={!isEditing}
          type="tel"
          value={tel}
          onChange={(evento) => setTel(evento.target.value)}
        ></Tel>

        <Tag tipo={tipo}> {tipo}</Tag>
      </div>

      <BarraAcoes>
        {isEditing ? (
          <>
            <BotaoSalvar onClick={() => salvarEdicao()}>Salvar</BotaoSalvar>
            <BotaoCancelar onClick={() => cancelarEdicao()}>
              Cancelar
            </BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEditing(true)}>Editar</Botao>
            <BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelar>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}
