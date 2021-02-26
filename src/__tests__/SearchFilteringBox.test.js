import useAxios from 'axios-hooks'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

import SearchFilteringBox from '../components/content/search/SearchFilteringBox'
import { AppContextProvider } from '../context/AppContext'
import { MODEL } from '../config'
import { APP_COMMON } from '../language'

import SubjectFields from './test-data/SubjectFields.json'

const subjectFieldsLinksMock = {
  [SubjectFields[2].id]: []
}

const filterByEmptyMock = {
  [MODEL.SF]: []
}

const filterByPopulatedMock = {
  [MODEL.SF]: [
    SubjectFields[1].id,
    SubjectFields[2].id
  ]
}

const dispatchFilterByMock = jest.fn()

const setup = (filterByMock = filterByEmptyMock) => {
  const { getByText } = render(
    <AppContextProvider>
      <SearchFilteringBox
        topic={MODEL.SF}
        value={subjectFieldsLinksMock}
        filterBy={filterByMock}
        dispatchFilterBy={dispatchFilterByMock}
      />
    </AppContextProvider>
  )

  return { getByText }
}

describe('Common mock', () => {
  beforeEach(() => {
    useAxios.mockReturnValue([{ loading: false, error: undefined, data: SubjectFields }])
  })

  test('Renders correctly', () => {
    const { getByText } = setup()

    SubjectFields.forEach(subjectField => expect(getByText(subjectField.name[0].languageText)).toBeInTheDocument())
  })

  test('dispatchFilterBy adds correctly with empty filterBy', () => {
    const { getByText } = setup()

    userEvent.click(getByText('IncomeAndWealth'))

    expect(dispatchFilterByMock).toHaveBeenCalledWith({
      type: MODEL.SF, payload: [
        SubjectFields[1].id
      ]
    })
  })

  test('dispatchFilterBy removes correctly with populated filterBy', () => {
    const { getByText } = setup(filterByPopulatedMock)

    userEvent.click(getByText('IncomeAndWealth*'))

    expect(dispatchFilterByMock).toHaveBeenCalledWith({
      type: MODEL.SF, payload: [
        SubjectFields[2].id
      ]
    })
  })
})

test('Loading renders correctly', () => {
  useAxios.mockReturnValue([{ loading: true, error: undefined, data: undefined }])

  setup()
})

test('Error renders correctly', () => {
  useAxios.mockReturnValue([{ loading: false, error: 'error', data: undefined }])

  const { getByText } = setup()

  expect(getByText(APP_COMMON.ERROR_HEADER.nb)).toBeInTheDocument()
})
