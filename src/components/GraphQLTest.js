import { useState } from 'react'
import { useQuery } from 'graphql-hooks'
import { Paragraph, Title } from '@statisticsnorway/ssb-component-library'

import { TEXT_SEARCH_TEST } from '../graphql'

function GraphQLTest () {
  const [searchValue] = useState('kommune')

  const {
    data,
    error,
    loading
  } = useQuery(
    TEXT_SEARCH_TEST,
    {
      variables: {
        text: searchValue
      }
    }
  )

  return (
    <>
      <Title size={2}>GraphQL Test</Title>
      {
        loading ? <Paragraph>Loading...</Paragraph> :
          error ? <Paragraph>Oops, something went wrong with the query.</Paragraph> :
            data === undefined ? <Paragraph>Oops, something went wrong when parsing the data.</Paragraph> :
              <pre>{JSON.stringify(data, null, 2)}</pre>
      }
    </>
  )
}

export default GraphQLTest
