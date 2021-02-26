import { useContext, useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react'
import { Dialog } from '@statisticsnorway/ssb-component-library'
import { getNestedObject } from '@statisticsnorway/dapla-js-utilities'

import { LanguageContext } from '../../context/AppContext'
import { APP_COMMON } from '../../language'

const API_ERROR_RESPONSE = {
  ERROR_PATH: ['response', 'data'],
  ERROR_STATUS_PATH: ['response', 'statusText'],
  ERROR_HTTP_ERROR: ['httpError', 'statusText']
}

function LoadingOrError ({ error, loading }) {
  const { language } = useContext(LanguageContext)

  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    if (error) {
      if (typeof error === 'string') {
        setErrorText(error)
      } else {
        const errors = Object.entries(API_ERROR_RESPONSE).map(([errorType, errorPath]) =>
          getNestedObject(error, errorPath)
        ).filter(errorResponsePath => errorResponsePath !== undefined)

        if (errors.length === 1) {
          setErrorText(errors[0])
        } else {
          setErrorText(APP_COMMON.FALLBACK_ERROR_MESSAGE[language])
        }
      }
    }
  }, [error])

  return (
    <>
      {error &&
      <Dialog type='warning' title={APP_COMMON.ERROR_HEADER[language]}>
        {errorText}
      </Dialog>
      }
      {loading && <Loader active inline='centered' />}
    </>
  )
}

export default LoadingOrError
