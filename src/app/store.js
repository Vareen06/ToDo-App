import { configureStore } from '@reduxjs/toolkit'
import toDoSliceReducer from '../features/toDoSlice'

export const store = configureStore({
  reducer: {
    todo: toDoSliceReducer ,
  },
})