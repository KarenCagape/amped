import { graphql } from "gatsby";

export const query = graphql`
    fragment ProductCategory on ContentfulProductCategory {
        name
        slug
        summary {
            childMarkdownRemark {
                html
            }
        }
        thumbnail {
            ...Image
        }
    }
`;
