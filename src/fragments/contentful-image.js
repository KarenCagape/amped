import { graphql } from "gatsby";

export const query = graphql`
    fragment Image on ContentfulAsset {
        file {
            url
        }
        gatsbyImageData(placeholder: BLURRED)
        id
        title
    }
`;
