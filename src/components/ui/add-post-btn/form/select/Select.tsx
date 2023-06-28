import { FunctionComponent, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { INewToDo } from '../../../../../types/dashboard.interface'

const Select: FunctionComponent<{ data: INewToDo; setData(data: INewToDo): void }> = ({
  data,
  setData,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <ul className="  text-white mt-5">
      <li className=" relative flex items-center cursor-pointer" onClick={() => setOpen(!open)}>
        {data.status || 'Выберите статус задачи'}
        {open ? (
          <MdKeyboardArrowDown className=" absolute right-0 rotate-180" />
        ) : (
          <MdKeyboardArrowDown className=" absolute right-0" />
        )}
      </li>
      <div className={open ? ' block' : ' hidden'} onClick={() => setOpen(!open)}>
        <li
          className=" cursor-pointer"
          onClick={() =>
            setData({
              ...data,
              status: 'Текущая',
            })
          }
        >
          Текущая
        </li>
        <li
          className=" cursor-pointer"
          onClick={() =>
            setData({
              ...data,
              status: 'Будущая',
            })
          }
        >
          Будущая
        </li>
        <li
          className=" cursor-pointer"
          onClick={() =>
            setData({
              ...data,
              status: 'Выполнено',
            })
          }
        >
          Выполненная
        </li>
        <li
          className=" cursor-pointer"
          onClick={() =>
            setData({
              ...data,
              status: 'В архиве',
            })
          }
        >
          В архивe
        </li>
      </div>
    </ul>
  )
}

export default Select
