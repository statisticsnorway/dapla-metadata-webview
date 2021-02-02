import { AppBottomMenu } from '../components'
import { render, screen } from '@testing-library/react'

const setup = () => {
  const { getByText } = render(
    <AppBottomMenu />
  )
  return { getByText }
}

test('Render global links', () => {
  const { getByText } = setup()
  expect(screen.getByText(/Statistisk sentralbyrå © 2020/)).toBeInTheDocument()
  expect(screen.getByText(/A-Å/)).toBeInTheDocument()
  expect(screen.getByText(/Nettstedskart/)).toBeInTheDocument()
})