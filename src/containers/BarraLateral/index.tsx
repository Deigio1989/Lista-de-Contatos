import { useNavigate } from 'react-router-dom'
import FiltroCard from './FiltroCard'
import { Aside, BotaoVoltar } from './styles'
import { Tipo } from '../../utils/enums/Contato'

type Props = {
  mostrarFiltros: boolean
}

export default function BarraLateral({ mostrarFiltros }: Props) {
  const navigate = useNavigate()

  return (
    <Aside>
      {mostrarFiltros ? (
        <>
          <FiltroCard tipo={Tipo.FAMILIA} />
          <FiltroCard tipo={Tipo.PESSOAL} />
          <FiltroCard tipo={Tipo.TRABALHO} />
          <FiltroCard tipo={Tipo.TODOS} />
        </>
      ) : (
        <BotaoVoltar onClick={() => navigate('/')}>
          Voltar para a lista
        </BotaoVoltar>
      )}
    </Aside>
  )
}
