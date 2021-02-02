import { Grid, Image } from 'semantic-ui-react'
import { Text, Title } from '@statisticsnorway/ssb-component-library'
import { ssb_logo_no_text_rgb, ssb_logo_rgb } from '@statisticsnorway/dapla-js-utilities'

import { useWindowSize } from '../../hooks'

function AppTitle () {
  const { isMobile } = useWindowSize()

  return (
    <>
      <Grid.Column width={3} only='tablet'>
        <Image size='tiny' src={ssb_logo_no_text_rgb} />
      </Grid.Column>
      <Grid.Column width={3} only='mobile computer widescreen'>
        <Image size={isMobile ? 'medium' : 'large'} src={ssb_logo_rgb} />
      </Grid.Column>
      <Grid.Column width={isMobile ? 10 : 6}>
        <Title size={1}>
          Metadata
          <Text>
            <span style={{ marginLeft: '0.5rem' }}>
              v{process.env.REACT_APP_VERSION}
            </span>
          </Text>
        </Title>
      </Grid.Column>
    </>
  )
}

export default AppTitle
