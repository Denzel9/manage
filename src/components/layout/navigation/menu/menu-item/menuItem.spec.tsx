import { fireEvent, render, screen } from '@testing-library/react'
import MenuItem from './MenuItem'
import { SideBarContex } from '../../../Layout'

describe('menu item', () => {
  const todo = [
    { id: 1, title: 'test' },
    { id: 2, title: 'test1' },
    { id: 3, title: 'test2' },
  ]
  let openSide = false
  const setOpenSide = jest.fn(() => !openSide)

  it('title', () => {
    render(
      <SideBarContex.Provider value={{ setOpenSide, openSide }}>
        <MenuItem title={'Текущие задачи'} data={todo} />
      </SideBarContex.Provider>
    )
    expect(screen.getByText(/Текущие задачи/i)).toBeInTheDocument()
  })

  it('open menu click', async () => {
    render(
      <SideBarContex.Provider value={{ setOpenSide, openSide }}>
        <MenuItem title={'Текущие задачи'} data={todo} />
      </SideBarContex.Provider>
    )

    expect(await screen.findByTestId('openSubMenu')).toBeInTheDocument()
    fireEvent.click(screen.queryByTestId('div')!)
    expect(await screen.findByTestId('closeSubMenu')).toBeInTheDocument()
    fireEvent.click(screen.queryByTestId('div')!)
    expect(await screen.findByTestId('openSubMenu')).toBeInTheDocument()
  })
})
