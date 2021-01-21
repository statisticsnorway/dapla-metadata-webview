import { createContext, useState } from 'react'
import { ClientContext, GraphQLClient } from 'graphql-hooks'

import { API } from '../config'

export const ApiContext = createContext({
  restApi: window._env.REACT_APP_API,
  graphqlApi: `${window._env.REACT_APP_API}${API.GRAPHQL}`
})

export const AppContextProvider = (props) => {
  const [restApi, setRestApi] = useState(window._env.REACT_APP_API)
  const [graphqlApi, setGraphqlApi] = useState(`${window._env.REACT_APP_API}${API.GRAPHQL}`)

  const graphqlClient = new GraphQLClient({ url: `${graphqlApi}` })

  return (
    <ClientContext.Provider value={graphqlClient}>
      <ApiContext.Provider value={{ graphqlApi, restApi, setGraphqlApi, setRestApi }}>
        {props.children}
      </ApiContext.Provider>
    </ClientContext.Provider>
  )
}
