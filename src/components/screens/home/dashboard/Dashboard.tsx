import React, { Dispatch } from 'react'
import DashboardList from './dashboard-list/DashboardList'

import { State, getToDo } from '../../../../redux/reducer'
import { connect } from 'react-redux'

class Dashboard extends React.Component<any, State> {
  componentDidMount(): void {
    this.props.getData()
  }
  render() {
    return (
      <div className=" p-5 h-screen" onClick={() => {}}>
        <div className=" flex justify-between">
          <DashboardList
            title={'Текущие задачи'}
            data={this.props.toDo.filter((item: any) => item.status === 'Выполнено')}
          />
          <DashboardList
            title={'Будущие задачи'}
            data={this.props.toDo.filter((item: any) => item.status === 'Текущая')}
          />
          <DashboardList
            title={'Выполненные задачи'}
            data={this.props.toDo.filter((item: any) => item.status === 'Будущая')}
          />
          <DashboardList
            title={'Архив'}
            data={this.props.toDo.filter((item: any) => item.status === 'В архиве')}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state: State) {
  const { toDo, loading, error } = state
  return {
    toDo,
    loading,
    error,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    getData: () => dispatch(getToDo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
