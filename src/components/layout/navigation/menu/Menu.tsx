import { FunctionComponent } from 'react'
import MenuItem from './menu-item/MenuItem'
import { useMenuData } from '../../../../hooks/useMenuData'
import AddPostBtn from '../../../ui/add-post-btn/AddPostBtn'

const Menu: FunctionComponent = () => {
  const { todo } = useMenuData()
  return (
    <div className=" h-[650px] flex flex-col justify-between mt-5">
      <ul>
        <MenuItem title="Текущие задачи" data={todo?.current!} />
        <MenuItem title="Будущие задачи" data={todo?.future!} />
        <MenuItem title="Выполненные задачи" data={todo?.completed!} />
        <MenuItem title="Архив" data={todo?.archive!} />
      </ul>
      <AddPostBtn />
    </div>
  )
}

export default Menu
