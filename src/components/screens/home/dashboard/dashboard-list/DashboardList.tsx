import { FunctionComponent } from 'react'
import DashboardItem from './dashboard-item/DashboardItem'
import { IDashboardList } from '../../../../../types/dashboard.interface'

const DashboardList: FunctionComponent<IDashboardList> = ({ data, title }) => {
  return (
    <div>
      <h2 className=" my-4 font-bold text-lg">{title}</h2>
      <div className=" rounded-lg w-[250px] bg-darkWhite p-3 ">
        {data?.map((item) => {
          return <DashboardItem key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default DashboardList
