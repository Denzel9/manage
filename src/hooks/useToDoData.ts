import { useMutation, useQuery, useQueryClient } from 'react-query'
import { ToDoService } from '../services/todo.services'
import { INewToDo } from '../types/dashboard.interface'

export const useToDoData = () => {
  const { data: todo, isLoading } = useQuery('data', () => ToDoService.getCurrent(), {
    select: (res) => ({
      current: res.filter((item) => item.status === 'Текущая'),
      future: res.filter((item) => item.status === 'Будущая'),
      completed: res.filter((item) => item.status === 'Выполнено'),
      archive: res.filter((item) => item.status === 'В архиве'),
    }),
  })
  return { todo, isLoading }
}

export const usePostToDo = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: postToDo } = useMutation(
    'post todo',
    (data: INewToDo) => ToDoService.postToDO(data),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['data'] })
      },
    }
  )
  return { postToDo }
}

export const useUpdateStatus = (id: number) => {
  const queryClient = useQueryClient()
  const { mutateAsync: updateToDo } = useMutation(
    'update todo',
    (data: object) => ToDoService.updateStatus(id, data),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['data'] })
      },
    }
  )
  return { updateToDo }
}

export const useDeleteToDo = (id: number) => {
  const queryClient = useQueryClient()
  const { mutateAsync: deleteToDo } = useMutation('update todo', () => ToDoService.deleteToDo(id), {
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['data'] })
    },
  })
  return { deleteToDo }
}
