import React from 'react'
import DashboardItem from './dashboard-item/DashboardItem'
import { IDashboardList } from '../../../../../types/dashboard.interface'

class DashboardList extends React.Component<IDashboardList> {
  render(): React.ReactNode {
    return (
      <div>
        <h2 className=" my-4 font-bold text-lg">{this.props.title}</h2>
        <div className=" rounded-lg w-[250px] bg-darkWhite p-3 ">
          {this.props.data?.map((item) => {
            return <DashboardItem key={item.id} {...item} />
          })}
        </div>
      </div>
    )
  }
}

export default DashboardList
