import { render } from '@testing-library/react'
import { useQuery } from 'graphql-hooks'

import { GraphQLTest } from '../components'

import GraphQLTestResult from './test-data/GraphQLTestResult.json'

const setup = () => {
  const { getByText } = render(
    <GraphQLTest />
  )
  return { getByText }
}

test('Search is still loading', () => {
  useQuery.mockReturnValue({ data: undefined, error: undefined, loading: true })
  const { getByText } = setup()
  expect(getByText('Loading...'))
})

test('Search returns an error and it is shown', () => {
  useQuery.mockReturnValue({ data: undefined, error: { response: { data: 'Problem' } }, loading: false })
  const { getByText } = setup()
  expect(getByText('Oops, something went wrong with the query.'))
})

test('Search returns undefined data', () => {
  useQuery.mockReturnValue({ data: undefined, error: undefined, loading: false })
  const { getByText } = setup()
  expect(getByText('Oops, something went wrong when parsing the data.'))
})

test('Search returns a valid response', () => {
  useQuery.mockReturnValue({ data: GraphQLTestResult, error: undefined, loading: false })
  const { getByText } = setup()
  expect(getByText('kommune', { exact: false }))
})
