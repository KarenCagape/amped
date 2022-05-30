import * as React from "react";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";

import { Text } from "../_/text";
import SvgCard from "../svg-card";
import { SubHeader } from "../_/header";

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

const svgSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
};

export default function Overview({ overview, featureCards }) {
    return (
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
    );
}
