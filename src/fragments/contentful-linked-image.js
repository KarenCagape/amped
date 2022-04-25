import { graphql } from "gatsby";

export const query = graphql`
    fragment LinkedImage on ContentfulLinkedImage {
        title
        url
        image {
            ...Image
        }
    }
`;
