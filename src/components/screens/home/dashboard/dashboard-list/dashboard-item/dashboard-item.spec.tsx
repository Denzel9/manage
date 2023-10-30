import { fireEvent, render, screen } from '@testing-library/react'
import DashboardItem from './DashboardItem'

describe('dashboard-item', () => {
  const data = {
    title: 'title',
    desc: 'desc',
    date: '05.05.97',
  }
  it('render title', () => {
    render(<DashboardItem {...data} />)

    expect(screen.getByText(/title/i)).toBeInTheDocument()
  })

  it('render desc', () => {
    render(<DashboardItem {...data} />)

    expect(screen.getByText(/desc/i)).toBeInTheDocument()
  })

  it('render date', () => {
    render(<DashboardItem {...data} />)

    expect(screen.getByText(/05.05.97/i)).toBeInTheDocument()
  })

  it('open desc', () => {
    render(<DashboardItem {...data} />)

    expect(screen.getByTestId('openDesc')).toHaveClass('h-[60px]')
    fireEvent.click(screen.getByTestId('openDesc'))
    expect(screen.getByTestId('openDesc')).toHaveClass('h-[150px]')
  })
})
