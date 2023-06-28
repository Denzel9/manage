import { FunctionComponent, useContext } from 'react'
import DashboardList from './dashboard-list/DashboardList'
import { useToDoData } from '../../../../hooks/useToDoData'
import { SideBarContex } from '../../../layout/Layout'

const Dashboard: FunctionComponent = () => {
  const { todo } = useToDoData()
  const { setOpenSide } = useContext(SideBarContex)
  return (
    <div className=" p-5 h-screen" onClick={() => setOpenSide(false)}>
      {/* <div className="flex items-center gap-3">
        <div className=" w-[50px] h-[50px] bg-pink rounded-full"></div>
        <span>Hey User!</span>
      </div> */}
      <div className=" flex justify-between">
        <DashboardList title={'Текущие задачи'} data={todo?.current!} />
        <DashboardList title={'Будущие задачи'} data={todo?.future!} />
        <DashboardList title={'Выполненные задачи'} data={todo?.completed!} />
        <DashboardList title={'Архив'} data={todo?.archive!} />
      </div>
    </div>
  )
}

export default Dashboard
