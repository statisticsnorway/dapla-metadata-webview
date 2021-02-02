import { AppBottomMenu, AppTopMenu } from '../components'
import { render, screen } from '@testing-library/react'

const setup = () => {
  const { getByText } = render(
    <AppTopMenu />
  )
  return { getByText }
}

test('Render links', () => {
  const { getByText } = setup()
  expect(screen.getByText(/top-item 1/)).toBeInTheDocument()
  expect(screen.getByText(/top-item 2/)).toBeInTheDocument()
  expect(screen.getByText(/top-item 3/)).toBeInTheDocument()
})