import classNames from 'classnames'
import { FunctionComponent, useContext, useState } from 'react'
import { useSingleToDo } from '../../../hooks/useSingleToDo'
import { MdClear } from 'react-icons/md'
import { SideBarContex } from '../Layout'
import { useDeleteToDo, useUpdateStatus } from '../../../hooks/useToDoData'
import Select from '../../ui/add-post-btn/form/select/Select'
import { INewToDo } from '../../../types/dashboard.interface'
import { MdModeEdit } from 'react-icons/md'

const SideBar: FunctionComponent<{ open: boolean; id: number }> = ({ open, id }) => {
  const { single } = useSingleToDo(id)
  const { setOpenSide } = useContext(SideBarContex)
  const { deleteToDo } = useDeleteToDo(id)
  const { updateToDo } = useUpdateStatus(id)

  const [data, setData] = useState({})
  const [show, setShow] = useState(false)

  const handleClick = () => {
    deleteToDo()
    setOpenSide(false)
  }

  const handleUpdate = () => {
    updateToDo(data)
    setShow(false)
  }

  return (
    <div
      className={classNames(
        open ? 'translate-x-0' : 'translate-x-80',
        ' duration-500 fixed top-0 right-0 blur-0 h-screen w-[300px] p-5 bg-base border-l border-pink text-white'
      )}
    >
      {open && (
        <button className="-ml-14 text-base animate-pulse" onClick={() => setOpenSide(false)}>
          <MdClear className=" text-3xl" />
        </button>
      )}
      <h2 className=" text-2xl">{single?.title}</h2>
      <p className=" my-5">{single?.desc}</p>
      <p>{single?.date}</p>
      <p className=" flex items-center gap-2 cursor-pointer" onClick={() => setShow(!show)}>
        {single?.status} <MdModeEdit />
      </p>
      {show ? (
        <>
          <Select data={data as INewToDo} setData={setData} />
          <button
            className=" bg-gray border rounded-lg px-4 py-2 mt-5 hover:scale-110 transition-transform"
            onClick={handleUpdate}
          >
            Сохранить
          </button>
        </>
      ) : (
        ''
      )}

      <button
        className=" bg-gray border rounded-lg px-4 py-2 absolute left-5 bottom-5 hover:scale-110 transition-transform"
        onClick={handleClick}
      >
        Удалить
      </button>
    </div>
  )
}

export default SideBar
