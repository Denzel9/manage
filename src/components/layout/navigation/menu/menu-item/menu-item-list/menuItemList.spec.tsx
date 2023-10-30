import { fireEvent, render, screen } from '@testing-library/react'
import MenuItemList from './MenuItemList'
import { SetIdContex, SideBarContex } from '../../../../Layout'

describe('menu item list', () => {
  const open = false
  const data = [{ id: 1, title: 'test' }]

  let openSide = false
  const setOpenSide = jest.fn(() => !openSide)
  const setId = jest.fn()
  it('title', () => {
    render(
      <SideBarContex.Provider value={{ setOpenSide, openSide }}>
        <MenuItemList open={open} data={data} />
      </SideBarContex.Provider>
    )

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('click item', () => {
    render(
      <SetIdContex.Provider value={setId}>
        <SideBarContex.Provider value={{ setOpenSide, openSide }}>
          <MenuItemList open={open} data={data} />
        </SideBarContex.Provider>
      </SetIdContex.Provider>
    )

    fireEvent.click(screen.getByText('test'))
    expect(setId).toHaveBeenCalledTimes(1)
  })
})
