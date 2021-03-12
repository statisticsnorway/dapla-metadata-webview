export const API = {
  GET_HEALTH: '/health/ready',
  GRAPHQL: '/graphql',
  NAMESPACE: 'ns'
}

export const MODEL = {
  SF: 'SubjectField',
  UT: 'UnitType'
}

export const QUERY_PATH = {
  SF_ID: ['id'],
  UT_ID: ['unitType', 'id'],
  UT_SF: ['unitType', 'subjectFields'],
  IV_ID: ['instanceVariable', 'id'],
  IV_RL: ['instanceVariable', 'reverseLogicalRecordInstanceVariables'],
  IV_NAME: ['instanceVariable', 'name']
}
