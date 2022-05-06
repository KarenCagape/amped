import { graphql } from "gatsby";

export const query = graphql`
    fragment LinkedImage on ContentfulLinkedImage {
        title {
            childMarkdownRemark {
                html
            }
        }
        url
        image {
            file {
                url
            }
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            id
            title
        }
    }
`;
