import { useQuery } from 'react-query'
import { ToDoService } from '../services/todo.services'
import { useEffect } from 'react'

export const useSingleToDo = (id: number) => {
  const { data: single, refetch } = useQuery('single todo', () => ToDoService.getCurrentToDO(id), {
    enabled: !!id,
    retry: false,
  })

  useEffect(() => {
    refetch()
  }, [id, refetch])

  return { single }
}
