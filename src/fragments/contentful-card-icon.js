import { graphql } from "gatsby";

export const query = graphql`
    fragment CardIcon on ContentfulCardIcon {
        title {
            childMarkdownRemark {
                html
            }
        }
        subText {
            childMarkdownRemark {
                html
            }
        }
        icons {
            ...Image
        }
    }
`;
