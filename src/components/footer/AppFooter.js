import { useContext } from 'react'
import { ArrowUp } from 'react-feather'
import { Grid, Image, Segment } from 'semantic-ui-react'
import { Button, Footer } from '@statisticsnorway/ssb-component-library'
import { ssb_logo_no_text_white, ssb_logo_white } from '@statisticsnorway/dapla-js-utilities'

import AppLinks from './AppLinks'
import { useWindowSize } from '../../hooks'
import { LanguageContext } from '../../context/AppContext'
import { APP_FOOTER } from '../../language'

function AppFooter () {
  const { language } = useContext(LanguageContext)

  const { isMobile } = useWindowSize()

  return (
    <Footer>
      <Segment basic padded={isMobile ? false : 'very'}>
        <Grid stackable verticalAlign='middle'>
          <Grid.Column width={1} />
          <Grid.Column width={3} only='tablet'>
            <Image size='tiny' src={ssb_logo_no_text_white} />
          </Grid.Column>
          <Grid.Column width={3} only='mobile computer widescreen'>
            <Image size={isMobile ? 'medium' : 'large'} src={ssb_logo_white} />
          </Grid.Column>
          <Grid.Column width={4}>
            <span style={{ float: isMobile ? 'right' : 'left' }}>
                <Button negative onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
                  <ArrowUp size={18} style={{ marginRight: '0.5rem' }} />
                  {APP_FOOTER.GO_TO_TOP[language]}
              </Button>
            </span>
          </Grid.Column>
          <AppLinks />
          <Grid.Column width={1} />
        </Grid>
      </Segment>
    </Footer>
  )
}

export default AppFooter
