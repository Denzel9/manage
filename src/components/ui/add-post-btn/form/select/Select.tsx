import { MdKeyboardArrowDown } from 'react-icons/md'
import { NewPost } from '../../../../../types/dashboard.interface'
import React from 'react'

class Select extends React.Component<
  { data: NewPost; setData(data: NewPost): void },
  { show: boolean }
> {
  constructor(props: { data: NewPost; setData(data: NewPost): void }) {
    super(props)
    this.state = {
      show: false,
    }
  }
  render(): React.ReactNode {
    return (
      <ul className="  text-white mt-5">
        <li
          className=" relative flex items-center cursor-pointer"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          {this.props.data.data.status || 'Выберите статус задачи'}
          {this.state.show ? (
            <MdKeyboardArrowDown className=" absolute right-0 rotate-180" />
          ) : (
            <MdKeyboardArrowDown className=" absolute right-0" />
          )}
        </li>
        <div
          className={this.state.show ? ' block' : ' hidden'}
          onClick={() => this.setState({ show: false })}
        >
          <li
            className=" cursor-pointer"
            onClick={() =>
              this.props.setData({
                ...this.props.data,
                data: {
                  ...this.props.data.data,
                  status: 'Текущая',
                },
              })
            }
          >
            Текущая
          </li>
          <li
            className=" cursor-pointer"
            onClick={() =>
              this.props.setData({
                ...this.props.data,
                data: {
                  ...this.props.data.data,
                  status: 'Выполнено',
                },
              })
            }
          >
            Будущая
          </li>
          <li
            className=" cursor-pointer"
            onClick={() =>
              this.props.setData({
                ...this.props.data,
                data: {
                  ...this.props.data.data,
                  status: 'В архив',
                },
              })
            }
          >
            Выполненная
          </li>
          <li
            className=" cursor-pointer"
            onClick={() =>
              this.props.setData({
                ...this.props.data,
                data: {
                  ...this.props.data.data,
                  status: 'Будущая',
                },
              })
            }
          >
            В архивe
          </li>
        </div>
      </ul>
    )
  }
}

export default Select
