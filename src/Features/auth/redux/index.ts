import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false
}
const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    triggerSaveToken (state, { payload }: PayloadAction<string>) {
      if (payload) {
        state.token = payload
      }
    },
    triggerClearToken (state) {
      state.token = null
    },
    triggerSetAuthState (state, { payload }: PayloadAction<boolean>) {
      state.isAuthenticated = payload
    }
  }
})

export default auth

export const { triggerSaveToken, triggerClearToken, triggerSetAuthState } = auth.actions

export const select = (): Record<string, (n: AuthState) => any> => ({
  isAuthenticated: (state) => state.isAuthenticated,
  token: (state) => state.token
})
