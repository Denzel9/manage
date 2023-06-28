import { FunctionComponent } from 'react'
import Logo from '../logo/Logo'
import Menu from './menu/Menu'

const Navigation: FunctionComponent = () => {
  return (
    <div className=" fixed top-0 left-0 blur-0 h-screen w-1/5 p-5 bg-base border-r border-pink">
      <Logo />
      <Menu />
    </div>
  )
}

export default Navigation
