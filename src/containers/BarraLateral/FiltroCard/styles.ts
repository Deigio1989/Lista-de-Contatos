import styled from 'styled-components'
import variaveis from '../../../styles/variaveis'

type Props = {
  ativo?: boolean
}

export const Card = styled.div<Props>`
  padding: 16px;
  padding-left: 72px;
  background-color: ${(props) =>
    props.ativo ? variaveis.azul2 : variaveis.azul1};
  box-shadow: ${(props) =>
    props.ativo
      ? '0px 2px 2px rgba(0, 0, 0, 0.25)'
      : '0px 0px 0px rgba(0, 0, 0, 0)'};
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-size: 24px;
  font-weight: 700;
  display: block;
`

export const Label = styled.span`
  font-size: 16px;
  padding-left: 16px;
`
