import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tipo } from '../../utils/enums/Contato'

type FiltroState = {
  termo?: string
  tipo: Tipo
}
const initialState: FiltroState = {
  termo: '',
  tipo: Tipo.TODOS
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<Tipo>) => {
      state.tipo = action.payload
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
