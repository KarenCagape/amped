import * as React from "react";
import "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PrimaryHero from "../components/home/primary-hero";
import Brands from "../components/sections/brands";
import HowWeDoIt from "../components/home/how-we-do-it";
import MeetTheSolutions from "../components/home/meet-the-solutions";
import PoweringYourPossibilities from "../components/home/powering-your-possiblities";
import NoCompromises from "../components/home/no-compromises";
import AmpedImpact from "../components/home/amped-impact";
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
