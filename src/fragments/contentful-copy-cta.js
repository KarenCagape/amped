import { graphql } from "gatsby";

export const query = graphql`
    fragment CopyCta on ContentfulCopyCta {
        subText {
            childMarkdownRemark {
                html
            }
        }
        cta {
            ...Button
        }
    }
`;
