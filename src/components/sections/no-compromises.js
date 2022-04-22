import * as React from 'react';
import 'twin.macro';
import _ from 'lodash';
import Slick from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import BtnSliderArrow from '../btn-slider-arrow';
import WowSolar from '../wowsolar';

function Slider({ slickRef, contents = [] }) {
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
      {contents.map((content, idx) => (
        <div tw="p-4" key={idx}>
          {content}
        </div>
      ))}
    </Slick>
  );
}

export function NoCompromises(props) {
  const slider1Ref = React.useRef();
  const slider2Ref = React.useRef();
  const heading1 = _.get(props, 'data.headings[0].text.text');
  const heading2 = _.get(props, 'data.headings[1].text.text');

  function handleSliderClick(ref) {
    ref.current.slickNext();
  }

  return (
    <div tw="px-4 lg:px-0 rounded py-12 lg:py-48 bg-sitegray">
      <div tw="lg:w-9/12 mx-auto">
        <div tw="mb-12 lg:mb-32">
          <div tw="text-px36 lg:text-px72 leading-normal font-sf-light">
            Wherever you are,{' '}
            <span tw="text-primary font-sf-bold leading-tight">no</span>
            <div tw="font-sf-bold text-primary leading-tight">compromises.</div>
          </div>
        </div>
      </div>
      <div tw="overflow-x-hidden">
        <div tw="mb-12 lg:mb-32 grid grid-cols-1 lg:grid-cols-3 items-center gap-16 lg:-ml-80">
          <div tw="lg:col-span-2 lg:pr-16">
            <div tw="relative">
              <BtnSliderArrow
                onClick={() => {
                  slider1Ref.current.slickPrev();
                }}
                tw="bg-white absolute bottom-4 right-4 z-10 rounded-br pt-3 pb-2 px-3"
              />
              <Slider
                slickRef={slider1Ref}
                contents={[
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/slider-no-compromises-11.png"
                    layout="fullWidth"
                  />,
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/slider-no-compromises-22.png"
                    layout="fullWidth"
                  />,
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/slider-no-compromises-33.png"
                    layout="fullWidth"
                  />,
                ]}
              />
            </div>
          </div>
          <div>
            <div tw="text-px24 lg:text-px54 mb-12 font-circular-bold">
              <div tw="my-4">Home</div>
            </div>
            <div tw="text-px16 lg:text-px21 lg:pr-32 font-circular-regular leading-normal">
              <WowSolar tw="text-px16 lg:text-px21" /> is Amped’s premium
              lighting kit. From affordable to a high-performance home setup,
              our lighting and phone charging kits do it all. Our lighting
              systems are designed to provide more light points (up to ten),
              brighter lamps (up to 400 Lumens), bigger solar panels for more
              phone charging, and portable accessories like a torch or radio
              with an extra-large battery for long runtimes between charges.
              Moreover, every <WowSolar tw="text-px16 lg:text-px21" /> lighting
              kit allows a customer to upgrade to an Amped solar television in
              their home without having to replace their initial purchase
              investment.
            </div>
          </div>
        </div>
      </div>
      <div tw="overflow-x-hidden">
        <div tw="grid grid-cols-1 lg:grid-cols-3 items-center gap-16 lg:-mr-80">
          <div tw="lg:pl-32">
            <div tw="text-px24 lg:text-px54 mb-12 font-circular-bold">
              <div tw="my-4">Business</div>
            </div>
            <div tw="text-lg lg:text-px21 font-circular-regular leading-normal">
              Amped’s <WowSolar tw="text-px16 lg:text-px21" /> is specifically
              designed for use with appliances. The <WowSolar tw="text-px21" />{' '}
              is perfect for your business powering a television, fan or a large
              number of bright lights up to 400 Lumens. The{' '}
              <WowSolar tw="text-px21" /> Smart Performance technology includes
              appliance security to protect your investment, and controller
              health reporting to ensure your system is always available when
              you need it. The <WowSolar tw="text-px16 lg:text-px21" />{' '}
              appliance solutions allows you to start with a fan and lights and
              upgrade to a television at a future date.
            </div>
          </div>
          <div tw="col-span-2 lg:pl-16">
            <div tw="relative">
              <div>
                <BtnSliderArrow
                  flipX={true}
                  onClick={() => {
                    handleSliderClick(slider2Ref);
                  }}
                  tw="bg-white pt-3 pb-2 px-3 absolute bottom-4 left-4 z-10 rounded-bl"
                />
              </div>
              <Slider
                slickRef={slider2Ref}
                contents={[
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/slider-no-compromises-1.png"
                    layout="fullWidth"
                  />,
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/slider-no-compromises-2.png"
                    layout="fullWidth"
                  />,
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/slider-no-compromises-3.png"
                    layout="fullWidth"
                  />,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoCompromises;
