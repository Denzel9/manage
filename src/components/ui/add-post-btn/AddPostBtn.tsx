import { FunctionComponent, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import Form from './form/Form'
import classNames from 'classnames'
import { usePostToDo } from '../../../hooks/useToDoData'
import { INewToDo } from '../../../types/dashboard.interface'
import { currentDate } from '../../../helpers/getDate'

const AddPostBtn: FunctionComponent = () => {
  const [open, setOpen] = useState(false)
  const { postToDo } = usePostToDo()
  const [data, setData] = useState<INewToDo>({
    title: '',
    desc: '',
    status: '',
    date: currentDate,
  })

  const handleClick = () => {
    if (open) {
      postToDo(data)
      setOpen(false)
      setData({ title: '', desc: '', status: '', date: '' })
    } else setOpen(true)
  }

  return (
    <div className="relative flex items-center ">
      <div
        className={classNames(
          open
            ? 'w-[150px] h-[50px] text-pink ml-[150px] text-center pt-3'
            : 'w-[50px] h-[50px] ml-[195px]',
          ' bg-gray rounded-full hover:scale-110 transition-transform cursor-pointer'
        )}
        onClick={handleClick}
      >
        {open ? 'Добавить' : <MdAdd className=" text-pink text-3xl mx-auto mt-[10px]" />}
      </div>

      <Form open={open} setOpen={setOpen} data={data} setData={setData} />
    </div>
  )
}
export default AddPostBtn
