import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'; 
import loginReducer from './components/Reducers/Login/loginSlice'; 
import inviteReducer from './components/Reducers/EmailInvite/inviteSlice'
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, loginReducer, inviteReducer)

export const store = configureStore({
  reducer: {
    login: persistedReducer, 
    invite :  inviteReducer
  }
})
export const persistor = persistStore(store)