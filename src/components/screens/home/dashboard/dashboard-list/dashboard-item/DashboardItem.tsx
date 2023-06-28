import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import { IDashboardListItem } from '../../../../../../types/dashboard.interface'
import { color } from '../../../../../../helpers/getColors'

const DashboardItem: FunctionComponent<IDashboardListItem> = ({ title, date, desc, status }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={classNames(
        open ? 'h-[150px]' : ' h-[60px]',
        `relative w-full ${color(
          status
        )} rounded-lg p-2 mt-3 duration-500 text-white cursor-pointer`
      )}
      onClick={() => setOpen(!open)}
    >
      <h2 className=" truncate">{title}</h2>
      <p
        className={classNames(
          open ? ' opacity-100' : ' opacity-0',
          'text-xs my-3 delay-200 cursor-default'
        )}
      >
        {desc}
      </p>
      <span className=" pt-3 absolute bottom-2 left-2 text-xs cursor-default">{date}</span>
      <span className=" pt-3 absolute bottom-2 right-2">{status}</span>
    </div>
  )
}

export default DashboardItem
