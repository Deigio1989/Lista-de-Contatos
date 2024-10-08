import styled from 'styled-components'
import variaveis from '../../../styles/variaveis'
import { Tipo } from '../../../utils/enums/Contato'
import { Botao, Campo } from '../../../styles'

type TagProps = {
  tipo?: Tipo
}

function retornaCorDeFundo(props: TagProps) {
  if (props.tipo === Tipo.FAMILIA) {
    return variaveis.azulbotao
  } else if (props.tipo === Tipo.PESSOAL) {
    return variaveis.azul1
  } else {
    return variaveis.cinza
  }
}

export const Card = styled.div`
  background-color: ${variaveis.cinzaClaro};
  padding: 12px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
  margin-right: 80px;
  div {
    display: flex;
    gap: 16px;
    align-items: center;
  }
`
export const Icon = styled.div<TagProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  color: #fff;
`

export const Tel = styled(Campo)`
  width: 180px;
`

export const Label = styled.label`
  font-weight: bold;
  margin-right: -8px;
`

export const Tag = styled.span<TagProps>`
  padding: 8px 16px;
  border-radius: 50px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  background-color: ${(props) => retornaCorDeFundo(props)};
`

export const BarraAcoes = styled.div`
  margin-left: 100px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
