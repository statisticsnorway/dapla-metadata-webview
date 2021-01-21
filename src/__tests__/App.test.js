import { render } from '@testing-library/react'

import App from '../App'
import { AppContextProvider } from '../context/AppContext'

const setup = () => {
  const { getByText } = render(
    <AppContextProvider>
      <App />
    </AppContextProvider>
  )

  return { getByText }
}

test('Does not crash', () => {
  setup()
})
