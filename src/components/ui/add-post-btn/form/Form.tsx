import classNames from 'classnames'
import React from 'react'
import { MdClear } from 'react-icons/md'
import Select from './select/Select'
import { NewPost } from '../../../../types/dashboard.interface'

interface IForm {
  setState(data: NewPost): void
  data: NewPost
}

class Form extends React.Component<IForm> {
  render(): React.ReactNode {
    console.log(this.props.data)
    return (
      <form
        className={classNames(
          this.props.data.open ? ' opacity-100 pointer-events-auto ' : 'opacity-0  ',
          'absolute bottom-16  w-full h-[320px] rounded-lg bg-gray duration-500 p-2 pointer-events-none'
        )}
      >
        <div className=" flex items-center justify-between">
          <p className=" text-white text-lg">Новая задача</p>
          <button
            className=" text-white"
            onClick={(e) => {
              e.preventDefault()
              this.props.setState({ ...this.props.data, open: false })
            }}
          >
            <MdClear />
          </button>
        </div>
        <input
          className=" mt-5 bg-transparent border-b border-white w-full py-2 outline-none text-white"
          type="text"
          placeholder="Заголовок"
          value={this.props.data.data.title}
          onChange={(e) =>
            this.props.setState({
              ...this.props.data,
              data: {
                ...this.props.data.data,
                title: e.target.value,
              },
            })
          }
        />
        <input
          className=" bg-transparent border-b border-white w-full py-2 outline-none text-white"
          type="text"
          placeholder="Описание"
          value={this.props.data.data.desc}
          onChange={(e) =>
            this.props.setState({
              ...this.props.data,
              data: {
                ...this.props.data.data,
                desc: e.target.value,
              },
            })
          }
        />
        <Select data={this.props.data} setData={this.props.setState} />
      </form>
    )
  }
}

export default Form
