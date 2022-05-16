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
import Button from "../components/_/button";

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
                                            p {
                                                ${tw`mb-6`}
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

            {/* Product List */}
            {products?.edges?.length ? (
                <div tw="pb-12 pt-12 lg:pt-0 px-4 lg:px-0 lg:pb-48">
                    {products?.edges?.length > 1 ? (
                        <>
                            <div tw="container px-4 mx-auto">
                                <SubHeader tw="mb-6 lg:mb-16">Products</SubHeader>
                            </div>
                            <LightingSlider products={products?.edges} />
                        </>
                    ) : products?.edges?.length === 1 ? (
                        <div tw="container px-4 mx-auto">
                            <div tw="lg:grid lg:grid-cols-5">
                                <SubHeader tw="lg:col-span-2 font-sf-light mb-10 lg:mb-0">Products</SubHeader>
                                <div tw="text-px21 lg:col-span-3">
                                    <div tw="bg-sitegray rounded lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center p-8 pb-12">
                                        <div tw="px-[8.333%] lg:px-0">
                                            {products.edges[0].node?.thumbnail?.gatsbyImageData ? (
                                                <GatsbyImage
                                                    image={products.edges[0].node?.thumbnail?.gatsbyImageData}
                                                    alt={products.edges[0].node?.thumbnail?.title}
                                                    tw="max-w-[440px] max-h-[440px]"
                                                />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div tw="text-center lg:text-left pt-8 lg:pt-0">
                                            <div
                                                tw="font-circular-bold mb-4 lg:mb-8 text-px18 lg:text-px24"
                                                css={[
                                                    css`
                                                        strong {
                                                            ${tw`font-circular-bold`}
                                                        }
                                                        em {
                                                            font-style: normal;
                                                            ${tw`font-circular-light`}
                                                        }
                                                        del {
                                                            text-decoration: none;
                                                            ${tw`font-kallisto font-bold`}
                                                        }
                                                    `,
                                                ]}
                                                dangerouslySetInnerHTML={{ __html: products.edges[0].node?.name?.childMarkdownRemark?.html }}
                                            />
                                            <div
                                                tw="text-px16 lg:text-px18 mb-8 lg:mb-16"
                                                dangerouslySetInnerHTML={{ __html: products.edges[0].node?.summary?.childMarkdownRemark?.html }}
                                            />
                                            <div>
                                                {products.edges[0].node.notAvailable ? (
                                                    <Button tw="bg-secondary text-px16" as="a">
                                                        COMING SOON
                                                    </Button>
                                                ) : (
                                                    <Button tw="text-px16" as="a" href={products.edges[0].node?.slug}>
                                                        VIEW PRODUCT
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                ""
            )}

            {/* Comparison Table */}
            {comparisonTableBody ? (
                <div tw="bg-sitegray lg:py-48 py-16">
                    <div tw="container px-4 mx-auto">
                        <SubHeader tw="font-sf-light mb-10 lg:mb-24">Comparison</SubHeader>
                        <div css={[tableContainer]}>
                            <ComparisonTableLighting headers={comparisonTableHeader} rows={comparisonTableBody} />
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}

            {/* Upgrades & Text Banner */}
            {upgrades ? (
                <div tw="pt-16" css={[comparisonTableBody ? tw`lg:pt-48` : ""]}>
                    <div tw="container px-4 mx-auto">
                        <SubHeader tw="mb-10 lg:mb-24 font-sf-light">Upgrades</SubHeader>
                        <UpgradeSteps2 cards={upgrades} />
                    </div>
                </div>
            ) : (
                ""
            )}

            {/* Text Banner */}
            {textBanner?.childMarkdownRemark?.html ? (
                <div tw="py-16" css={[comparisonTableBody || upgrades ? tw`lg:pt-36` : ""]}>
                    <div tw="container px-4 mx-auto">
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
            ) : (
                ""
            )}

            {/* Gallery */}
            {gallery ? (
                <div tw="bg-sitegray lg:py-48 py-12">
                    <div tw="container px-4 mx-auto">
                        <InFieldGallery
                            images={gallery?.map((image, idx) =>
                                image?.gatsbyImageData ? <GatsbyImage key={idx} image={image?.gatsbyImageData} alt={image?.title} /> : ""
                            )}
                        />
                    </div>
                </div>
            ) : (
                ""
            )}

            {/* Image - Copy Banner */}
            {imageCopy ? <BecomeDistributor {...imageCopy} /> : ""}
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
                    notAvailable
                }
            }
        }
    }
`;
