import { init } from './Reducers'
import { MODEL, QUERY_PATH } from '../config'
import { getNestedObject } from '@statisticsnorway/dapla-js-utilities'

export const dataFiltering = (data, filterBy, filteringMatches) => data.filter(variable => {
  let doNotFilterOut = true
  const variableId = getNestedObject(variable, QUERY_PATH.IV_ID)

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

const setAccumulator = (id, variableId, accumulator, previous) => {
  if (previous[id] === undefined) {
    if (accumulator[id] === undefined) {
      accumulator[id] = [variableId]
    }
  } else {
    if (accumulator[id] === undefined) {
      accumulator[id] = [...previous[id], variableId]
    }
  }

  return accumulator
}

const getUnitTypes = (currentValue, variableId, prevUnitTypes) => {
  const unitTypes = getNestedObject(currentValue, QUERY_PATH.IV_RL)

  if (unitTypes !== undefined && unitTypes.length !== 0) {
    return unitTypes.reduce((accumulator, currentValue) => {
      const unitTypeId = getNestedObject(currentValue, QUERY_PATH.UT_ID)

      accumulator = setAccumulator(unitTypeId, variableId, accumulator, prevUnitTypes)

      return accumulator
    }, {})
  } else {
    return {}
  }
}

const getSubjectFields = (currentValue, variableId, prevSubjectFields) => {
  const unitTypes = getNestedObject(currentValue, QUERY_PATH.IV_RL)

  if (unitTypes !== undefined && unitTypes.length !== 0) {
    return unitTypes.reduce((accumulator, currentValue) => {
      const subjectFields = getNestedObject(currentValue, QUERY_PATH.UT_SF)

      if (subjectFields !== undefined && subjectFields.length !== 0) {
        accumulator = subjectFields.reduce((accumulator, currentValue) => {
          const subjectFieldId = getNestedObject(currentValue, QUERY_PATH.SF_ID)

          accumulator = setAccumulator(subjectFieldId, variableId, accumulator, prevSubjectFields)

          return accumulator
        }, {})
      }

      return accumulator
    }, {})
  } else {
    return {}
  }
}

export const findHitsByTypeReducer = data => data.reduce((accumulator, currentValue) => {
  const variableId = getNestedObject(currentValue, QUERY_PATH.IV_ID)
  const unitTypes = getUnitTypes(currentValue, variableId, accumulator[MODEL.UT])
  const subjectFields = getSubjectFields(currentValue, variableId, accumulator[MODEL.SF])

  accumulator[MODEL.UT] = { ...accumulator[MODEL.UT], ...unitTypes }
  accumulator[MODEL.SF] = { ...accumulator[MODEL.SF], ...subjectFields }

  return accumulator
}, init({}))
