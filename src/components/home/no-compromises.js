import * as React from "react";
import tw, { css } from "twin.macro";
import Slick from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import BtnSliderArrow from "../btn-slider-arrow";

function Slider({ slickRef, children, ...rest }) {
    const productSliderSettings = {
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <Slick {...productSliderSettings} ref={slickRef} {...rest}>
            {children}
        </Slick>
    );
}

export function NoCompromises({ heading, copySliders }) {
    const slider1Ref = React.useRef();
    const slider2Ref = React.useRef();

    return (
        <div tw="rounded py-12 lg:pt-32 2xl:pt-48 lg:pb-16 2xl:pb-24 bg-sitegray">
            <div tw="container px-4 mx-auto">
                <div tw="mb-12 lg:mb-32">
                    <div
                        tw="text-px36 lg:text-[56px] 2xl:text-px72 leading-none font-sf-light"
                        css={[
                            css`
                                strong {
                                    ${tw`font-sf-bold text-primary`}
                                }
                            `,
                        ]}
                        dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }}
                    />
                </div>
            </div>
            {copySliders.map(({ heading, subText, images }, idx) => {
                const sliderRef = idx === 0 ? slider1Ref : slider2Ref;
                return (
                    <div tw="overflow-x-hidden pb-5 lg:pb-0" key={idx}>
                        <div tw="container px-4 mx-auto">
                            <div
                                tw="mb-12 lg:mb-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 relative after:hidden after:lg:block after:content-[''] after:bg-sitegray after:absolute after:top-0 after:h-full after:w-[60vw]"
                                css={[idx % 2 === 0 ? tw`after:left-[calc(50% - 2rem)]` : tw`after:right-[calc(50% - 2rem)]`]}
                            >
                                <div>
                                    <div tw="relative">
                                        <BtnSliderArrow
                                            flipX={idx % 2 !== 0}
                                            onClick={() => {
                                                if (idx % 2 === 0) {
                                                    sliderRef.current.slickPrev();
                                                } else {
                                                    sliderRef.current.slickNext();
                                                }
                                            }}
                                            tw="bg-[#f1f4f5] absolute bottom-0 z-10 pt-3 pb-2 px-3 rounded-[5px]"
                                            css={[
                                                idx % 2 === 0
                                                    ? tw`right-2 lg:right-4 rounded-tr-none rounded-bl-none`
                                                    : tw`left-2 lg:left-4 rounded-tl-none rounded-br-none`,
                                            ]}
                                        />
                                        <Slider
                                            slickRef={sliderRef}
                                            css={[
                                                css`
                                                    .slick-track {
                                                        ${tw`flex`}
                                                    }
                                                    .slick-list {
                                                        ${tw`lg:overflow-visible`}
                                                    }
                                                `,
                                                idx % 2 === 0 ? css`` : css``,
                                            ]}
                                        >
                                            {images.map((image, index) => (
                                                <div tw="px-2 lg:px-4" key={index}>
                                                    {image?.gatsbyImageData ? (
                                                        <GatsbyImage tw="w-full rounded-[5px]" image={image?.gatsbyImageData} alt={image?.title} />
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div
                                    tw="relative z-10"
                                    css={[idx % 2 === 0 ? tw`lg:order-last lg:pl-16 2xl:pr-32` : tw`lg:order-first lg:pr-16 2xl:pl-32`]}
                                >
                                    <div tw="text-px24 lg:text-px48 2xl:text-px54 leading-none mb-6 lg:mb-8 font-circular-bold">{heading}</div>
                                    <div
                                        tw="text-px16 lg:text-px18 2xl:text-px21 font-circular-regular leading-normal"
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
                                        dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default NoCompromises;
