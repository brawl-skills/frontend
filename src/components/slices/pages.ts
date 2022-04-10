/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PageTypes = 'main' | 'about' | 'lvl' | '404' | 'player'

interface PagesState {
  page: PageTypes
}

const initialState: PagesState = {
  page: 'main',
}

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<PageTypes>) => {
      state.page = action.payload
    },
  },
})

export const { setPage } = pagesSlice.actions
export default pagesSlice.reducer
