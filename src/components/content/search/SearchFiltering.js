import SearchFilteringBox from './SearchFilteringBox'

function SearchFiltering ({ topics, filterBy, dispatchFilterBy }) {
  return Object.entries(topics).map(([topic, value]) =>
    <SearchFilteringBox
      key={topic}
      topic={topic}
      value={value}
      filterBy={filterBy}
      dispatchFilterBy={dispatchFilterBy}
    />
  )
}

export default SearchFiltering
