import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import auth from 'Features/auth/redux'
import { useDispatch } from 'react-redux'
import createLogger from './middleware/logger'

const reducers = {
  __version: () => 1.0,
  [auth.name]: auth.reducer,
}

const reducer = combineReducers(reducers)

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), createLogger(process.env.NODE_ENV === 'development')],
})

type R = typeof reducers
export type AppRootState = { [T in keyof R]: ReturnType<R[T]> }
export type AppDispatch = typeof store.dispatch
export type AppMapDispatchToProps = (dispatch: AppDispatch) => any
export type AppMapStateToProps = (globalState: AppRootState) => any

export default store
export const useAppDispatch = () => useDispatch<AppDispatch>()
