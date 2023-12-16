import { configureStore } from '@reduxjs/toolkit'
import startFormReducer from './slices/startForm'

export default configureStore({
  reducer: {
    startForm: startFormReducer,
  },
})