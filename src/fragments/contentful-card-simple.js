import { graphql } from "gatsby";

export const query = graphql`
    fragment CardSimple on ContentfulCardSimple {
        title
        image {
            ...Image
        }
        subText {
            childMarkdownRemark {
                html
            }
        }
    }
`;
