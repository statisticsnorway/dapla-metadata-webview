import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Grid, List } from 'semantic-ui-react'
import { ShoppingCart } from 'react-feather'
import { Title } from '@statisticsnorway/ssb-component-library'

import { LanguageContext } from '../../context/AppContext'
import { APP_HEADER_LINKS } from '../../language'

function AppNavigation () {
  const { language } = useContext(LanguageContext)

  let location = useLocation()

  const [active, setActive] = useState(location.pathname.split('/')[1])

  useEffect(() => {
    setActive(location.pathname.split('/')[1])
  }, [location.pathname])

  return (
    <Grid.Column width={3} verticalAlign='bottom' textAlign='right'>
      <List horizontal relaxed>
        {Object.keys(APP_HEADER_LINKS).map(link =>
          <List.Item key={link} as={Link} to={`/${link}`}>
            <Title size={3}>
            <span style={{ color: active === link ? '#006400' : '#162327' }}>
              {APP_HEADER_LINKS[link][language]}
            </span>
            </Title>
          </List.Item>
        )}
        <List.Item>
          <ShoppingCart />
        </List.Item>
      </List>
    </Grid.Column>
  )
}

export default AppNavigation
