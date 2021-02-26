import { init } from './Reducers'
import { MODEL } from '../config'

export const dataFiltering = (data, filterBy, filteringMatches) => data.filter(variable => {
  let doNotFilterOut = true
  const variableId = variable.instanceVariable.id

  Object.entries(filterBy).forEach(([entry, ids]) => {
    ids.forEach(id => {
      if (filteringMatches[entry].hasOwnProperty(id)) {
        if (!filteringMatches[entry][id].includes(variableId)) {
          doNotFilterOut = false
        }
      } else {
        doNotFilterOut = false
      }
    })
  })

  return doNotFilterOut
})

export const findHitsByType = data => {
  const unitTypeHandler = (unitTypes, variableId) => {
    unitTypes.forEach(unitType => {
      const unitTypeId = unitType.unitType.id

      if (hitsByType[MODEL.UT].hasOwnProperty(unitTypeId)) {
        if (!hitsByType[MODEL.UT][unitTypeId].includes(variableId)) {
          hitsByType[MODEL.UT][unitTypeId] = hitsByType[MODEL.UT][unitTypeId].concat(variableId)
        }
      } else {
        hitsByType[MODEL.UT][unitTypeId] = [variableId]
      }

      const subjectFields = unitType.unitType.subjectFields

      subjectFieldHandler(subjectFields, variableId)
    })
  }

  const subjectFieldHandler = (subjectFields, variableId) => {
    if (subjectFields.length !== 0) {
      subjectFields.forEach(subjectField => {
        const subjectFieldId = subjectField.id

        if (hitsByType[MODEL.SF].hasOwnProperty(subjectFieldId)) {
          if (!hitsByType[MODEL.SF][subjectFieldId].includes(variableId)) {
            hitsByType[MODEL.SF][subjectFieldId] = hitsByType[MODEL.SF][subjectFieldId].concat(variableId)
          }
        } else {
          hitsByType[MODEL.SF][subjectFieldId] = [variableId]
        }
      })
    }
  }

  const hitsByType = init({})

  data.forEach(variable => {
    const unitTypes = variable.instanceVariable.reverseLogicalRecordInstanceVariables
    const variableId = variable.instanceVariable.id

    unitTypeHandler(unitTypes, variableId)
  })

  return hitsByType
}
