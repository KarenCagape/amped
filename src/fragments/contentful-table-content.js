import { graphql } from "gatsby";

export const query = graphql`
    fragment TableContent on ContentfulTableContent {
        title {
            childMarkdownRemark {
                html
            }
        }
        secondContent {
            childMarkdownRemark {
                html
            }
        }
    }
`;
