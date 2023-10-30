import classNames from 'classnames'
import { FunctionComponent, useContext } from 'react'
import { SetIdContex, SideBarContex } from '../../../../Layout'
import { IMenuItem } from '../../../../../../types/menu.interface'

const MenuItemList: FunctionComponent<{ open: boolean; data: IMenuItem[] }> = ({ open, data }) => {
  const { setOpenSide } = useContext(SideBarContex)
  const setId = useContext(SetIdContex)

  const handleClick = (id: number) => {
    setOpenSide(true)
    setId(id)
  }
  return (
    <div
      className={classNames(open ? ' block' : ' hidden', 'bg-gray p-3 text-white mt-2 rounded-lg ')}
    >
      {data?.map((item) => {
        return (
          <p
            className=" cursor-pointer hover:scale-110 hover:translate-x-3 transition-transform"
            key={item.id}
            onClick={() => handleClick(item.id)}
            data-testid="title-menu-list"
          >
            {item.title}
          </p>
        )
      })}
    </div>
  )
}

export default MenuItemList
