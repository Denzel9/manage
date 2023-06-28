import { FunctionComponent, ReactNode, useState, createContext } from 'react'
import Navigation from './navigation/Navigation'
import SideBar from './sidebar/SideBar'

export const SideBarContex = createContext<any>(null)
export const SetIdContex = createContext<any>(0)

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [openSide, setOpenSide] = useState(false)
  const [todoId, setTodoID] = useState(1)
  return (
    <SideBarContex.Provider value={{ setOpenSide, openSide }}>
      <SetIdContex.Provider value={setTodoID}>
        <Navigation />
      </SetIdContex.Provider>
      <div className=" w-4/5 float-right">{children}</div>
      <SideBar open={openSide} id={todoId} />
    </SideBarContex.Provider>
  )
}

export default Layout
