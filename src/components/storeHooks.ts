import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout app instead default `useDispatch` and `useSelector`
export const useMyDispatch = () => useDispatch<AppDispatch>()
export const useMySelector: TypedUseSelectorHook<RootState> = useSelector
