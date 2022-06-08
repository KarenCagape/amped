import * as React from "react";
import tw, { css } from "twin.macro";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import ProductHero from "../../components/product/product-hero";
import DataAndSpecSummary from "../../components/product/data-and-spec-summary";
import Button from "../../components/_/button";
import { SvgCardLandscape, SvgCard } from "../../components/svg-card";
import ExtraInfoFill from "../../components/extra-info-fill";
import ProductSlider from "../../components/sections/product-slider";
import ProductBottomBanner from "../../components/product/product-bottom-banner";
import Slider from "react-slick";

const svgSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
};

export default function Product({ data }) {
    const { contentfulProduct } = data;
    const {
        name,
        pageTitle,
        summary,
        thumbnail,
        intro,
        logo,
        ctAsIntro,
        headingConfigurations,
        cardsConfigurations,
        headingWhatsIncluded,
        cardsWhatsIncluded,
        footnoteWhatsIncluded,
        relatedProducts,
        textBanner,
        imagecopyBanner,
    } = contentfulProduct;
    const [products, setProducts] = React.useState();

    const detailRef = React.useRef();

    React.useEffect(() => {
        if (relatedProducts) {
            setProducts(() => relatedProducts.map((item) => ({ node: { ...item } })));
        }
    }, [relatedProducts]);

    return (
        <Layout pageTitle={pageTitle}>
            <div tw="relative">
                {/* HERO */}
                <div tw="hidden lg:sticky top-0 lg:flex lg:justify-end lg:items-center lg:z-10 lg:pointer-events-none lg:min-h-screen">
                    <div tw="w-full lg:w-1/2 p-16">
                        {thumbnail?.gatsbyImageData ? <GatsbyImage image={thumbnail?.gatsbyImageData} alt={thumbnail?.title} /> : ""}
                    </div>
                </div>
                <div tw="lg:absolute lg:top-0 lg:left-0 lg:min-h-screen w-full">
                    <ProductHero
                        detailRef={detailRef}
                        bannerLogo={
                            logo?.gatsbyImageData ? (
                                <GatsbyImage image={logo?.gatsbyImageData} alt={logo?.title} />
                            ) : (
                                <img src={logo?.file?.url} alt={logo?.title} />
                            )
                        }
                        image={
                            thumbnail?.gatsbyImageData ? (
                                <GatsbyImage tw="lg:hidden mx-auto" image={thumbnail?.gatsbyImageData} alt={thumbnail?.title} />
                            ) : (
                                ""
                            )
                        }
                        wowsolar={
                            <div
                                tw="text-lg lg:text-px21 2xl:text-px28"
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
                                            ${tw`text-primary font-kallisto font-bold`}
                                        }
                                    `,
                                ]}
                                dangerouslySetInnerHTML={{ __html: name?.childMarkdownRemark?.html }}
                            />
                        }
                        caption={
                            <div
                                css={[
                                    css`
                                        strong {
                                            ${tw`text-primary`}
                                        }
                                    `,
                                ]}
                                dangerouslySetInnerHTML={{ __html: summary?.childMarkdownRemark?.html }}
                            />
                        }
                    />
                </div>

                {/* DATA and SPEC */}
                <div tw="overflow-hidden" ref={detailRef}>
                    <div tw="px-4 container mx-auto lg:py-48 py-16">
                        <DataAndSpecSummary
                            tw="mb-8 lg:mb-24"
                            caption={
                                <span
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
                                    dangerouslySetInnerHTML={{ __html: intro?.childMarkdownRemark?.html }}
                                />
                            }
                            actions={
                                <div tw="flex gap-4">
                                    {ctAsIntro?.map(({ title, url }, idx) => (
                                        <div tw="w-auto">
                                            <Button key={idx} css={[idx % 2 !== 0 ? tw`bg-secondary` : ""]} as="a" href={url}>
                                                {title}
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            }
                        />
                        <div tw="lg:mb-32 mb-8 mt-14 lg:w-1/2">
                            <div tw="text-px16 lg:text-px21 2xl:text-px28 lg:mb-16 mb-8">
                                <span
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
                                    dangerouslySetInnerHTML={{ __html: headingConfigurations?.childMarkdownRemark?.html }}
                                />
                            </div>
                            {cardsConfigurations?.map(({ title, subText, icons }, idx) => (
                                <div key={idx}>
                                    <SvgCardLandscape
                                        tw="mb-8"
                                        title={
                                            <span
                                                css={[
                                                    css`
                                                        strong {
                                                            ${tw`text-primary font-circular-book`}
                                                        }
                                                    `,
                                                ]}
                                                dangerouslySetInnerHTML={{ __html: title?.childMarkdownRemark?.html }}
                                            />
                                        }
                                        caption={<span dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }} />}
                                        svg={icons?.map((icon, idx2) =>
                                            icon?.gatsbyImageData ? (
                                                <GatsbyImage
                                                    key={idx2}
                                                    image={icon?.gatsbyImageData}
                                                    alt={icon?.title}
                                                    tw="w-[44px] lg:w-[72px]"
                                                />
                                            ) : (
                                                <img key={idx2} src={icon?.file?.url} alt={icon?.title} tw="w-[44px] lg:w-[72px]" />
                                            )
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                        <div tw="lg:w-1/2 py-10 lg:py-0">
                            <div tw="text-2xl lg:text-px21 2xl:text-px28 lg:mb-12 mb-8">{headingWhatsIncluded}</div>

                            <div tw="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mb-16 mb-6">
                                {cardsWhatsIncluded?.map(({ title, image }, idx) => (
                                    <SvgCard
                                        tw="w-full h-full"
                                        icon={
                                            image?.gatsbyImageData ? (
                                                <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} tw="w-[72px]" />
                                            ) : (
                                                <img src={image?.file?.url} alt={image?.title} tw="w-[72px]" />
                                            )
                                        }
                                        content={title}
                                    />
                                ))}
                            </div>

                            <div tw="lg:hidden">
                                <Slider
                                    {...svgSliderSettings}
                                    tw="w-8/12 lg:mb-16 mb-6 -mx-2 lg:-mx-4"
                                    css={[
                                        css`
                                            .slick-list {
                                                ${tw`overflow-visible`}
                                            }
                                            .slick-track {
                                                ${tw`flex`}
                                            }
                                            .slick-slide {
                                                ${tw`float-none h-auto`}

                                                & > div {
                                                    ${tw`min-h-full flex`}
                                                }
                                            }
                                        `,
                                    ]}
                                >
                                    {cardsWhatsIncluded?.map(({ title, image }, idx) => (
                                        <div key={idx} tw="px-4 flex-1">
                                            <SvgCard
                                                tw="w-full h-full"
                                                icon={
                                                    image?.gatsbyImageData ? (
                                                        <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} tw="w-[54px] lg:w-[72px]" />
                                                    ) : (
                                                        <img src={image?.file?.url} alt={image?.title} tw="w-[54px] lg:w-[72px]" />
                                                    )
                                                }
                                                content={title}
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            <div tw="text-secondary text-px14 lg:text-px16">{footnoteWhatsIncluded}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* TEXT BANNER */}
            <div tw="pb-24" css={[products ? tw`lg:pb-48` : ""]}>
                <div tw="container px-4 mx-auto">
                    <ExtraInfoFill
                        caption={
                            <>
                                <div
                                    css={[
                                        css`
                                            ${tw`leading-snug`}
                                            strong {
                                                ${tw`font-circular-bold`}
                                            }
                                            em {
                                                font-style: normal;
                                                ${tw`font-circular-light`}
                                            }
                                            del {
                                                text-decoration: none;
                                                ${tw`text-primary font-kallisto font-bold`}
                                            }
                                        `,
                                    ]}
                                    dangerouslySetInnerHTML={{ __html: textBanner?.childMarkdownRemark?.html }}
                                />
                            </>
                        }
                    />
                </div>
            </div>

            {/* PRODUCT SLIDER */}
            {products ? (
                <div>
                    <ProductSlider
                        css={[
                            css`
                                .product-card {
                                    ${tw`bg-white`}
                                }
                            `,
                        ]}
                        products={products}
                        heading={
                            <div tw="container px-4 mx-auto font-sf-light text-px24 lg:text-px48 2xl:text-px54 lg:mb-12">Other similar products</div>
                        }
                        reverse={true}
                        tw="lg:py-48 py-16"
                    />
                </div>
            ) : (
                ""
            )}
            <div>
                <ProductBottomBanner {...imagecopyBanner} />
            </div>
        </Layout>
    );
}

export const query = graphql`
    query ($id: String!) {
        contentfulProduct(id: { eq: $id }) {
            name {
                childMarkdownRemark {
                    html
                }
            }
            pageTitle
            slug
            summary {
                childMarkdownRemark {
                    html
                }
            }
            thumbnail {
                ...Image
            }
            intro {
                childMarkdownRemark {
                    html
                }
            }
            logo {
                ...Image
            }
            ctAsIntro {
                ...Button
            }
            headingConfigurations {
                childMarkdownRemark {
                    html
                }
            }
            cardsConfigurations {
                ...CardIcon
            }
            headingWhatsIncluded
            cardsWhatsIncluded {
                ...CardSimple
            }
            footnoteWhatsIncluded
            relatedProducts {
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
            textBanner {
                childMarkdownRemark {
                    html
                }
            }
            imagecopyBanner {
                ...ImageCopy
            }
        }
    }
`;
