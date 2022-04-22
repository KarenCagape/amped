import * as React from 'react';
import tw from 'twin.macro';
import Slider from 'react-slick';
import ProductCardLandscape from './product-card-landscape';
import { StaticImage } from 'gatsby-plugin-image';
import WowSolar from './wowsolar';
import GlobalStyles from './global-styles';
import Button from './_/button';
import SliderButton from './btn-slider-arrow';

export function ProductSlider({ heading, reverse = false, ...rest }) {
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
              bottom: '5%',
              left: '10%',
            },
          ]}
        />
        <div tw="hidden lg:block"></div>
        <div tw="overflow-x-hidden lg:col-span-5">
          <div
            css={[
              {
                width: '110vw',
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
                      src="../images/fan1.png"
                      width={440}
                      height={440}
                    />
                  }
                  title={
                    <WowSolar tw="text-px18 lg:text-px32" model={'FAN 1600'} />
                  }
                  caption={
                    <div>
                      Amped's entry-level cooling system, perfect for all night
                      cooling.
                    </div>
                  }
                  action={
                    <Button as="a" href="/product-wowsolarfan16100">
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
                      src="../images/fan2.png"
                      width={440}
                      height={440}
                    />
                  }
                  title={
                    <WowSolar tw="text-px18 lg:text-px32" model={'FAN 16120'} />
                  }
                  caption={
                    <div>
                      Amped's premium cooling system, perfect for all night
                      cooling and lighting
                    </div>
                  }
                  action={
                    <Button as="a" href="/product-wowsolarfan16120">
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
                      src="../images/fan1.png"
                      width={440}
                      height={440}
                    />
                  }
                  title={
                    <WowSolar tw="text-px18 lg:text-px32" model={'FAN 1600'} />
                  }
                  caption={
                    <div>
                      Amped's entry-level cooling system, perfect for all night
                      cooling.
                    </div>
                  }
                  action={
                    <Button as="a" href="/product-wowsolarfan16100">
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
                      src="../images/fan2.png"
                      width={440}
                      height={440}
                    />
                  }
                  title={
                    <WowSolar tw="text-px18 lg:text-px32" model={'FAN 16120'} />
                  }
                  caption={
                    <div>
                      Amped's premium cooling system, perfect for all night
                      cooling and lighting
                    </div>
                  }
                  action={
                    <Button as="a" href="/product-wowsolarfan16120">
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

export default ProductSlider;
