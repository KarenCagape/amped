import { graphql } from "gatsby";

export const query = graphql`
    fragment Card on ContentfulCard {
        title
        logo {
            ...Image
        }
        image {
            ...Image
        }
        icons {
            ...Image
        }
    }
`;
