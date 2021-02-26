import { Route, Switch } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
import { Divider } from '@statisticsnorway/ssb-component-library'

import { AppFooter, AppHeader, Search } from './components'

function App () {
  return (
    <div className='appSite'>
      <main className='appContent'>
        <AppHeader />
        <Divider dark />
        <Segment basic>
          <Switch>
            <Route path='/search' component={Search} />
          </Switch>
        </Segment>
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  )
}

export default App
