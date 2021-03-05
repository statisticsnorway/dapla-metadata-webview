import '@testing-library/jest-dom'

jest.mock('axios-hooks')
jest.mock('graphql-hooks')

global.window.innerWidth = 767 // Simulate mobile screen size

window.__ENV = {
  REACT_APP_API: process.env.REACT_APP_API
}
