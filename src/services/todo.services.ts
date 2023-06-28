import { IDashboardListItem, INewToDo } from '../types/dashboard.interface'
import { axiosBase, getToDoApi, getToDoByIdApi } from './api/endpoints'

export const ToDoService = {
  async getCurrent() {
    const { data: current } = await axiosBase.get<IDashboardListItem[]>(getToDoApi(''))
    return current
  },
  async getCurrentToDO(id: number) {
    const { data: current } = await axiosBase.get<IDashboardListItem>(getToDoByIdApi(id))
    return current
  },
  async postToDO(data: INewToDo) {
    const { data: current } = await axiosBase.post<string>(getToDoApi(''), data)
    return current
  },
  async updateStatus(id: number, data: object) {
    const { data: current } = await axiosBase.patch<INewToDo>(getToDoByIdApi(id), data)
    return current
  },
  async deleteToDo(id: number) {
    const { data: current } = await axiosBase.delete<INewToDo>(getToDoByIdApi(id))
    return current
  },
}
