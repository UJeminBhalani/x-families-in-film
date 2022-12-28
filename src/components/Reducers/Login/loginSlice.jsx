import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: false,
  role: null,
  access_token: null,
  name: null,
  role_data:null
}

export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginState: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
      state.role = action.payload.role;
      state.access_token = action.payload.access_token;
      state.name = action.payload.name;
      state.role_data= action.payload.role_data;
    },
  },
})

export const { loginState } = login.actions

export default login.reducer