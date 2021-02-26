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
  UT_ID: ['unitType', 'id'],
  UT_SF: ['unitType', 'subjectFields'],
  IV_ID: ['variable', 'instanceVariable', 'id'],
  IV_RL: ['variable', 'instanceVariable', 'reverseLogicalRecordInstanceVariables'],
  IV_NAME: ['variable', 'instanceVariable', 'name']
}
