import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'

import auth from 'Features/auth/redux'

import createLogger from './middleware/logger'

const reducers = {
  __version: () => 1.0,
  [auth.name]: auth.reducer
}
const reducer = combineReducers(reducers)
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), createLogger(process.env.NODE_ENV === 'development')]
})

type R = typeof reducers
export type AppRootState = { [T in keyof R]: ReturnType<R[T]> }
export type AppDispatch = typeof store.dispatch
export type AppMapDispatchToProps = (dispatch: AppDispatch) => unknown
export type AppMapStateToProps = (globalState: AppRootState) => unknown

export default store
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
