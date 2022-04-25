import { graphql } from "gatsby";

export const query = graphql`
    fragment TableRow on ContentfulTableRow {
        title
        content {
            ...TableContent
        }
    }
`;
