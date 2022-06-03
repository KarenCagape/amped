import * as React from "react";
import tw, { css } from "twin.macro";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ProductBottomBanner from "../components/product/product-bottom-banner";
import { SubHeader } from "../components/_/header";

import ProductCategoryHero from "../components/product-category/product-cat-hero";
import Overview from "../components/product-category/overview";
import ProductList from "../components/product-category/product-list";
import ComparisonTable from "../components/product-category/comparison-lighting";
import UpgradesList from "../components/product-category/upgrades-list";
import InFieldGallery from "../components/product-category/in-field-gallery";
import ExtraInfoLight from "../components/product-category/extra-info-light";

const tableContainer = css`
    ${tw`overflow-x-scroll lg:overflow-visible`}
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

    return (
        <Layout pageTitle={name}>
            {/* HERO */}
            <ProductCategoryHero heading={pageTitle} image={thumbnail} subText={summary} />

            {/* OVERVIEW */}
            <Overview overview={overview} featureCards={featureCards} />

            {/* Product List */}
            {products?.edges?.length ? <ProductList products={products?.edges} /> : ""}

            {/* Comparison Table */}
            {comparisonTableBody ? (
                <div tw="bg-sitegray lg:py-40 py-16">
                    <div tw="container px-4 mx-auto">
                        <SubHeader tw="font-sf-light mb-10 lg:mb-16">Comparison</SubHeader>
                        <div css={[tableContainer]}>
                            <ComparisonTable headers={comparisonTableHeader} rows={comparisonTableBody} />
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}

            {/* Upgrades & Text Banner */}
            {upgrades ? (
                <div tw="pt-16" css={[comparisonTableBody ? tw`lg:pt-40` : ""]}>
                    <div tw="container px-4 mx-auto">
                        <SubHeader tw="mb-10 lg:mb-16 font-sf-light">Upgrades</SubHeader>
                        <UpgradesList cards={upgrades} />
                    </div>
                </div>
            ) : (
                ""
            )}

            {/* Text Banner */}
            {textBanner?.childMarkdownRemark?.html ? (
                <div tw="py-16 lg:pb-40" css={[comparisonTableBody || upgrades ? tw`lg:pt-36` : ""]}>
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
            {imageCopy ? <ProductBottomBanner {...imageCopy} /> : ""}
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
