import { graphql } from 'gatsby'

export const query = graphql`
  fragment Button on ContentfulButton {
    title
    url
  }
`
