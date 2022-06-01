import * as React from "react";
import { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import Slider from "react-slick";
import SliderButton from "../btn-slider-arrow";

const sliderOverride = css`
    & .slick-list,
    & .slick-track {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
    }

    & .slick-list {
        overflow: visible;
    }

    & .slick-slide > div {
        height: 100%;
    }
`;

function ContentSlider({ sliderRef, contents = [], slidesToShow = 1, ...rest }) {
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoWidth: true,
    };

    return (
        <Slider tw="max-w-[83.333%] mx-auto lg:max-w-full" {...sliderSettings} {...rest} ref={sliderRef}>
            {contents.map((content, idx) => (
                <div tw="min-h-full" key={idx}>
                    {content}
                </div>
            ))}
        </Slider>
    );
}

function StorySliderContent({ media, caption, author }) {
    return (
        <div tw="mx-4 lg:mx-8 min-h-full flex flex-col justify-between">
            <div tw="w-full">{media}</div>
            <div tw="lg:text-px18 2xl:text-px21 p-8 my-4 lg:my-10 bg-sitegray rounded">{caption}</div>
            <div>{author}</div>
        </div>
    );
}

function StoryAuthor({ image, name, address }) {
    return (
        <div tw="flex items-center">
            <div tw="rounded-full w-16 h-16 lg:w-24 lg:h-24 bg-gray-200 mr-4">{image}</div>
            <div tw="flex-1">
                <div tw="lg:text-px21 2xl:text-px28">{name}</div>
                <div tw="text-px16 text-secondary">{address}</div>
            </div>
        </div>
    );
}

export default function Testimonials({ heading, testimonials }) {
    const sliderRef = React.useRef();

    return (
        <div tw="overflow-x-hidden py-10 lg:pt-0 lg:pb-48">
            <div tw="px-4 container m-auto">
                <div tw="grid grid-cols-1 lg:grid-cols-5">
                    <div tw="col-span-2 mb-10 lg:mb-0 bg-white relative z-10 before:lg:content-[''] before:top-0 before:right-0 before:w-[50vw] before:h-full before:absolute before:bg-white lg:pr-[12%] 2xl:pr-[20%] lg:flex lg:flex-row">
                        {heading ? <div tw="text-px18 lg:text-px28 relative 2xl:text-px36 font-circular-bold lg:flex-[0 0 auto]">{heading}</div> : ""}
                        <div tw="relative hidden lg:flex lg:items-end lg:justify-end lg:flex-1 pb-16">
                            <SliderButton
                                onClick={() => {
                                    sliderRef.current.slickNext();
                                }}
                            />
                        </div>
                    </div>
                    <div tw="col-span-3 relative" css={sliderOverride}>
                        {testimonials ? (
                            <ContentSlider
                                tw=""
                                css={[
                                    css`
                                        @media (max-width: 480px) {
                                            .slick-list {
                                                overflow: visible;
                                            }
                                        }
                                    `,
                                ]}
                                sliderRef={sliderRef}
                                contents={testimonials?.map(({ name, quote, jobInfo, image, headshot }, idx) => (
                                    <StorySliderContent
                                        key={idx}
                                        media={
                                            <div tw="flex items-center justify-center lg:h-full">
                                                <div tw="relative max-h-[475px]">
                                                    {image?.gatsbyImageData ? (
                                                        <GatsbyImage
                                                            tw="max-h-full rounded w-full"
                                                            image={image?.gatsbyImageData}
                                                            alt={image?.title}
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                        }
                                        caption={<div dangerouslySetInnerHTML={{ __html: quote?.childMarkdownRemark?.html }} />}
                                        author={
                                            <StoryAuthor
                                                image={
                                                    <div>
                                                        {headshot?.gatsbyImageData ? (
                                                            <GatsbyImage tw="w-full" image={headshot?.gatsbyImageData} alt={headshot?.title} />
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>
                                                }
                                                name={name}
                                                address={jobInfo}
                                            />
                                        }
                                    />
                                ))}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
