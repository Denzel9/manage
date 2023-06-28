import { useQuery } from 'react-query'
import { ToDoService } from '../services/todo.services'

export const useMenuData = () => {
  const { data: todo, isLoading } = useQuery('data', () => ToDoService.getCurrent(), {
    select: (res) => ({
      current: res
        .filter((item) => item.status === 'Текущая')
        .map((item) => ({ id: item.id, title: item.title })),
      future: res
        .filter((item) => item.status === 'Будущая')
        .map((item) => ({ id: item.id, title: item.title })),
      completed: res
        .filter((item) => item.status === 'Выполнено')
        .map((item) => ({ id: item.id, title: item.title })),
      archive: res
        .filter((item) => item.status === 'В архиве')
        .map((item) => ({ id: item.id, title: item.title })),
    }),
  })
  return { todo, isLoading }
}
