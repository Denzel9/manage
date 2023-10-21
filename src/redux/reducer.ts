import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface StateToDo {
  id: number
  title: string
  desc: string
  date: string
  status: string
}

export interface State {
  toDo: StateToDo[]
  loading: boolean
  error: string
}

const initialState: State = {
  toDo: [],
  loading: false,
  error: '',
}

export const getToDo = createAsyncThunk('toDo/getToDo', async () => {
  const res = await axios.get('http://localhost:3300/todo')
  return res.data
})

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToDo.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getToDo.fulfilled, (state, { payload }) => {
      state.loading = false
      state.toDo = payload
    })
  },
})

export default toDoSlice.reducer
