import { useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import { Link } from '@statisticsnorway/ssb-component-library'
import { LANGUAGE } from '@statisticsnorway/dapla-js-utilities'

import { LanguageContext } from '../../context/AppContext'
import { STORAGE } from '../../config'

function AppLanguage () {
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <Grid.Column width={12} textAlign='right'>
      {Object.keys(LANGUAGE.LANGUAGES).map(languageName =>
        <span
          key={languageName}
          style={{ marginLeft: '1rem' }}
          onClick={event => {
            event.preventDefault()
            setLanguage(LANGUAGE.LANGUAGES[languageName].languageCode)
            localStorage.setItem(STORAGE.LANGUAGE, LANGUAGE.LANGUAGES[languageName].languageCode)
          }}
        >
          <Link href='#'>
            {LANGUAGE[languageName][language]}
            {language === LANGUAGE.LANGUAGES[languageName].languageCode ? ' (*)' : ''}
          </Link>
        </span>
      )}
    </Grid.Column>
  )
}

export default AppLanguage
