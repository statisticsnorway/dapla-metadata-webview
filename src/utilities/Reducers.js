import { MODEL } from '../config'

export const init = initValue => Object.entries(MODEL).reduce((accumulator, [key, value]) => {
  accumulator[value] = initValue

  return accumulator
}, {})

export const initFilterBy = initialValue => {
  return init(initialValue)
}

export const reducerFilterBy = (state, action) => {
  switch (action.type) {
    case MODEL.SF:
      return { [MODEL.SF]: action.payload, [MODEL.UT]: state[MODEL.UT] }
    case MODEL.UT:
      return { [MODEL.SF]: state[MODEL.SF], [MODEL.UT]: action.payload }
    default:
      return init([])
  }
}
