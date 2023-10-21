import classNames from 'classnames'
import React from 'react'
import { IDashboardListItem } from '../../../../../../types/dashboard.interface'
import { color } from '../../../../../../helpers/getColors'

class DashboardItem extends React.Component<IDashboardListItem, { open: boolean }> {
  constructor(props: IDashboardListItem) {
    super(props)
    this.state = {
      open: false,
    }
  }
  render(): React.ReactNode {
    return (
      <div
        className={classNames(
          this.state.open ? 'h-[150px]' : ' h-[60px]',
          `relative w-full ${color(
            this.props.status
          )} rounded-lg p-2 mt-3 duration-500 text-white cursor-pointer`
        )}
        onClick={() => this.setState({ open: !this.state.open })}
      >
        <h2 className=" truncate">{this.props.title}</h2>
        <p
          className={classNames(
            this.state.open ? ' opacity-100' : ' opacity-0',
            'text-xs my-3 delay-200 cursor-default'
          )}
        >
          {this.props.desc}
        </p>
        <span className=" pt-3 absolute bottom-2 left-2 text-xs cursor-default">
          {this.props.date}
        </span>
        <span className=" pt-3 absolute bottom-2 right-2">{this.props.status}</span>
      </div>
    )
  }
}

export default DashboardItem
