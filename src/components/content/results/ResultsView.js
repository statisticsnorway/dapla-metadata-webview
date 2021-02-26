import { useContext } from 'react'
import { Divider } from 'semantic-ui-react'
import { Divider as SSBDivider } from '@statisticsnorway/ssb-component-library'
import { getLocalizedGsimObjectText } from '@statisticsnorway/dapla-js-utilities'

import { LanguageContext } from '../../../context/AppContext'

function ResultsView ({ filteredData, dataLength }) {
  const { language } = useContext(LanguageContext)

  return filteredData !== undefined &&
    <>
      <i>{`Viser ${filteredData.length} av ${dataLength}`}</i>
      <SSBDivider dark />
      <Divider hidden />
      {filteredData.length !== 0 && filteredData.map(variable =>
        <p key={variable.instanceVariable.id}>
          {getLocalizedGsimObjectText(language, variable.instanceVariable.name)}
        </p>
      )}
    </>
}

export default ResultsView
