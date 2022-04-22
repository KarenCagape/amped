import * as React from "react";
import tw from "twin.macro";
import Slider from "react-slick";
import ProductCardLandscape from "./product-card-landscape";
import { StaticImage } from "gatsby-plugin-image";
import WowSolar from "./wowsolar";
import GlobalStyles from './global-styles';
import Button from "./_/button";
import SliderButton from "./btn-slider-arrow";

export function LightingSlider({ heading, reverse = false, ...rest }) {
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
          tw="absolute"
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
              <div tw="px-4">
                <ProductCardLandscape
                  css={[reverse && tw`bg-white`]}
                  img={
                    <StaticImage
                      alt=""
                      loading="eager"
                      placeholder="none"
                      src="../images/slider-wowsolar-60-new.png"
                      width={440}
                      height={440}
                    />
                  }
                  title={<WowSolar tw="text-px18 lg:text-px32" model={60} />}
                  caption={
                    <div>
                      Amped’s most affordable solution, with 20Whr of LiFe
                      battery, 3 pendant lamps and built-in phone charging.
                    </div>
                  }
                  action={
                    <Button tw="text-px16" as="a" href="/product-wowsolar60">
                      VIEW PRODUCT
                    </Button>
                  }
                />
              </div>
              <div tw="px-4">
                <ProductCardLandscape
                  css={[reverse && tw`bg-white rounded-none`]}
                  img={
                    <StaticImage
                      alt=""
                      loading="eager"
                      placeholder="none"
                      src="../images/slider-wowsolar100-new.png"
                      width={440}
                      height={440}
                    />
                  }
                  title={<WowSolar tw="text-px18 lg:text-px32" model={100} />}
                  caption={
                    <div>
                      Amped's premium lighting and phone charging kit, with
                      20Whr of LiFe battery, a larger solar panel, 4 pendant
                      lamps and radio!
                    </div>
                  }
                  action={
                    <Button as="a" href="/product-wowsolar100">
                      VIEW PRODUCT
                    </Button>
                  }
                />
              </div>
              <div tw="px-4">
                <ProductCardLandscape
                  css={[reverse && tw`bg-white`]}
                  img={
                    <StaticImage
                      alt=""
                      loading="eager"
                      placeholder="none"
                      src="../images/slider-wowsolar-400-new.png"
                      width={440}
                      height={440}
                    />
                  }
                  title={<WowSolar tw="text-px18 lg:text-px32" model={400} />}
                  caption={
                    <div>
                      Amped highest-performance lighting kit with 40Whr of LiFe,
                      a larger solar panel, 4-5 pendant lamps, radio and torch!
                    </div>
                  }
                  action={
                    <Button as="a" href="/product-wowsolar400">
                      VIEW PRODUCT
                    </Button>
                  }
                />
              </div>
              <div tw="px-4">
                <ProductCardLandscape
                  css={[reverse && tw`bg-white`]}
                  img={
                    <StaticImage
                      alt=""
                      loading="eager"
                      placeholder="none"
                      src="../images/slider-wowsolar-60-new.png"
                      width={440}
                      height={440}
                    />
                  }
                  title={<WowSolar tw="text-px18 lg:text-px32" model={60} />}
                  caption={
                    <div>
                      Amped’s most affordable solution, with 20Whr of LiFe
                      battery, 3 pendant lamps and built-in phone charging.
                    </div>
                  }
                  action={
                    <Button as="a" href="/product-wowsolar60">
                      VIEW PRODUCT
                    </Button>
                  }
                />
              </div>
              <div tw="px-4">
                <ProductCardLandscape
                  css={[reverse && tw`bg-white rounded-none`]}
                  img={
                    <StaticImage
                      alt=""
                      loading="eager"
                      placeholder="none"
                      src="../images/slider-wowsolar100-new.png"
                      width={440}
                      height={440}
                    />
                  }
                  title={<WowSolar tw="text-px18 lg:text-px32" model={100} />}
                  caption={
                    <div>
                      Amped's premium lighting and phone charging kit, with
                      20Whr of LiFe battery, a larger solar panel, 4 pendant
                      lamps and radio!
                    </div>
                  }
                  action={
                    <Button as="a" href="/product-wowsolar100">
                      VIEW PRODUCT
                    </Button>
                  }
                />
              </div>
              <div tw="px-4">
                <ProductCardLandscape
                  css={[reverse && tw`bg-white`]}
                  img={
                    <StaticImage
                      alt=""
                      loading="eager"
                      placeholder="none"
                      src="../images/slider-wowsolar-400-new.png"
                      width={440}
                      height={440}
                    />
                  }
                  title={<WowSolar tw="text-px18 lg:text-px32" model={400} />}
                  caption={
                    <div>
                      Amped highest-performance lighting kit with 40Whr of LiFe,
                      a larger solar panel, 4-5 pendant lamps, radio and torch!
                    </div>
                  }
                  action={
                    <Button as="a" href="/product-wowsolar400">
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

export default LightingSlider;
