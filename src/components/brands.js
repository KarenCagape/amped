import * as React from 'react';
import tw, { css } from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';

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

export function Brands() {
  const productSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div css={[sliderOverride]} tw="lg:hidden">
        <Slider
          tw="flex justify-between items-center"
          {...productSliderSettings}
        >
          <a href="/#">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/logo-autodesk.png"
            />
          </a>
          <a href="/#">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/logo-engie.png"
            />
          </a>
          <a href="/#">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/logo=schneider.png"
            />
          </a>
          <a href="/#">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/logo-global-partnership.png"
            />
          </a>
          <a href="/#">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/logo-alphamundi.png"
            />
          </a>
        </Slider>
      </div>
      <div tw="hidden lg:flex justify-center items-center px-2 py-6 lg:px-0 lg:py-16">
        <div tw="flex flex-nowrap justify-between items-center lg:w-9/12">
          <a href="/#">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/logo-autodesk.png"
            />
          </a>
          <a href="/#">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/logo-engie.png"
            />
          </a>
          <a href="/#">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/logo=schneider.png"
            />
          </a>
          <a href="/#">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/logo-global-partnership.png"
            />
          </a>
          <a href="/#">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/logo-alphamundi.png"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Brands;
