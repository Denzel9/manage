import { FunctionComponent } from 'react'

const Logo: FunctionComponent = () => {
  return (
    <div className=" flex items-center gap-2 text-white">
      <img data-testid="logoWrapper" className=" w-[50px]" src="./Logo.png" alt="logo" />
      <p data-testid="logo" className="text-4xl font-bold">
        ManageLife
      </p>
    </div>
  )
}

export default Logo
