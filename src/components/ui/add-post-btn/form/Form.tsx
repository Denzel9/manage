import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { MdClear } from 'react-icons/md'
import Select from './select/Select'
import { INewToDo } from '../../../../types/dashboard.interface'

interface IForm {
  open: boolean
  setOpen(open: boolean): void
  data: INewToDo
  setData(data: INewToDo): void
}

const Form: FunctionComponent<IForm> = ({ open, setOpen, data, setData }) => {
  return (
    <form
      className={classNames(
        open ? ' opacity-100 pointer-events-auto ' : 'opacity-0  ',
        'absolute bottom-16  w-full h-[320px] rounded-lg bg-gray duration-500 p-2 pointer-events-none'
      )}
    >
      <div className=" flex items-center justify-between">
        <p className=" text-white text-lg">Новая задача</p>
        <button
          className=" text-white"
          onClick={(e) => {
            e.preventDefault()
            setOpen(false)
          }}
        >
          <MdClear />
        </button>
      </div>
      <input
        className=" mt-5 bg-transparent border-b border-white w-full py-2 outline-none text-white"
        type="text"
        placeholder="Заголовок"
        value={data.title}
        onChange={(e) =>
          setData({
            ...data,
            title: e.target.value,
          })
        }
      />
      <input
        className=" bg-transparent border-b border-white w-full py-2 outline-none text-white"
        type="text"
        placeholder="Описание"
        value={data.desc}
        onChange={(e) =>
          setData({
            ...data,
            desc: e.target.value,
          })
        }
      />
      <Select data={data} setData={setData} />
    </form>
  )
}

export default Form
