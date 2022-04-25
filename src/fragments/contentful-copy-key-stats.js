import { graphql } from "gatsby";

export const query = graphql`
    fragment CopyKeyStats on ContentfulCopyKeyStats {
        heading
        subText {
            childMarkdownRemark {
                html
            }
        }
        cta {
            ...Button
        }
        keyStats {
            ...KeyStats
        }
    }
`;
