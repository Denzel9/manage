export interface IDashboardList {
  title: string
  data: IDashboardListItem[]
}
export interface IDashboardListItem {
  id: number
  title: string
  desc: string
  status: string
  date: string
}

export type INewToDo = Omit<IDashboardListItem, 'id'>
