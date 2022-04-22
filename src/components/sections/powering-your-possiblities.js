import * as React from 'react';
import Slick from 'react-slick';
import { css } from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import _ from 'lodash';
import Button from '../button';
import WowSolar from '../wowsolar';

import BtnSliderArrow from '../btn-slider-arrow';

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

function Slider({ contents = [], slickRef }) {
  const productSliderSettings = {
    speed: 500,
    slidesToShow: 4,
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
    <div tw="w-full" css={sliderOverride}>
      <Slick {...productSliderSettings} ref={slickRef}>
        {contents.map((content, idx) => (
          <div tw="px-8 h-full" key={idx}>
            {content}
          </div>
        ))}
      </Slick>
    </div>
  );
}

function Card({ img, heading, text, button, ...rest }) {
  return (
    <div
      tw="p-12 h-full flex flex-col justify-between bg-sitegray rounded-md"
      {...rest}
    >
      <div>
        <div tw="flex justify-center items-center h-64">
          <div tw="w-10/12">{img}</div>
        </div>
        <div
          tw="text-px18 lg:text-px28 font-circular-bold mt-12 mb-8"
          css={[{ color: '#1C212B' }]}
        >
          {heading}
        </div>
        <div tw="text-px16 lg:text-px21 mb-28 font-circular-regular">
          {text}
        </div>
      </div>
      <div tw="flex justify-center">{button}</div>
    </div>
  );
}

export function PoweringYourPossibilities(props) {
  const slickRef = React.useRef();
  const heading1 = _.get(props, 'data.headings[0].text.text');
  const heading2 = _.get(props, 'data.headings[1].text.text');

  function handleArrowClick() {
    slickRef.current.slickNext();
  }

  return (
    <div tw="pb-0 mb-8 lg:pb-48">
      <div>
        <div tw="text-px36 lg:text-px72 px-4 w-9/12 mx-auto font-sf-light">
          <div tw="leading-tight">Powering your </div>
          <div tw="font-sf-bold mb-32 text-primary leading-tight">
            possibilities
          </div>
        </div>
        <div tw="overflow-x-hidden">
          <div tw="w-screen relative">
            <div>
              <div
                tw="relative flex justify-end lg:right-nvw20"
                style={
                  {
                    // right: '-20vw',
                  }
                }
              >
                <BtnSliderArrow
                  tw="absolute hidden lg:block"
                  css={[{ left: '-6%', bottom: '4%' }]}
                  onClick={handleArrowClick}
                />
                <Slider
                  slickRef={slickRef}
                  contents={[
                    <Card
                      img={
                        <StaticImage
                          alt=""
                          loading="eager"
                          placeholder="none"
                          src="../../images/slider-lights-and-charging-new.png"
                        />
                      }
                      heading={<div tw="text-center">Lights and Charging</div>}
                      text={
                        <div tw="text-center">
                          <WowSolar tw="inline-block text-px21" />{' '}
                          <span>is Amped’s premium lighting kit.</span>
                        </div>
                      }
                      button={
                        <Button
                          text="VIEW PRODUCT"
                          tw="px-4 py-2"
                          path="/product-lighting-and-phone-charging"
                        />
                      }
                    />,

                    <Card
                      img={
                        <StaticImage
                          alt=""
                          loading="eager"
                          placeholder="none"
                          src="../../images/slider-tv-new.png"
                        />
                      }
                      heading={<div tw="text-center">Television</div>}
                      text={
                        <div tw="text-center">
                          <WowSolar model={'TV'} tw="inline-block text-px21" />{' '}
                          <span>
                            is Amped’s complete solar television solution based
                            on SmartPerformance technology.
                          </span>
                        </div>
                      }
                      button={
                        <Button
                          text="VIEW PRODUCT"
                          tw="px-4 py-2"
                          path="/product-television"
                        />
                      }
                    />,

                    <Card
                      img={
                        <StaticImage
                          alt=""
                          loading="eager"
                          placeholder="none"
                          src="../../images/slider-fan.png"
                        />
                      }
                      heading={<div tw="text-center">Fan</div>}
                      text={
                        <div tw="text-center">
                          <WowSolar model={'FAN'} tw="inline-block" />{' '}
                          <span>
                            is Amped’s dynamic fan solution designed provide
                            plenty of extra power.
                          </span>
                        </div>
                      }
                      button={
                        <Button
                          text="VIEW PRODUCT"
                          tw="px-4 py-2"
                          path="/product-fan"
                        />
                      }
                    />,

                    <Card
                      img={
                        <StaticImage
                          alt=""
                          loading="eager"
                          placeholder="none"
                          src="../../images/img-solar-generator-new.png"
                        />
                      }
                      heading={<div tw="text-center">Grid Backup</div>}
                      text={
                        <div tw="text-center">
                          <span>
                            Amped's ground-breaking solar generator delivers
                            uninterupted power for a price that pays back in a
                            year
                          </span>
                        </div>
                      }
                      button={
                        <Button
                          text="VIEW PRODUCT"
                          tw="px-4 py-2"
                          path="/product-grid-backup"
                        />
                      }
                    />,

                    <Card
                      img={
                        <StaticImage
                          alt=""
                          loading="eager"
                          placeholder="none"
                          src="../../images/slider-lights-and-charging-new.png"
                        />
                      }
                      heading={<div tw="text-center">Lights and Charging</div>}
                      text={
                        <div tw="text-center">
                          <WowSolar tw="inline-block text-px21" />{' '}
                          <span>is Amped’s premium lighting kit.</span>
                        </div>
                      }
                      button={
                        <Button
                          text="VIEW PRODUCT"
                          tw="px-4 py-2"
                          path="/product-lighting-and-phone-charging"
                        />
                      }
                    />,

                    <Card
                      img={
                        <StaticImage
                          alt=""
                          loading="eager"
                          placeholder="none"
                          src="../../images/slider-tv-new.png"
                        />
                      }
                      heading={<div tw="text-center">Television</div>}
                      text={
                        <div tw="text-center">
                          <WowSolar model={'TV'} tw="inline-block text-px21" />{' '}
                          <span>
                            is Amped’s complete solar television solution based
                            on SmartPerformance technology.
                          </span>
                        </div>
                      }
                      button={
                        <Button
                          text="VIEW PRODUCT"
                          tw="px-4 py-2"
                          path="/product-television"
                        />
                      }
                    />,

                    <Card
                      img={
                        <StaticImage
                          alt=""
                          loading="eager"
                          placeholder="none"
                          src="../../images/slider-fan.png"
                        />
                      }
                      heading={<div tw="text-center">Fan</div>}
                      text={
                        <div tw="text-center">
                          <WowSolar model={'FAN'} tw="inline-block" />{' '}
                          <span>
                            is Amped’s dynamic fan solution designed provide
                            plenty of extra power.
                          </span>
                        </div>
                      }
                      button={
                        <Button
                          text="VIEW PRODUCT"
                          tw="px-4 py-2"
                          path="/product-fan"
                        />
                      }
                    />,

                    <Card
                      img={
                        <StaticImage
                          alt=""
                          loading="eager"
                          placeholder="none"
                          src="../../images/img-solar-generator-new.png"
                        />
                      }
                      heading={<div tw="text-center">Grid Backup</div>}
                      text={
                        <div tw="text-center">
                          <span>
                            Amped's ground-breaking solar generator delivers
                            uninterupted power for a price that pays back in a
                            year
                          </span>
                        </div>
                      }
                      button={
                        <Button
                          text="VIEW PRODUCT"
                          tw="px-4 py-2"
                          path="/product-grid-backup"
                        />
                      }
                    />,
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoweringYourPossibilities;
