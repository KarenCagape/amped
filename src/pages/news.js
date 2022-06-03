import * as React from "react";
import "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/sections/inner-banner";
import NewsSlider from "../components/news/news-slider";
import Newsletter from "../components/become-a/newsletter";

export default function News({ data, navigate }) {
    const { contentfulNewsTemplate } = data;
    const { name, heroBanner, newsListingHeading, newsListing, newsletterHeading, newsletterFormTitle } = contentfulNewsTemplate;

    return (
        <Layout pageTitle={name}>
            {/* BANNER */}
            <Banner {...heroBanner} />

            {/* NEWS LISTING */}
            <NewsSlider resources={newsListing} heading={newsListingHeading} />

            {/* NEWSLETTER */}
            <Newsletter
                title={newsletterHeading?.heading}
                subText={newsletterFormTitle}
                formHeading={newsletterHeading?.copy}
                formSlug={`subscribe-now`}
                formSubmit={`SUBSCRIBE NOW`}
                navigate={navigate}
                tw="py-14 lg:py-32"
            />
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulNewsTemplate(name: { eq: "News" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            newsListingHeading
            newsListing {
                ...LinkedImage
            }
            newsletterHeading {
                ...HeadingCopy
            }
            newsletterFormTitle
        }
    }
`;
