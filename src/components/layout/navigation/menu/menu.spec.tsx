import { render, screen } from '@testing-library/react'
import Menu from './Menu'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SideBarContex } from '../../Layout'

describe('menu', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  const setOpenSide = jest.fn()
  it('render menu item', () => {
    render(
      <SideBarContex.Provider value={setOpenSide}>
        <QueryClientProvider client={queryClient}>
          <Menu />
        </QueryClientProvider>
      </SideBarContex.Provider>
    )

    expect(screen.getByText('Текущие задачи')).toBeInTheDocument()
    expect(screen.getByText('Будущие задачи')).toBeInTheDocument()
    expect(screen.getByText('Выполненные задачи')).toBeInTheDocument()
    expect(screen.getByText('Архив')).toBeInTheDocument()
  })
})
