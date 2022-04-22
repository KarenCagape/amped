import * as React from "react";
import tw from "twin.macro";
import Slider from "react-slick";
import ProductCardLandscape from "./product-card-landscape";
import { StaticImage } from "gatsby-plugin-image";
import WowSolar from "./wowsolar";
import GlobalStyles from './global-styles';
import Button from "./_/button";
import SliderButton from "./btn-slider-arrow";

export function ProductSlider2({ heading, reverse = false, ...rest }) {
  const sliderRef = React.useRef();
  const productSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
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
          <div
            css={[
              {
                width: "110vw",
              },
            ]}
          >
            <Slider ref={sliderRef} tw="lg:-mr-80" {...productSliderSettings}>
              <div tw="px-10">
                <ProductCardLandscape
                  img={
                    <StaticImage
                      alt=""
                      loading="eager"
                      placeholder="none"
                      src="../images/tv1.png"
                    />
                  }
                  title={
                    <WowSolar tw="text-px18 lg:text-px32" model={"TV24100"} />
                  }
                  caption={
                    <div tw="text-px16 lg:text-px18">
                      Amped's entry-level TV offering. It has industry leading
                      120 nits of brightness on a 24" LED screen
                    </div>
                  }
                  action={
                    <Button tw="text-px16" as="a" href="/product-wowsolartv24100">
                      VIEW PRODUCT
                    </Button>
                  }
                />
              </div>
              <div tw="px-10">
                <ProductCardLandscape
                  css={[reverse && tw`bg-white rounded-none`]}
                  img={
                    <StaticImage
                      alt=""
                      loading="eager"
                      placeholder="none"
                      src="../images/tv2.png"
                    />
                  }
                  title={
                    <WowSolar tw="text-px18 lg:text-px32" model={"TV32120"} />
                  }
                  caption={
                    <div tw="text-px16 lg:text-px18">
                      Amped's premium TV offering - perfect for home or
                      business. It has an industry leading 120 nits of
                      brightness on 32" LED screen
                    </div>
                  }
                  action={
                    <Button tw="text-px16" as="a" href="/product-wowsolartv32120">
                      VIEW PRODUCT
                    </Button>
                  }
                />
              </div>
              <div tw="px-10">
                <ProductCardLandscape
                  css={[reverse && tw`bg-white`]}
                  img={
                    <StaticImage
                      alt=""
                      loading="eager"
                      placeholder="none"
                      src="../images/tv1.png"
                    />
                  }
                  title={
                    <WowSolar tw="text-px16 lg:text-px32" model={"TV24100"} />
                  }
                  caption={
                    <div tw="text-px16 lg:text-px18">
                      Amped's entry-level TV offering. It has industry leading
                      120 nits of brightness on a 24" LED screen
                    </div>
                  }
                  action={
                    <Button tw="text-px16" as="a" href="/product-wowsolartv24100">
                      VIEW PRODUCT
                    </Button>
                  }
                />
              </div>
              <div tw="px-10">
                <ProductCardLandscape
                  css={[reverse && tw`bg-white rounded-none`]}
                  img={
                    <StaticImage
                      alt=""
                      loading="eager"
                      placeholder="none"
                      src="../images/tv2.png"
                    />
                  }
                  title={
                    <WowSolar tw="text-px18 lg:text-px32" model={"TV32120"} />
                  }
                  caption={
                    <div tw="text-px16 lg:text-px18">
                      Amped's premium TV offering - perfect for home or
                      business. It has an industry leading 120 nits of
                      brightness on 32" LED screen
                    </div>
                  }
                  action={
                    <Button tw="text-px16" as="a" href="/product-wowsolartv32120">
                      VIEW PRODUCT
                    </Button>
                  }
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSlider2;
