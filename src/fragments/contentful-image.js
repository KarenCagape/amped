import { graphql } from "gatsby";

export const query = graphql`
    fragment Image on ContentfulAsset {
        file {
            url
        }
        width
        height
        gatsbyImageData(placeholder: BLURRED)
        id
        title
    }
`;
