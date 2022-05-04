import * as React from "react";
import tw, { css } from "twin.macro";
import Slider from "react-slick";
import ProductCardLandscape from "./product-card-landscape";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "./_/button";
import SliderButton from "./btn-slider-arrow";

export function LightingSlider({ heading, reverse = false, products, ...rest }) {
    const sliderRef = React.useRef();
    const productSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: "unslick",
            },
        ],
    };

    return (
        <div css={[reverse && tw`bg-sitegray`]} {...rest}>
            {heading}
            <div tw="relative grid grid-cols-1 lg:grid-cols-6">
                <SliderButton
                    tw="absolute hidden lg:block"
                    onClick={() => {
                        sliderRef.current.slickNext();
                    }}
                    css={[
                        {
                            bottom: "5%",
                            left: "10%",
                        },
                    ]}
                />
                <div tw="hidden lg:block"></div>
                <div tw="overflow-x-hidden lg:col-span-5">
                    <div tw="lg:w-screen">
                        <Slider ref={sliderRef} tw="lg:-mr-80" {...productSliderSettings}>
                            {products?.map(({ node }, idx) => (
                                <div tw="p-4 lg:py-0" key={idx}>
                                    <ProductCardLandscape
                                        css={[reverse && tw`bg-white`]}
                                        img={
                                            node?.thumbnail?.gatsbyImageData ? (
                                                <GatsbyImage
                                                    image={node?.thumbnail?.gatsbyImageData}
                                                    alt={node?.thumbnail?.title}
                                                    tw="max-w-[440px] max-h-[440px]"
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
                                                <Button tw="text-px16" as="a" href={node?.slug}>
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

export default LightingSlider;
