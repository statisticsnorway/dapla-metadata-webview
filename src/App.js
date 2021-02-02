import React from 'react'
import { AppBottomMenu, AppTopMenu } from './components'
import GraphQLTest from './components/GraphQLTest'

function App () {
  return (
    <div>
      <AppTopMenu />
      <GraphQLTest />
      <AppBottomMenu />
    </div>
  )
}

export default App
