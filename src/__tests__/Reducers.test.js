import { init, reducerFilterBy } from '../utilities'
import { MODEL } from '../config'

test('reducerFilterBy works correctly', () => {
  expect(reducerFilterBy(undefined, { type: undefined })).toEqual(init([]))

  expect(reducerFilterBy(
    { [MODEL.SF]: undefined, [MODEL.UT]: null },
    { type: MODEL.SF, payload: null }
  )).toEqual(init(null))

  expect(reducerFilterBy(
    { [MODEL.SF]: null, [MODEL.UT]: undefined },
    { type: MODEL.UT, payload: null }
  )).toEqual(init(null))
})
