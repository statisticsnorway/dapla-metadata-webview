import useAxios from 'axios-hooks'
import { render } from '@testing-library/react'

import SearchFiltering from '../components/content/search/SearchFiltering'
import { AppContextProvider } from '../context/AppContext'
import { init, initFilterBy } from '../utilities'
import { MODEL } from '../config'

const setup = () => {
  const { getByText } = render(
    <AppContextProvider>
      <SearchFiltering
        topics={init(false)}
        filterBy={initFilterBy([])}
        dispatchFilterBy={jest.fn()}
      />
    </AppContextProvider>
  )

  return { getByText }
}

test('Renders correctly', () => {
  useAxios.mockReturnValue([{ loading: true, error: undefined, data: undefined }])

  const { getByText } = setup()

  Object.entries(MODEL).forEach(([key, value]) => expect(getByText(value)).toBeInTheDocument())
})
