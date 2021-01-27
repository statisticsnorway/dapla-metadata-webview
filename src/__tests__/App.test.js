import { render } from '@testing-library/react'

import App from '../App'
import { AppContextProvider } from '../context/AppContext'

jest.mock('../components/GraphQLTest', () => () => null)

const setup = () => {
  const { container } = render(
    <AppContextProvider>
      <App />
    </AppContextProvider>
  )

  return { container }
}

test('Does not crash', () => {
  setup()
})
