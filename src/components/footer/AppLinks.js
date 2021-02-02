import { useContext } from 'react'
import { GitHub } from 'react-feather'
import { Grid, List } from 'semantic-ui-react'
import { Link } from '@statisticsnorway/ssb-component-library'

import { LanguageContext } from '../../context/AppContext'
import { APP_FOOTER } from '../../language'

function AppLinks () {
  const { language } = useContext(LanguageContext)

  return (
    <Grid.Column width={7} textAlign='right'>
      <List horizontal>
        <List.Item>
          <Link href='https://www.ssb.no/' isExternal negative>
            {`${APP_FOOTER.ORGANIZATION[language]} © ${new Date().getFullYear()}`}
          </Link>
        </List.Item>
        <List.Item>
          <Link href={process.env.REACT_APP_SOURCE_URL} isExternal negative>
            <GitHub size={18} style={{ marginRight: '0.5rem' }} />
            GitHub
          </Link>
        </List.Item>
      </List>
    </Grid.Column>

  )
}

export default AppLinks
