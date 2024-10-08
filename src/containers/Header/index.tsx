import { useDispatch, useSelector } from 'react-redux'
import { HeaderStyle } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import BotaoAdicionar from './BotaoAdicionar'

export default function HeaderApp() {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <HeaderStyle>
        <h1>Contatos</h1>
        <form>
          <p>Buscar:</p>
          <input
            type="text"
            value={termo}
            onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
          />
        </form>
        <BotaoAdicionar />
      </HeaderStyle>
    </>
  )
}
