import { graphql } from "gatsby";

export const query = graphql`
    fragment KeyStats on ContentfulKeyStats {
        value
        suffix
        label
    }
`;
