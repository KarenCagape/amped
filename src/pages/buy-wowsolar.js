import * as React from "react";
import "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/sections/inner-banner";
import OverviewKeyStats from "../components/become-a/overview-keystats";
import BuyWowSolarCountries from "../components/buy-wowsolar-countries/buy-wowsolar-countries";
import ImageCopy from "../components/become-a/image-copy";
import Gallery from "../components/become-a/gallery";

export default function BuyWowSolarPage({ data }) {
    const { contentfulBuyWowSolar } = data;
    const { name, heroBanner, introCopy, countryListHeading, countryList, imageCopy, galleryHeading, gallery } = contentfulBuyWowSolar;

    return (
        <Layout pageTitle={name}>
            {/* HERO BANNER */}
            <Banner {...heroBanner} />

            {/* INTRO SECTION */}
            <OverviewKeyStats heading={introCopy?.heading} subText={introCopy?.copy} />

            {/* COUNTRY LIST */}
            <BuyWowSolarCountries heading={countryListHeading} countries={countryList} />

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
