import * as React from "react";
import "twin.macro";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Banner from "../components/heroes/buy-wowsolar";
import BuyWowSolar from "../components/sections/buy-wowsolar";
import { SubHeader } from "../components/_/header";
import BuyWowSolarCountries from "../components/buy-wowsolar-countries/buy-wowsolar-countries";

export default function BuyWowSolarPage({ data }) {
    const { contentfulBuyWowSolar } = data;
    const { name, heroBanner, introCopy, countryListHeading, countryList, imageCopy, galleryHeading, gallery } = contentfulBuyWowSolar;

    return (
        <Layout pageTitle={name}>
            {/* HERO BANNER */}
            <Banner {...heroBanner} />

            {/* INTRO SECTION */}
            <div tw="px-4 container mx-auto py-16 lg:py-48">
                <div tw="grid grid-cols-1 lg:grid-cols-5">
                    {introCopy?.heading ? <SubHeader tw="col-span-2 mb-8 lg:mb-0 leading-normal">{introCopy?.heading}</SubHeader> : ""}
                    <div tw="col-span-3 lg:text-px21" dangerouslySetInnerHTML={{ __html: introCopy?.copy?.childMarkdownRemark?.html }} />
                </div>
            </div>

            {/* COUNTRY LIST */}
            <BuyWowSolarCountries heading={countryListHeading} countries={countryList} />

            {/* IMAGE - COPY */}
            <div tw="bg-sitegray">
                <BuyWowSolar {...imageCopy} />
            </div>

            {/* GALLERY */}
            {gallery?.length ? (
                <div tw="px-4 container mx-auto  py-16 lg:py-48">
                    {galleryHeading ? (
                        <div tw="text-px21 lg:text-px54 text-center mb-16 lg:mb-32">
                            <div tw="break-all">{galleryHeading}</div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div tw="gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-4">
                        {gallery.map((image, idx) => (
                            <div key={idx}>
                                {image?.gatsbyImageData ? <GatsbyImage tw="w-full" image={image?.gatsbyImageData} alt={image?.title} /> : ""}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                ""
            )}
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulBuyWowSolar(name: { eq: "Buy WowSolar" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            introCopy {
                ...HeadingCopy
            }
            countryListHeading {
                ...HeadingCopy
            }
            countryList {
                ...CountryContact
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
