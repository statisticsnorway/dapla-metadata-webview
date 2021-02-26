import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LANGUAGE } from '@statisticsnorway/dapla-js-utilities'

import App from '../App'
import { AppContextProvider } from '../context/AppContext'
import { APP_FOOTER, APP_HEADER_LINKS } from '../language'

jest.mock('../components/content/search/Search', () => () => null)

const mockScroll = jest.fn()

global.scroll = mockScroll

const setup = () => {
  const { getByText } = render(
    <AppContextProvider>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </AppContextProvider>
  )

  return { getByText }
}

test('Navigates', () => {
  const { getByText } = setup()

  userEvent.click(getByText(APP_HEADER_LINKS.search.nb))

  expect(getByText(APP_HEADER_LINKS.search.nb)).toHaveStyle({ color: '#006400' })
})

test('Scrolls to top', () => {
  const { getByText } = setup()

  userEvent.click(getByText(APP_FOOTER.GO_TO_TOP.nb))

  expect(mockScroll).toHaveBeenCalled()
})

test('Changes language', () => {
  const { getByText } = setup()

  expect(getByText('Norsk (*)')).toBeInTheDocument()

  userEvent.click(getByText(LANGUAGE.ENGLISH.nb))

  expect(getByText('English (*)')).toBeInTheDocument()
})
