import styled from 'styled-components'

import variaveis from '../../styles/variaveis'
import { Botao, Campo } from '../../styles'

export const CampoCadastro = styled(Campo)`
  border: 1px solid ${variaveis.cinzaLetra};
  display: block;
  margin: 8px;
`
export const TelefoneCadastro = styled(CampoCadastro)`
  width: 150px;
`
export const BotaoCadastrar = styled(Botao)`
  background-color: ${variaveis.azulbotao};
  margin: 8px;
`
export const Titulo = styled.h1`
  padding: 8px;
  margin-bottom: 16;
`

export const Form = styled.form`
  margin-top: 16px;
  margin-left: 16px;
`

export const Tipo = styled.form`
  margin-top: 8px;
  margin-left: 8px;

  p {
    margin-top: 16px;
    color: ${variaveis.cinzaLetra};
  }
  label {
    margin-right: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  input {
    margin-right: 8px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`
