import { render } from '@testing-library/react'
import { useManualQuery } from 'graphql-hooks'
import userEvent from '@testing-library/user-event'
import { getLocalizedGsimObjectText } from '@statisticsnorway/dapla-js-utilities'

import { Search } from '../components'
import { AppContextProvider } from '../context/AppContext'
import { SEARCH } from '../language'
import { FULL_TEXT_SEARCH } from '../graphql'

import InstanceVariables from './test-data/InstanceVariables.json'

jest.mock('../components/content/search/SearchFiltering', () => () => null)
jest.mock('../components/common/LoadingOrError', () => () => null)

const executeQuery = jest.fn()

const setup = () => {
  const { getByText, getByPlaceholderText } = render(
    <AppContextProvider>
      <Search />
    </AppContextProvider>
  )

  return { getByText, getByPlaceholderText }
}

test('Renders correctly', () => {
  useManualQuery
    .mockReturnValue([executeQuery, { loading: false, error: undefined, data: undefined }])

  const { getByPlaceholderText } = setup()

  expect(getByPlaceholderText(SEARCH.PLACEHOLDER.nb))
})

test('Pressing enter initiates a search', () => {
  useManualQuery
    .mockReturnValue([executeQuery, { loading: false, error: undefined, data: InstanceVariables }])

  const { getByText } = setup()

  InstanceVariables.forEach(variable => expect(getByText(
    getLocalizedGsimObjectText('nb', variable.instanceVariable.name)
  )).toBeInTheDocument())
})

test('Search input is received by query', () => {
  useManualQuery
    .mockReturnValue([executeQuery, { loading: false, error: undefined, data: [InstanceVariables[4]] }])

  const { getByText, getByPlaceholderText } = setup()

  userEvent.type(getByPlaceholderText(SEARCH.PLACEHOLDER.nb), 'Kommune{enter}')

  expect(executeQuery).toHaveBeenCalledTimes(1)
  expect(executeQuery).toHaveBeenCalledWith({ variables: { text: 'Kommune' } })
  expect(useManualQuery).toHaveBeenCalledWith(FULL_TEXT_SEARCH)
  expect(getByText(
    getLocalizedGsimObjectText('nb', InstanceVariables[4].instanceVariable.name)
  )).toBeInTheDocument()
})
