import { createContext, useState } from 'react'
import { ClientContext, GraphQLClient } from 'graphql-hooks'
import { LANGUAGE } from '@statisticsnorway/dapla-js-utilities'

import { API, STORAGE } from '../config'

export const ApiContext = createContext({
  restApi: window._env.REACT_APP_API,
  graphqlApi: `${window._env.REACT_APP_API}${API.GRAPHQL}`
})

export const LanguageContext = createContext(LANGUAGE.LANGUAGES.NORWEGIAN.languageCode)

export const AppContextProvider = (props) => {
  const [restApi, setRestApi] = useState(window._env.REACT_APP_API)
  const [graphqlApi, setGraphqlApi] = useState(`${window._env.REACT_APP_API}${API.GRAPHQL}`)
  const [language, setLanguage] = useState(
    localStorage.hasOwnProperty(STORAGE.LANGUAGE) ?
      localStorage.getItem(STORAGE.LANGUAGE) :
      LANGUAGE.LANGUAGES.NORWEGIAN.languageCode
  )

  const graphqlClient = new GraphQLClient({ url: `${graphqlApi}` })

  return (
    <ClientContext.Provider value={graphqlClient}>
      <ApiContext.Provider value={{ graphqlApi, restApi, setGraphqlApi, setRestApi }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          {props.children}
        </LanguageContext.Provider>
      </ApiContext.Provider>
    </ClientContext.Provider>
  )
}
