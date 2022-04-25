import * as React from "react";
import tw, { css } from "twin.macro";
import Slick from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import BtnSliderArrow from "../btn-slider-arrow";

function Slider({ slickRef, children }) {
    const productSliderSettings = {
        // infinite: true,
        speed: 500,
        slidesToShow: 2,
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
        <Slick {...productSliderSettings} ref={slickRef}>
            {children}
        </Slick>
    );
}

export function NoCompromises({ heading, copySliders }) {
    const slider1Ref = React.useRef();
    const slider2Ref = React.useRef();

    return (
        <div tw="rounded py-12 lg:py-48 bg-sitegray">
            <div tw="container px-4 mx-auto">
                <div tw="mb-12 lg:mb-32">
                    <div tw="text-px36 lg:text-px72 leading-normal font-sf-light">
                        <div
                            tw="text-px36 lg:text-px72 leading-normal font-sf-light"
                            css={[
                                css`
                                    strong {
                                        ${tw`font-sf-bold text-primary leading-tight`}
                                    }
                                `,
                            ]}
                            dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }}
                        />
                    </div>
                </div>
            </div>
            {copySliders.map(({ heading, subText, images }, idx) => {
                const sliderRef = idx === 0 ? slider1Ref : slider2Ref;
                return (
                    <div tw="overflow-x-hidden" key={idx}>
                        <div
                            tw="mb-12 lg:mb-32 grid grid-cols-1 lg:grid-cols-3 items-center gap-4 lg:gap-16"
                            css={[idx % 2 === 0 ? tw`lg:-ml-80` : tw`lg:-mr-80`]}
                        >
                            <div tw="lg:col-span-2" css={[idx % 2 === 0 ? tw`lg:pr-16` : tw`lg:pl-16`]}>
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
                                        tw="bg-white absolute bottom-4 z-10 pt-3 pb-2 px-3"
                                        css={[idx % 2 === 0 ? tw`right-4 rounded-br` : tw`left-4 rounded-bl`]}
                                    />
                                    <Slider slickRef={sliderRef}>
                                        {images.map((image, index) => (
                                            <div tw="p-4" key={index}>
                                                <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div tw="container px-4 mx-auto" css={[idx % 2 === 0 ? tw`lg:order-last lg:pr-32` : tw`lg:order-first lg:pl-32`]}>
                                <div tw="text-px24 lg:text-px54 lg:mb-12 font-circular-bold">
                                    <div tw="my-4">{heading}</div>
                                </div>
                                <div
                                    tw="text-px16 lg:text-px21 font-circular-regular leading-normal"
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
                );
            })}
        </div>
    );
}

export default NoCompromises;
