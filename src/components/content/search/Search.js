import { useContext, useEffect, useReducer, useState } from 'react'
import { useManualQuery } from 'graphql-hooks'
import { Divider, Grid } from 'semantic-ui-react'
import { Input } from '@statisticsnorway/ssb-component-library'

import SearchFiltering from './SearchFiltering'
import ResultsView from '../results/ResultsView'
import { LoadingOrError } from '../../common'
import { dataFiltering, findHitsByTypeReducer, init, initFilterBy, reducerFilterBy } from '../../../utilities'
import { LanguageContext } from '../../../context/AppContext'
import { FULL_TEXT_SEARCH } from '../../../graphql'
import { SEARCH } from '../../../language'

function Search () {
  const { language } = useContext(LanguageContext)

  const [searchValue, setSearchValue] = useState('')
  const [filteringMatches, setFilteringMatches] = useState(init(false))
  const [filterBy, dispatchFilterBy] = useReducer(reducerFilterBy, [], initFilterBy)
  const [filteredData, setFilteredData] = useState([])

  const [executeQuery, { loading, error, data }] = useManualQuery(FULL_TEXT_SEARCH)

  useEffect(() => {
    if (data !== undefined) {
      const filterOut = Object.entries(filterBy).map(([entry, value]) => value.length === 0)
      const hitsByType = findHitsByTypeReducer(data)

      setFilteringMatches(hitsByType)

      if (!filterOut.includes(false)) {
        setFilteredData(data)
      } else {
        setFilteredData(dataFiltering(data, filterBy, hitsByType))
      }
    }
  }, [data, filterBy])

  const initiateSearch = async () => {
    await executeQuery({
      variables: { text: searchValue }
    })

    return null
  }

  return (
    <Grid stackable>
      <Grid.Column tablet={6} computer={5} largeScreen={4} widescreen={3}>
        <SearchFiltering
          topics={filteringMatches}
          filterBy={filterBy}
          dispatchFilterBy={dispatchFilterBy}
        />
      </Grid.Column>
      <Grid.Column tablet={10} computer={11} largeScreen={12} widescreen={13} style={{ marginTop: 16 }}>
        <Input
          searchField
          value={searchValue}
          submitCallback={() => initiateSearch()}
          placeholder={SEARCH.PLACEHOLDER[language]}
          handleChange={value => setSearchValue(value)}
        />
        <Divider hidden />
        {(error || loading) ?
          <LoadingOrError error={error} loading={loading} /> :
          data !== undefined && <ResultsView filteredData={filteredData} dataLength={data.length} />
        }
      </Grid.Column>
    </Grid>
  )
}

export default Search
