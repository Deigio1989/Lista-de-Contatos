import BarraLateral from '../../containers/BarraLateral'
import HeaderApp from '../../containers/Header'
import ListaDeContatos from '../../containers/ListaDeContatos'
import { Container } from '../../styles'

export default function Home() {
  return (
    <>
      <HeaderApp />
      <Container>
        <BarraLateral mostrarFiltros />
        <ListaDeContatos />
      </Container>
    </>
  )
}
