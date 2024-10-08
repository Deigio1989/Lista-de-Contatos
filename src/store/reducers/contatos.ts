import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContatoClass from '../../models/Contato'
import { Tipo } from '../../utils/enums/Contato'
import { Adicionar } from '../../containers/Header/BotaoAdicionar/styles'

type ContatosState = {
  itens: ContatoClass[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Diego Sanchez',
      email: 'diego@frontend.com',
      tel: '(11)12345-1234',
      tipo: Tipo.PESSOAL,
      id: 1
    },
    {
      nome: 'Anthony Soprano',
      email: 'tony@soprano.com',
      tel: '(11)12345-1234',
      tipo: Tipo.FAMILIA,
      id: 2
    },
    {
      nome: 'Christopher Moltisanti',
      email: 'Chrissy@badabing.com',
      tel: '(11)12345-1234',
      tipo: Tipo.TRABALHO,
      id: 3
    },
    {
      nome: 'Silvio Dante',
      email: 'sil@badabing.com',
      tel: '(11)12345-1234',
      tipo: Tipo.TRABALHO,
      id: 4
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<ContatoClass>) => {
      const indexdoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexdoContato >= 0) {
        state.itens[indexdoContato] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Omit<ContatoClass, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (!contatoExistente) {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      } else {
        alert('Já existe um contato com esse nome')
      }
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
