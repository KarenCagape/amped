import * as React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";
import Layout from "../components/layout";
import Banner from "../components/sections/inner-banner";
import OverviewKeyStats from "../components/become-a/overview-keystats";
import ResourcesSlider from "../components/become-a/resources-slider";
import ImageCopy from "../components/become-a/image-copy";
import Gallery from "../components/become-a/gallery";
import { SubHeader } from "../components/_/header";
import Brands from "../components/sections/brands";


export default function InvestPage({ data }) {
    const { contentfulInvest } = data;
    const { name, heroBanner, resourcesHeading, resources, partnersHeading, partners, imageCopy, galleryHeading, gallery } = contentfulInvest;

    return (
        <Layout pageTitle={name}>
            {/* HERO BANNER */}
            <Banner {...heroBanner} />

            {/* INTRO SECTION */}
            <OverviewKeyStats heading={resourcesHeading?.heading} subText={resourcesHeading?.copy} tw="lg:pb-0"/>

            {/* RESOURCES SLIDER */}
            <ResourcesSlider resources={resources} tw="pt-8 lg:pt-14 lg:pb-24" />

            {/* PARTNERS */}
            <div tw="px-4 container mx-auto py-16 lg:py-32">
                <div tw="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    {partnersHeading?.heading ? <SubHeader tw="col-span-2 leading-normal">{partnersHeading?.heading}</SubHeader> : ""}
                    <div tw="col-span-3 lg:text-px18 2xl:text-px21">
                        {partnersHeading?.copy?.childMarkdownRemark?.html ? (
                            <div dangerouslySetInnerHTML={{ __html: partnersHeading?.copy?.childMarkdownRemark?.html }} />
                        ) : (
                            ""
                        )}
                        <Brands logos={partners} logoGrid={tw`grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-24`} />
                    </div>
                </div>
            </div>

            {/* IMAGE - COPY */}
            <div tw="bg-sitegray">
                <ImageCopy {...imageCopy} />
            </div>

            {/* GALLERY */}
            <Gallery heading={galleryHeading} items={gallery} />
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulInvest(name: { eq: "Invest" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            resourcesHeading {
                ...HeadingCopy
            }
            resources {
                ...LinkedImage
            }
            partnersHeading {
                ...HeadingCopy
            }
            partners {
                ...LinkedImage
            }
            imageCopy {
                ...ImageCopy
            }
            galleryHeading
            gallery {
                ...Image
            }
        }
    }
`;
