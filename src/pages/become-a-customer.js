import * as React from "react";
import "twin.macro";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Banner from "../components/sections/inner-banner";
import ImageCopy from "../components/become-a/image-copy";
import OverviewKeyStats from "../components/become-a/overview-keystats";
import Newsletter from "../components/become-a/newsletter";
import Testimonials from "../components/become-a/testimonials";
import ResourcesSlider from "../components/become-a/resources-slider";
import Gallery from "../components/become-a/gallery";

export default function BecomeADistributor({ data, navigate }) {
    const { contentfulBecomeADistributor } = data;
    const {
        name,
        heroBanner,
        copyKeyStats,
        newsletterCopyImage,
        newsletterFormHeading,
        testimonialsHeading,
        testimonials,
        resourcesHeading,
        resourcesGallery,
        imageCopy,
        galleryHeading,
        galleryItems,
    } = contentfulBecomeADistributor;

    return (
        <Layout pageTitle={name}>
            {/* BANNER HERO */}
            <Banner {...heroBanner} />

            {/* COPY WITH KEY STATS */}
            <OverviewKeyStats {...copyKeyStats} />

            {/* NEWSLETTER */}
            <Newsletter
                {...newsletterCopyImage}
                formHeading={newsletterFormHeading}
                formSlug={`subscribe-now`}
                formSubmit={`SUBSCRIBE NOW`}
                navigate={navigate}
            />

            {/* TESTIMONIALS */}
            <Testimonials heading={testimonialsHeading} testimonials={testimonials} />

            {/* RESOURCES SLIDER */}
            <ResourcesSlider {...resourcesHeading} resources={resourcesGallery} />

            {/* IMAGE - COPY */}
            <div tw="bg-sitegray">
                <ImageCopy {...imageCopy} />
            </div>

            {/* GALLERY */}
            <Gallery items={galleryItems} heading={galleryHeading} />
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulBecomeADistributor(name: { eq: "Become a Customer" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            copyKeyStats {
                ...CopyKeyStats
            }
            newsletterCopyImage {
                ...CardSimple
            }
            newsletterFormHeading
            testimonialsHeading
            testimonials {
                ...Testimonial
            }
            resourcesHeading {
                ...HeadingCopy
            }
            resourcesGallery {
                ...LinkedImage
            }
            imageCopy {
                ...ImageCopy
            }
            galleryHeading
            galleryItems {
                ...Image
            }
        }
    }
`;
