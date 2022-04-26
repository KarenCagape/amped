import * as React from "react";
import tw, { css } from "twin.macro";
import Layout from "../components/layout";
import HeroLightingAndPhoneCharging from "../components/heroes/lighting-and-phone-charging";
import ComparisonTableLighting from "../components/comparison-lighting";
import UpgradeSteps2 from "../components/upgrade-steps-2";
import ExtraInfoLight from "../components/extra-info-light";
import BecomeDistributor from "../components/sections/become-distributor";
import { SubHeader } from "../components/_/header";
import { Text } from "../components/_/text";
import SvgCard from "../components/svg-card";

import InFieldGallery from "../components/in-field-gallery";
import LightingSlider from "../components/lighting-slider";
import Slider from "react-slick";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const tableContainer = css`
    ${tw`overflow-x-scroll lg:overflow-visible`}
`;

const sliderOverride = css`
    & .slick-track {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        gap: 4px;
    }

    & .slick-slide {
        ${tw`mx-2`}
    }
`;

export default function ProductCategory({ data }) {
    const { contentfulProductCategory, products } = data;
    const {
        name,
        summary,
        thumbnail,
        pageTitle,
        overview,
        featureCards,
        comparisonTableHeader,
        comparisonTableBody,
        upgrades,
        textBanner,
        gallery,
        imageCopy,
    } = contentfulProductCategory;

    const svgSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <Layout pageTitle={name}>
            {/* HERO */}
            <HeroLightingAndPhoneCharging heading={pageTitle} image={thumbnail} subText={summary} />

            {/* OVERVIEW */}
            <div tw="w-full overflow-hidden">
                <div tw="px-4 py-12 lg:px-0 md:py-16 lg:py-48 container mx-auto px-4">
                    <div tw="grid grid-cols-1 lg:grid-cols-5">
                        <SubHeader tw="font-sf-light mb-6 col-span-2">Overview</SubHeader>
                        <div tw="col-span-3">
                            <Text tw="mb-16 font-circular-book leading-normal">
                                <div
                                    css={[
                                        css`
                                            strong {
                                                ${tw`font-circular-bold`}
                                            }
                                            em {
                                                font-style: normal;
                                                ${tw`font-circular-light`}
                                            }
                                        `,
                                    ]}
                                    dangerouslySetInnerHTML={{ __html: overview?.childMarkdownRemark?.html }}
                                />
                            </Text>

                            <div tw="grid-cols-3 gap-x-6 hidden lg:grid">
                                {featureCards?.map(({ title, image }, idx) => {
                                    return (
                                        <SvgCard
                                            key={idx}
                                            icon={
                                                image?.gatsbyImageData ? (
                                                    <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} tw="max-w-[96px]" />
                                                ) : (
                                                    <img src={image?.file?.url} alt={image?.title} tw="max-w-[96px]" />
                                                )
                                            }
                                            content={<div>{title}</div>}
                                        />
                                    );
                                })}
                            </div>
                            <div css={[sliderOverride]} tw="lg:hidden w-9/12">
                                <Slider
                                    {...svgSliderSettings}
                                    css={[
                                        css`
                                            .slick-list {
                                                overflow: visible;
                                            }
                                            .slick-track {
                                                ${tw`flex`}
                                            }
                                            .slick-slide {
                                                float: none;
                                                height: auto;
                                            }
                                            .slick-slide > div {
                                                height: 100%;
                                            }
                                        `,
                                    ]}
                                >
                                    {featureCards?.map(({ title, image }, idx) => {
                                        return (
                                            <SvgCard
                                                key={idx}
                                                tw="h-full"
                                                icon={
                                                    image?.gatsbyImageData ? (
                                                        <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} tw="max-w-[96px]" />
                                                    ) : (
                                                        <img src={image?.file?.url} alt={image?.title} tw="max-w-[96px]" />
                                                    )
                                                }
                                                content={<div>{title}</div>}
                                            />
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div tw="pb-12 pt-12 lg:pt-0 px-4 lg:px-0 lg:pb-48">
                <div tw="container px-4 mx-auto">
                    <SubHeader tw="mb-6 lg:mb-16">Products</SubHeader>
                </div>
                <LightingSlider products={products?.edges} />
            </div>
            <div tw="bg-sitegray lg:py-48 py-16">
                <div tw="container px-4 mx-auto">
                    <SubHeader tw="font-sf-light mb-10 lg:mb-24">Comparison</SubHeader>
                    <div css={[tableContainer]}>
                        <ComparisonTableLighting headers={comparisonTableHeader} rows={comparisonTableBody} />
                    </div>
                </div>
            </div>
            <div tw="py-16 lg:py-48">
                <div tw="container px-4 mx-auto">
                    <SubHeader tw="mb-10 lg:mb-24 font-sf-light">Upgrades</SubHeader>
                    <UpgradeSteps2 cards={upgrades} />
                    <div tw="pt-16 lg:pt-36">
                        <ExtraInfoLight
                            caption={
                                <div
                                    css={[
                                        css`
                                            strong {
                                                ${tw`font-circular-bold`}
                                            }
                                            em {
                                                font-style: normal;
                                                ${tw`font-circular-light`}
                                            }
                                        `,
                                    ]}
                                    dangerouslySetInnerHTML={{ __html: textBanner?.childMarkdownRemark?.html }}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
            <div tw="bg-sitegray lg:py-48 py-12">
                <div tw="container px-4 mx-auto">
                    <InFieldGallery
                        images={gallery?.map((image, idx) =>
                            image?.gatsbyImageData ? <GatsbyImage key={idx} image={image?.gatsbyImageData} alt={image?.title} /> : ""
                        )}
                    />
                </div>
            </div>
            <BecomeDistributor {...imageCopy} />
        </Layout>
    );
}

export const query = graphql`
    query ($id: String!) {
        contentfulProductCategory(id: { eq: $id }) {
            name
            slug
            summary {
                childMarkdownRemark {
                    html
                }
            }
            thumbnail {
                ...Image
            }
            pageTitle
            overview {
                childMarkdownRemark {
                    html
                }
            }
            featureCards {
                ...CardSimple
            }
            comparisonTableHeader {
                ...TableHeader
            }
            comparisonTableBody {
                ...TableRow
            }
            upgrades {
                ...CardSimple
            }
            textBanner {
                childMarkdownRemark {
                    html
                }
            }
            gallery {
                ...Image
            }
            imageCopy {
                ...ImageCopy
            }
        }
        products: allContentfulProduct(filter: { category: { id: { eq: $id } } }) {
            edges {
                node {
                    name {
                        childMarkdownRemark {
                            html
                        }
                    }
                    summary {
                        childMarkdownRemark {
                            html
                        }
                    }
                    thumbnail {
                        ...Image
                    }
                    slug
                }
            }
        }
    }
`;
