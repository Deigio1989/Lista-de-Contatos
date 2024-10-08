import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Aside = styled.aside`
  background-color: ${variaveis.azul1};
  height: 100vh;
  position: sticky;
`
export const BotaoVoltar = styled(Botao)`
  background-color: ${variaveis.azulHeader};
  margin-top: 24px;
  margin-left: 40px;
`
