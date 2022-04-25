import { graphql } from "gatsby";

export const query = graphql`
    fragment ImageCopy on ContentfulImageCopy {
        heading {
            childMarkdownRemark {
                html
            }
        }
        subText {
            childMarkdownRemark {
                html
            }
        }
        image {
            ...Image
        }
        imageMobile {
            ...Image
        }
    }
`;
