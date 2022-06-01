import * as React from "react";
import "twin.macro";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Banner from "../components/sections/inner-banner";
import ImageCopy from "../components/become-a/image-copy";
import OverviewKeyStats from "../components/become-a/overview-keystats";
import Newsletter from "../components/become-a/newsletter";
import Testimonials from "../components/become-a/testimonials";
import ListCopy from "../components/become-a/list-copy";
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
        listCopy,
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
                formSlug={`become-a-partner`}
                formSubmit={`BECOME A PARTNER`}
                navigate={navigate}
            />

            {/* TESTIMONIALS */}
            <Testimonials heading={testimonialsHeading} testimonials={testimonials} />

            {/* LIST COPY */}
            <ListCopy {...listCopy} />

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
        contentfulBecomeADistributor(name: { eq: "Become a Distributor" }) {
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
            listCopy {
                ...CopyKeyStats
            }
            resourcesHeading {
                ...HeadingCopy
            }
            resourcesGalleryHeading
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
