import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { IMaskInput } from 'react-imask'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
`
export const Campo = styled.input`
  margin-left: -4px;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  width: 280px;
  background-color: transparent;
  border: none;
  color: #000;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinzaLetra};
  margin-right: 8px;
  border-radius: 50px;
`

export default EstiloGlobal
