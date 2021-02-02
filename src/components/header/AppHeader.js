import { Grid, Segment } from 'semantic-ui-react'

import AppTitle from './AppTitle'
import AppLanguage from './AppLanguage'
import AppNavigation from './AppNavigation'
import { useWindowSize } from '../../hooks'

function AppHeader () {
  const { isMobile } = useWindowSize()

  return (
    <Segment basic>
      <Grid stackable verticalAlign='middle'>
        <Grid.Row columns={3} style={{ paddingBottom: 0 }}>
          <Grid.Column width={2} />
          <AppLanguage />
          <Grid.Column width={2} />
        </Grid.Row>
        <Grid.Row columns={isMobile ? 2 : 4} style={{ paddingTop: 0 }}>
          {!isMobile && <Grid.Column width={2} />}
          <AppTitle />
          <AppNavigation />
          {!isMobile && <Grid.Column width={2} />}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default AppHeader
