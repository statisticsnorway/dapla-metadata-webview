import { render } from '@testing-library/react'

import { LoadingOrError } from '../components/common'
import { AppContextProvider } from '../context/AppContext'
import { APP_COMMON } from '../language'

const setup = errorMock => {
  const { getByText } = render(
    <AppContextProvider>
      <LoadingOrError
        loading={false}
        error={errorMock}
      />
    </AppContextProvider>
  )

  return { getByText }
}

test('Renders correctly', () => {
  const { getByText } = setup({
    response: {
      data: 'Error Message'
    }
  })

  expect(getByText('Error Message')).toBeInTheDocument()
})

test('Renders correctly with unknown error object', () => {
  const { getByText } = setup({})

  expect(getByText(APP_COMMON.FALLBACK_ERROR_MESSAGE.nb)).toBeInTheDocument()
})
