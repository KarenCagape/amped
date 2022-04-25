import * as React from "react";
import Slick from "react-slick";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../button";
import useWindowSize from "../../helpers/window-size";

import BtnSliderArrow from "../btn-slider-arrow";

const sliderOverride = css`
    & .slick-list,
    & .slick-track {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
    }

    & .slick-slide > div {
        height: 100%;
    }
`;

function Slider({ slickRef, children }) {
    const productSliderSettings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: "unslick",
            },
        ],
    };

    return (
        <div tw="w-full" css={sliderOverride}>
            <Slick {...productSliderSettings} ref={slickRef}>
                {children}
            </Slick>
        </div>
    );
}

function Card({ img, heading, text, button, ...rest }) {
    return (
        <div tw="p-12 h-full flex flex-col justify-between bg-sitegray rounded-md" {...rest}>
            <div>
                <div tw="flex justify-center items-center lg:h-64">
                    <div tw="w-10/12">{img}</div>
                </div>
                <div tw="text-px18 lg:text-px28 font-circular-bold mt-8 lg:mt-12 mb-6 lg:mb-8" css={[{ color: "#1C212B" }]}>
                    {heading}
                </div>
                <div tw="text-px16 lg:text-px21 mb-10 lg:mb-28 font-circular-regular">{text}</div>
            </div>
            <div tw="flex justify-center">{button}</div>
        </div>
    );
}

export function PoweringYourPossibilities({ heading, categories }) {
    const slickRef = React.useRef();
    const windowSize = useWindowSize();

    function handleArrowClick() {
        slickRef.current.slickNext();
    }

    return (
        <div tw="pb-0 mb-8 lg:pb-48">
            <div>
                <div tw="container px-4 mx-auto text-px36 lg:text-px72 font-sf-light">
                    <div
                        tw="leading-tight mb-12 lg:mb-32"
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
                <div tw="overflow-x-hidden">
                    <div tw="w-screen relative">
                        <div>
                            <div tw="relative flex justify-end lg:right-nvw20">
                                <BtnSliderArrow tw="absolute hidden lg:block" css={[{ left: "-6%", bottom: "4%" }]} onClick={handleArrowClick} />
                                <Slider slickRef={slickRef}>
                                    {categories.map(({ name, slug, summary, thumbnail }, idx) => (
                                        <div tw="px-4 lg:px-8 h-full mb-4 lg:mb-0" key={idx}>
                                            <Card
                                                img={<GatsbyImage image={thumbnail?.gatsbyImageData} alt={thumbnail?.title} />}
                                                heading={<div tw="text-center">{name}</div>}
                                                text={
                                                    <div tw="text-center">
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
                                                                `,
                                                            ]}
                                                            dangerouslySetInnerHTML={{ __html: summary?.childMarkdownRemark?.html }}
                                                        />
                                                    </div>
                                                }
                                                button={<Button text="VIEW PRODUCT" tw="px-4 py-2" path={`/${slug}`} />}
                                            />
                                        </div>
                                    ))}
                                    {windowSize.width >= 768 && categories.length < 5
                                        ? categories.map(({ name, slug, summary, thumbnail }, idx) => (
                                              <div tw="px-4 lg:px-8 h-full mb-4 lg:mb-0" key={idx}>
                                                  <Card
                                                      img={<GatsbyImage image={thumbnail?.gatsbyImageData} alt={thumbnail?.title} />}
                                                      heading={<div tw="text-center">{name}</div>}
                                                      text={
                                                          <div tw="text-center">
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
                                                                      `,
                                                                  ]}
                                                                  dangerouslySetInnerHTML={{ __html: summary?.childMarkdownRemark?.html }}
                                                              />
                                                          </div>
                                                      }
                                                      button={<Button text="VIEW PRODUCT" tw="px-4 py-2" path={`/${slug}`} />}
                                                  />
                                              </div>
                                          ))
                                        : ""}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PoweringYourPossibilities;
