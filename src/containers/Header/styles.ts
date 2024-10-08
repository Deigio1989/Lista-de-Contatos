import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  padding-left: 72px;
  padding-top: 40px;
  color: #fff;
  background-color: rgb(45, 63, 112);
  position: relative;

  form {
    margin-left: 80px;
    display: flex;
    align-items: center;
    input {
      margin-left: 16px;
      padding: 8px;
      border-radius: 8px;
      border: none;
      width: 340px;
      font-weight: 700;
      color: ${variaveis.cinzaLetra};
    }
  }
`
