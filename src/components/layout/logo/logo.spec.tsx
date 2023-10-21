import { render, screen } from '@testing-library/react'
import Logo from './Logo'

test('logo text', () => {
  render(<Logo />)
  expect(screen.queryByTestId('logo')).toHaveTextContent('ManageLife')
})

test('logo img', () => {
  render(<Logo />)
  expect(screen.queryByTestId('logoWrapper')).toHaveAttribute('src', './Logo.png')
})
