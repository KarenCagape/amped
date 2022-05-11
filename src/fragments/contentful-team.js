import { graphql } from "gatsby";

export const query = graphql`
    fragment Team on ContentfulTeam {
        label
        members {
            ...PersonCard
        }
    }
`;
