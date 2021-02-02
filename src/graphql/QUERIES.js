export const TEXT_SEARCH_TEST =
  `
  {
    instanceVariable(filter: {name_every: {languageText_contains: $text}}) {
      id
      name {
        languageText
        languageCode
      }
      description {
        languageText
        languageCode
      }
    }
    unitDataSet(filter: {name_every: {languageText_contains: $text}}) {
      id
      name {
        languageText
        languageCode
      }
      description {
        languageText
        languageCode
      }
    }
  }
`
