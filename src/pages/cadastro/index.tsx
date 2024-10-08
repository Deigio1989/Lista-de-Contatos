import BarraLateral from '../../containers/BarraLateral'

import { Container } from '../../styles'

import Formulario from '../../containers/Formulario'

export default function Cadastro() {
  return (
    <>
      <Container>
        <BarraLateral mostrarFiltros={false} />
        <Formulario />
      </Container>
    </>
  )
}
