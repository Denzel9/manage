import { fireEvent, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SideBarContex } from '../../layout/Layout'
import Menu from '../../layout/navigation/menu/Menu'
import userEvent from '@testing-library/user-event'

describe('Add post button', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  const setOpenSide = jest.fn()
  it('click button', () => {
    render(
      <SideBarContex.Provider value={setOpenSide}>
        <QueryClientProvider client={queryClient}>
          <Menu />
        </QueryClientProvider>
      </SideBarContex.Provider>
    )

    expect(screen.queryByText('Добавить')).not.toBeInTheDocument()
    fireEvent.click(screen.getByTestId('AddPostBtn'))
    expect(screen.getByText('Добавить')).toBeInTheDocument()
  })

  it('type post', async () => {
    render(
      <SideBarContex.Provider value={setOpenSide}>
        <QueryClientProvider client={queryClient}>
          <Menu />
        </QueryClientProvider>
      </SideBarContex.Provider>
    )
    fireEvent.click(screen.getByTestId('AddPostBtn'))

    fireEvent.change(screen.queryByTestId('postTitle')!, { target: { value: 'titleNewPost' } })
    fireEvent.change(screen.queryByTestId('postDesc')!, { target: { value: 'desc' } })
    fireEvent.click(screen.getByTestId('openStatus'))
    fireEvent.click(screen.getByTestId('current'))
    fireEvent.click(screen.getByText('Добавить'))

    expect(await screen.findByText('done')).toBeInTheDocument()
  })
})
