import * as React from "react";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import Slider from "react-slick";
import SliderButton from "../btn-slider-arrow";

function ContentSlider({ sliderRef, contents = [], slidesToShow = 1, ...rest }) {
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
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
        <div tw="mx-4 lg:mx-8">
            {media ? <div>{media}</div> : ""}
            <div>
                {title ? <div tw="text-px18 lg:text-px21 2xl:text-px28 leading-normal mt-6 lg:mt-8">{title}</div> : ""}
                {actions ? <div tw="text-px14 lg:text-px18 text-secondary mt-2">{actions}</div> : ""}
            </div>
        </div>
    );
}

export default function NewsSlider({ heading, copy, resources, ...rest }) {
    const sliderRef = React.useRef();

    return (
        <div tw="py-16 pb-10 lg:py-32 2xl:py-48 overflow-x-hidden bg-sitegray" {...rest}>
            <div tw="container px-4 mx-auto">
                <div tw="grid grid-cols-1 lg:grid-cols-5">
                    <div tw="lg:block col-span-2 mb-10 lg:mb-0 bg-sitegray relative z-10 before:lg:content-[''] before:top-0 before:right-0 before:w-[50vw] before:h-full before:absolute before:bg-sitegray lg:pr-[12%] 2xl:pr-[20%] lg:flex lg:flex-row">
                        {heading ? (
                            <div tw="relative text-px24 lg:text-px48 2xl:text-px54 leading-tight col-span-2 mb-4 lg:mb-0">
                                {heading}
                            </div>
                        ) : (
                            ""
                        )}
                        {resources?.length > 2 ? (
                            <div tw="relative hidden lg:flex lg:items-end lg:justify-end lg:flex-1 pb-16">
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
                                    actions={<a href={url}>Read More</a>}
                                />
                            ))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
