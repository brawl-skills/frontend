import { configureStore } from '@reduxjs/toolkit'

// Slices
import pages from './slices/pages'

const store = configureStore({
  reducer: { pages },
})

export default store
// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
