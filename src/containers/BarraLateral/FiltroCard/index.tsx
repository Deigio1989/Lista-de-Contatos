import { useDispatch, useSelector } from 'react-redux'
import * as s from './styles'
import { alterarFiltro } from '../../../store/reducers/filtro'
import { Tipo } from '../../../utils/enums/Contato'
import { RootReducer } from '../../../store'

export type Props = {
  tipo: Tipo
}

export default function FiltroCard({ tipo }: Props) {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const filtrar = () => {
    dispatch(alterarFiltro(tipo))
  }

  const verificaEstaAtivo = () => {
    return filtro.tipo === tipo
  }

  const contaContatos = () => {
    if (tipo !== Tipo.TODOS) {
      return contatos.itens.filter((item) => item.tipo === tipo).length
    } else {
      return contatos.itens.length
    }
  }

  const contadorContatos = contaContatos()
  const estaAtivo = verificaEstaAtivo()
  return (
    <s.Card ativo={estaAtivo} onClick={filtrar}>
      <s.Contador>{contadorContatos}</s.Contador>
      <s.Label>{tipo}</s.Label>
    </s.Card>
  )
}
