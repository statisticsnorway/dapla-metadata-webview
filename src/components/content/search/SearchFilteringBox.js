import { useContext } from 'react'
import useAxios from 'axios-hooks'
import { List } from 'semantic-ui-react'
import { FactBox, Tag } from '@statisticsnorway/ssb-component-library'
import { getLocalizedGsimObjectText } from '@statisticsnorway/dapla-js-utilities'

import { LoadingOrError } from '../../common'
import { ApiContext, LanguageContext } from '../../../context/AppContext'

function SearchFilteringBox ({ topic, value, filterBy, dispatchFilterBy }) {
  const { language } = useContext(LanguageContext)
  const { namespace, restApi } = useContext(ApiContext)

  const [{ data, loading, error }] = useAxios(`${restApi}/${namespace}/${topic}`, { useCache: false })

  const handleTagClick = (id) => {
    if (filterBy[topic].includes(id)) {
      dispatchFilterBy({ type: topic, payload: filterBy[topic].filter(element => element !== id) })
    } else {
      dispatchFilterBy({ type: topic, payload: filterBy[topic].concat([id]) })
    }
  }

  return (
    <FactBox
      header={`${topic}${filterBy[topic].length !== 0 ? '*' : ''}`}
      openByDefault={true}
      text={(loading || error) ?
        <LoadingOrError error={error} loading={loading} /> :
        data !== undefined &&
        <List>
          {data.map(entry =>
            <List.Item
              key={entry.id}
              style={filterBy[topic].includes(entry.id) ? {
                fontWeight: 'bolder', textDecoration: 'underline', cursor: 'pointer'
              } : { cursor: 'pointer' }}
              onClick={() => handleTagClick(entry.id)}
            >
              {getLocalizedGsimObjectText(language, entry.name)}
              {filterBy[topic].includes(entry.id) && '*'}
              {value && value.hasOwnProperty(entry.id) &&
              <span style={{ marginLeft: 12, display: 'inline-block' }}>
                <Tag>
                  {value[entry.id].length}
                </Tag>
              </span>
              }
            </List.Item>
          )}
        </List>
      }
    />
  )
}

export default SearchFilteringBox
