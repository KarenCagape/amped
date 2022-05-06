import { graphql } from "gatsby";

export const query = graphql`
    fragment HeadingCopy on ContentfulHeadingCopy {
        heading
        copy {
            childMarkdownRemark {
                html
            }
        }
    }
`;
