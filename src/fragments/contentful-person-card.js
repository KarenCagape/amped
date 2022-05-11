import { graphql } from "gatsby";

export const query = graphql`
    fragment PersonCard on ContentfulPersonCard {
        name
        headshot {
            ...Image
        }
        jobInfo
        signature {
            ...Image
        }
    }
`;
