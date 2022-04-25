import { graphql } from "gatsby";

export const query = graphql`
    fragment TableHeader on ContentfulTableHeader {
        label
        icon {
            ...Image
        }
    }
`;
