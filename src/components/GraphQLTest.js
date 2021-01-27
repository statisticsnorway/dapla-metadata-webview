import { useState } from 'react'
import { useQuery } from 'graphql-hooks'

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
      <h1>GraphQL Test</h1>
      {
        loading ? <p>Loading...</p> :
          error ? <p>Oops, something went wrong with the query.</p> :
            data === undefined ? <p>Oops, something went wrong when parsing the data.</p> :
              <pre>{JSON.stringify(data, null, 2)}</pre>
      }
    </>
  )
}

export default GraphQLTest
