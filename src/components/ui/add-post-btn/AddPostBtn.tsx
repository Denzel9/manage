import React from 'react'

import Form from './form/Form'
import { NewPost } from '../../../types/dashboard.interface'
import { currentDate } from '../../../helpers/getDate'
import classNames from 'classnames'
import { MdAdd } from 'react-icons/md'

class AddPostBtn extends React.Component<{}, NewPost> {
  constructor(props: {}) {
    super(props)

    this.state = {
      open: false,
      data: {
        title: '',
        desc: '',
        status: '',
        date: currentDate,
      },
    }

    this.setState = this.setState.bind(this)
  }

  // const { postToDo } = usePostToDo()

  handleClick = () => {
    this.state.open
      ? // postToDo(data)
        this.setState({ data: { title: '', desc: '', status: '', date: '' }, open: false })
      : this.setState({ ...this.state, open: true })
  }
  render(): React.ReactNode {
    return (
      <div className="relative flex items-center ">
        <div
          className={classNames(
            this.state.open
              ? 'w-[150px] h-[50px] text-pink ml-[150px] text-center pt-3'
              : 'w-[50px] h-[50px] ml-[195px]',
            ' bg-gray rounded-full hover:scale-110 transition-transform cursor-pointer'
          )}
          onClick={this.handleClick}
        >
          {this.state.open ? (
            'Добавить'
          ) : (
            <MdAdd className=" text-pink text-3xl mx-auto mt-[10px]" />
          )}
        </div>
        <Form data={this.state} setState={this.setState} />
      </div>
    )
  }
}
export default AddPostBtn
