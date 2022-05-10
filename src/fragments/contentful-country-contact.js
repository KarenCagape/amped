import { graphql } from "gatsby";

export const query = graphql`
    fragment CountryContact on ContentfulCountryContact {
        name
        image {
            ...Image
        }
        contacs {
            ...ContactCard
        }
    }
`;
