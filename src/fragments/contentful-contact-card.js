import { graphql } from "gatsby";

export const query = graphql`
    fragment ContactCard on ContentfulContactCard {
        name
        emailAddress
        phoneNumber
    }
`;
