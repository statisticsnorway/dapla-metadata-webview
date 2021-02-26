import { useContext } from 'react'
import { Divider } from 'semantic-ui-react'
import { Divider as SSBDivider } from '@statisticsnorway/ssb-component-library'
import { getLocalizedGsimObjectText, getNestedObject } from '@statisticsnorway/dapla-js-utilities'

import { LanguageContext } from '../../../context/AppContext'
import { QUERY_PATH } from '../../../config'

function ResultsView ({ filteredData, dataLength }) {
  const { language } = useContext(LanguageContext)

  return filteredData !== undefined &&
    <>
      <i>{`Viser ${filteredData.length} av ${dataLength}`}</i>
      <SSBDivider dark />
      <Divider hidden />
      {filteredData.length !== 0 && filteredData.map(variable =>
        <p key={getNestedObject(variable, QUERY_PATH.IV_ID)}>
          {getLocalizedGsimObjectText(language, getNestedObject(variable, QUERY_PATH.IV_NAME))}
        </p>
      )}
    </>
}

export default ResultsView
