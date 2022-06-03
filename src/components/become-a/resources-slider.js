import * as React from "react";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import Slider from "react-slick";
import SliderButton from "../btn-slider-arrow";

function ContentSlider({ sliderRef, contents = [], slidesToShow = 2, ...rest }) {
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
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

function DownloadableContent({ media, title, actions }) {
    return (
        <div tw="mx-4 lg:mx-6">
            <div
                css={[
                    {
                        minHeight: 250,
                    },
                ]}
            >
                {media}
            </div>
            <div>
                <div tw="text-px28 mt-8">{title}</div>
                <div tw="font-circular-bold lg:font-circular-regular lg:text-px18 text-secondary mt-3">{actions}</div>
            </div>
        </div>
    );
}

export default function ResourcesSlider({ heading, copy, resources, ...rest }) {
    const sliderRef = React.useRef();

    return (
        <div tw="py-16 pb-10 lg:py-32 overflow-x-hidden" {...rest}>
            {heading || copy?.childMarkdownRemark?.html ? (
                <div tw="px-4 container mx-auto pb-16 lg:pb-32">
                    <div tw="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-8 2xl:gap-x-16">
                        {heading ? (
                            <div tw="text-px18 lg:text-px28 relative 2xl:text-px36 col-span-2 font-circular-bold mb-4 lg:mb-0 lg:pr-[8.333%] 2xl:pr-[20%]">
                                {heading}
                            </div>
                        ) : (
                            ""
                        )}
                        {copy?.childMarkdownRemark?.html ? (
                            <div tw="lg:text-px18 2xl:text-px21 col-span-3" dangerouslySetInnerHTML={{ __html: copy?.childMarkdownRemark?.html }} />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
            <div tw="container px-4 mx-auto">
                <div tw="grid grid-cols-1 lg:grid-cols-5">
                    <div tw="hidden lg:block col-span-2 mb-10 lg:mb-0 bg-white relative z-10 before:lg:content-[''] before:top-0 before:right-0 before:w-[50vw] before:h-full before:absolute before:bg-white lg:pr-[12%] 2xl:pr-[20%] lg:flex lg:flex-row">
                        {resources?.length > 2 ? (
                            <div tw="relative lg:flex lg:items-end lg:justify-end lg:flex-1 pb-16">
                                <SliderButton
                                    onClick={() => {
                                        sliderRef.current.slickNext();
                                    }}
                                />
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div tw="col-span-3 relative">
                        <ContentSlider
                            sliderRef={sliderRef}
                            css={[
                                css`
                                    .slick-list {
                                        overflow: visible;
                                    }
                                `,
                            ]}
                            contents={resources?.map(({ title, url, image }, idx) => (
                                <DownloadableContent
                                    key={idx}
                                    media={
                                        <div tw="w-full flex">
                                            {image?.gatsbyImageData ? (
                                                <GatsbyImage tw="w-full" image={image?.gatsbyImageData} alt={image?.title} />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    }
                                    title={
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
                                                        ${tw`font-kallisto font-bold`}
                                                    }
                                                `,
                                            ]}
                                            dangerouslySetInnerHTML={{ __html: title?.childMarkdownRemark?.html }}
                                        />
                                    }
                                    actions={<a href={url}>Download Now</a>}
                                />
                            ))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
