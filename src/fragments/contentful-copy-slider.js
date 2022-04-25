import { graphql } from "gatsby";

export const query = graphql`
    fragment CopySlider on ContentfulCopySlider {
        heading
        subText {
            childMarkdownRemark {
                html
            }
        }
        images {
            ...Image
        }
    }
`;
