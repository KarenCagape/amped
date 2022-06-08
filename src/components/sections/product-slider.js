import * as React from "react";
import tw, { css } from "twin.macro";
import Slider from "react-slick";
import ProductCardLandscape from "../product-card-landscape";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../_/button";
import SliderButton from "../btn-slider-arrow";

function ProductSlider({ heading, reverse = false, products, ...rest }) {
    const sliderRef = React.useRef();
    const productSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: "unslick",
            },
        ],
    };

    return (
        <div tw="overflow-x-hidden " css={[reverse && tw`bg-sitegray`]} {...rest}>
            <div tw="container lg:px-4 mx-auto">
                <div>{heading}</div>
                <div tw="relative lg:flex lg:gap-8">
                    <div css={[reverse ? tw`bg-sitegray before:bg-sitegray` : tw`bg-white before:bg-white`]} tw="hidden lg:flex lg:items-end lg:flex-[0 0 8.3333%] pb-12 relative z-10 before:lg:content-[''] before:top-0 before:-right-12 2xl:before:-right-8 before:w-[50vw] before:h-full before:absolute">
                        <SliderButton
                            onClick={() => {
                                sliderRef.current.slickNext();
                            }}
                        />
                    </div>
                    <div tw="lg:flex-1 lg:max-w-[88%] 2xl:max-w-[75%]">
                        <Slider
                            ref={sliderRef}
                            {...productSliderSettings}
                            css={[
                                css`
                                    .slick-list {
                                        ${tw`overflow-visible`}
                                    }
                                    .slick-track {
                                        ${tw`lg:flex`}
                                    }
                                    .slick-slide {
                                        ${tw`float-none h-auto`}

                                        &>div {
                                            ${tw`h-full`}
                                        }
                                    }
                                `,
                            ]}
                        >
                            {products?.map(({ node }, idx) => (
                                <div tw="p-4 lg:py-0 h-full" key={idx}>
                                    <ProductCardLandscape
                                        img={
                                            node?.thumbnail?.gatsbyImageData ? (
                                                <GatsbyImage
                                                    tw="w-full"
                                                    image={node?.thumbnail?.gatsbyImageData}
                                                    alt={node?.thumbnail?.title}
                                                />
                                            ) : (
                                                ""
                                            )
                                        }
                                        title={
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
                                                        del {
                                                            text-decoration: none;
                                                            ${tw`font-kallisto font-bold`}
                                                        }
                                                    `,
                                                ]}
                                                dangerouslySetInnerHTML={{ __html: node?.name?.childMarkdownRemark?.html }}
                                            />
                                        }
                                        caption={<div dangerouslySetInnerHTML={{ __html: node?.summary?.childMarkdownRemark?.html }} />}
                                        action={
                                            node.notAvailable ? (
                                                <Button tw="bg-secondary text-px16" as="a">
                                                    COMING SOON
                                                </Button>
                                            ) : (
                                                <Button tw="text-px16" as="a" href={`/products/${node?.slug}`}>
                                                    VIEW PRODUCT
                                                </Button>
                                            )
                                        }
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSlider;
