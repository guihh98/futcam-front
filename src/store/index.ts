import { configureStore } from '@reduxjs/toolkit'
import startFormReducer from './slices/startForm'
import matchReducer from './slices/match'

export default configureStore({
  reducer: {
    startForm: startFormReducer,
    match: matchReducer
  },
})