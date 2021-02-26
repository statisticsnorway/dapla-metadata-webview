import { dataFiltering } from '../utilities'

import InstanceVariables from './test-data/InstanceVariables.json'
import ExpectedReturn from './test-data/DataFiltering.json'

const filteringMatches = {
  SubjectField: {
    ['434e9458-c3be-4437-82d3-c765552c38a0']:
      [
        '09c24ccd-6765-4d8c-84ae-b4c7d55ad4ea',
        'f908b24d-e5c4-4954-bcab-02a2e4724af3',
        '71aec966-eb44-4a49-9bbf-0606563ca0cb',
        '930607c9-88c7-45a2-80b4-4532c8a66a4e',
        'beb729fc-f418-46b1-bab1-8ed20d82b907',
        '8d51f269-4216-4351-94e5-94602e704694'
      ]
  },
  UnitType: {
    ['51a8dcde-127d-49de-84a4-a0a9c34f666f']:
      [
        '09c24ccd-6765-4d8c-84ae-b4c7d55ad4ea',
        'f908b24d-e5c4-4954-bcab-02a2e4724af3',
        '71aec966-eb44-4a49-9bbf-0606563ca0cb',
        '930607c9-88c7-45a2-80b4-4532c8a66a4e',
        'beb729fc-f418-46b1-bab1-8ed20d82b907',
        '8d51f269-4216-4351-94e5-94602e704694'
      ],
    ['31fd20ea-e1ca-46ba-bbf1-9d81e827575e']:
      [
        '9ce825c9-ff8e-4e64-89a9-8d066c9349e7',
        'e2288748-7d26-4690-b07b-30a58c4a41f4',
        '98bf9718-3964-4eb7-a966-3be58d3b9e55',
        '8d51f269-4216-4351-94e5-94602e704694'
      ]
  }
}

const filterBy = {
  SubjectField: ['434e9458-c3be-4437-82d3-c765552c38a0'],
  UnitType: ['31fd20ea-e1ca-46ba-bbf1-9d81e827575e']
}

const filterByWithEmptyUnitType = {
  SubjectField: ['85109ca9-3539-40e9-a8fc-2aeb1d1277c4'],
  UnitType: []
}

test('DataFiltering returns correctly with non-empty response', () => {
  expect(
    dataFiltering(InstanceVariables, filterBy, filteringMatches)
  ).toEqual(ExpectedReturn)
})

test('DataFiltering returns correctly with empty response', () => {
  expect(
    dataFiltering(InstanceVariables, filterByWithEmptyUnitType, filteringMatches)
  ).toEqual([])
})
