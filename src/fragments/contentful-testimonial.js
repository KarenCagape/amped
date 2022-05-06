import { graphql } from "gatsby";

export const query = graphql`
    fragment Testimonial on ContentfulTestimonial {
        name
        jobInfo
        headshot {
            ...Image
        }
        image {
            ...Image
        }
        quote {
            childMarkdownRemark {
                html
            }
        }
    }
`;
