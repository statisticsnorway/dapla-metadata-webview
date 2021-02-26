export const FULL_TEXT_SEARCH =
  `
    {
      instanceVariable(filter: {name_some: {languageText_contains: $text}}) {
        id
        name {
          languageText
          languageCode
        }
        reverseLogicalRecordInstanceVariables {
          unitType {
            id
            name {
              languageText
              languageCode
            }
            subjectFields {
              id
              name {
                languageText
                languageCode
              }
            }
          }
        }
      }
    }
  `
