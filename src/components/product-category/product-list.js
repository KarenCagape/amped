import * as React from "react";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import ProductSlider from "../sections/product-slider";
import { SubHeader } from "../_/header";
import Button from "../_/button";

const sortProductsByName = (a, b) => {
    const nameA = a.node?.name?.childMarkdownRemark?.excerpt?.toUpperCase();
    const nameB = b.node?.name?.childMarkdownRemark?.excerpt?.toUpperCase();
    const numberA = a.node?.name?.childMarkdownRemark?.excerpt?.replace(/\D/g, "");
    const numberB = b.node?.name?.childMarkdownRemark?.excerpt?.replace(/\D/g, "");

    if (numberA === numberB) {
        if (nameA > nameB) {
            return 1;
        } else if (nameA < nameB) {
            return -1;
        }

        return 0;
    } else {
        return numberA - numberB;
    }
};

export default function ProductList({ products }) {
    const sorted = products.sort(sortProductsByName);
    return (
        <div tw="pb-12 pt-12 lg:pt-0 px-4 lg:px-0 lg:pb-48">
            {products?.length > 1 ? (
                <>
                    <div tw="container px-4 mx-auto">
                        <SubHeader tw="mb-6 lg:mb-16">Products</SubHeader>
                    </div>
                    <ProductSlider products={sorted} />
                </>
            ) : products?.length === 1 ? (
                <div tw="container px-4 mx-auto">
                    <div tw="lg:grid lg:grid-cols-5">
                        <SubHeader tw="lg:col-span-2 font-sf-light mb-10 lg:mb-0">Products</SubHeader>
                        <div tw="text-px21 lg:col-span-3">
                            <div tw="bg-sitegray rounded lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center p-8 pb-12">
                                <div tw="px-[8.333%] lg:px-0">
                                    {products[0].node?.thumbnail?.gatsbyImageData ? (
                                        <GatsbyImage
                                            image={products[0].node?.thumbnail?.gatsbyImageData}
                                            alt={products[0].node?.thumbnail?.title}
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
                                        dangerouslySetInnerHTML={{ __html: products[0].node?.name?.childMarkdownRemark?.html }}
                                    />
                                    <div
                                        tw="text-px16 lg:text-px18 mb-8 lg:mb-16"
                                        dangerouslySetInnerHTML={{ __html: products[0].node?.summary?.childMarkdownRemark?.html }}
                                    />
                                    <div>
                                        {products[0].node.notAvailable ? (
                                            <Button tw="bg-secondary text-px16" as="a">
                                                COMING SOON
                                            </Button>
                                        ) : (
                                            <Button tw="text-px16" as="a" href={products[0].node?.slug}>
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
    );
}
