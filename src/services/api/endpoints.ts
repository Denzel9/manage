import axios from 'axios'

export const axiosBase = axios.create({
  baseURL: 'http://localhost:3300',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getToDoApi = (string: string) => `/todo/${string}`
export const getToDoByIdApi = (id: number) => `/todo/${id}`
