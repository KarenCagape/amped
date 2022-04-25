import * as React from "react";
import "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PrimaryHero from "../components/heroes/primary-hero";
import Brands from "../components/brands";
import HowWeDoIt from "../components/sections/how-we-do-it";
import MeetTheSolutions from "../components/sections/meet-the-solutions";
import PoweringYourPossibilities from "../components/sections/powering-your-possiblities";
import NoCompromises from "../components/sections/no-compromises";
import AmpedImpact from "../components/sections/amped-impact";
import ClimateImpact from "../components/home/climate-impact";

export default function IndexPage({ data }) {
    const { contentfulHomeTemplate } = data;
    const {
        name,
        heroBanner,
        logos,
        headingOffGridProducts,
        copyCtaOffGridProducts,
        cardsOffGridProducts,
        headingSolutions,
        imageCopySolutions,
        headingProductSlider,
        productSlider,
        headingShowcase,
        copySliderShowcase,
        ampedImpact,
        mapImagesAmpedImpacts,
        climateImpact,
    } = contentfulHomeTemplate;

    return (
        <Layout pageTitle={name}>
            <PrimaryHero {...heroBanner} />
            <Brands logos={logos} />
            <HowWeDoIt
                heading={headingOffGridProducts}
                subText={copyCtaOffGridProducts?.subText}
                button={copyCtaOffGridProducts?.cta}
                cards={cardsOffGridProducts}
            />
            <MeetTheSolutions heading={headingSolutions} imageCopies={imageCopySolutions} />
            <PoweringYourPossibilities heading={headingProductSlider} categories={productSlider} />
            <NoCompromises heading={headingShowcase} copySliders={copySliderShowcase} />
            <AmpedImpact {...ampedImpact} images={mapImagesAmpedImpacts} />
            <ClimateImpact {...climateImpact} />
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulHomeTemplate(name: { eq: "Home" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            logos {
                ...LinkedImage
            }
            headingOffGridProducts {
                childMarkdownRemark {
                    html
                }
            }
            copyCtaOffGridProducts {
                ...CopyCta
            }
            cardsOffGridProducts {
                ...Card
            }
            headingSolutions {
                childMarkdownRemark {
                    html
                }
            }
            imageCopySolutions {
                ...ImageCopy
            }
            headingProductSlider {
                childMarkdownRemark {
                    html
                }
            }
            productSlider {
                ...ProductCategory
            }
            headingShowcase {
                childMarkdownRemark {
                    html
                }
            }
            copySliderShowcase {
                ...CopySlider
            }
            ampedImpact {
                ...CopyKeyStats
            }
            mapImagesAmpedImpacts {
                ...Image
            }
            climateImpact {
                ...CopyKeyStats
            }
        }
    }
`;
