import { FunctionComponent, useState } from 'react'
import { MdAdd, MdClear } from 'react-icons/md'
import MenuItemList from './menu-item-list/MenuItemList'
import { IMenuItem } from '../../../../../types/menu.interface'

const MenuItem: FunctionComponent<{ title: string; data: IMenuItem[] }> = ({ title, data }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        data-testid="div"
        className=" mt-3 bg-gray w-full h-[50px] rounded-lg p-2 flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <p
          data-testid="title"
          className=" text-white text-lg hover:scale-105 hover:translate-x-1 transition-transform"
        >
          {title}
        </p>
        {open ? (
          <MdClear
            data-testid="closeSubMenu"
            className=" text-pink text-xl hover:scale-110 transition-transform"
          />
        ) : (
          <MdAdd
            data-testid="openSubMenu"
            className=" text-pink text-xl hover:scale-110 transition-transform"
          />
        )}
      </div>
      <MenuItemList data-testid="subMenu" open={open} data={data} />
    </>
  )
}

export default MenuItem
