import * as React from "react";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";

import Link from "../link";

const sliderOverride = css`
    & .slick-track {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & .slick-slide {
        ${tw`mx-2`}
    }
`;

export function Brands({ logos, logoGrid }) {
    const productSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    autoWidth: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                },
            },
        ],
    };

    return (
        <div tw="container px-4 mx-auto">
            <div css={[sliderOverride]} tw="lg:hidden">
                <Slider tw="flex justify-between items-center py-4" {...productSliderSettings}>
                    {logos?.map(({ url, image }, index) => (
                        <Link key={index} href={url}>
                            <div tw="px-3">{image.gatsbyImageData ? <GatsbyImage image={image.gatsbyImageData} alt={image.title} /> : ""}</div>
                        </Link>
                    ))}
                </Slider>
            </div>
            <div tw="hidden lg:block px-2 py-6 lg:px-0 lg:py-16">
                <div tw="flex flex-nowrap justify-between items-center gap-[8.333%]" css={[logoGrid]}>
                    {logos?.map(({ url, image }, index) => (
                        <Link key={index} href={url} tw="flex-1">
                            {image.gatsbyImageData ? <GatsbyImage image={image.gatsbyImageData} alt={image.title} /> : ""}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Brands;
