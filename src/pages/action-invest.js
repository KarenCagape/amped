import * as React from 'react';
import { css } from 'twin.macro';
import Slider from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Banner from '../components/heroes/invest';
import { SubHeader } from '../components/_/header';
import SliderButton from '../components/btn-slider-arrow';
import PlayIcon from '../assets/ico-play_video.svg';
import Button from '../components/_/button';
import WowSolar from '../components/wowsolar';
import BuyWowSolar from '../components/sections/buy-wowsolar';
import ReachOut from '../components/sections/reach-out';

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

const galleryImages = [
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-1.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-2.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-3.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-4.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-5.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-6.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-7.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-8.jpg"
  />,
];

function ContentSlider({
  sliderRef,
  contents = [],
  slidesToShow = 3,
  ...rest
}) {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow,
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
    <Slider
      tw="lg:w-screen lg:-mx-8"
      {...sliderSettings}
      {...rest}
      ref={sliderRef}
    >
      {contents.map((content, idx) => (
        <div tw="min-h-full" key={idx}>
          {content}
        </div>
      ))}
    </Slider>
  );
}

function StorySliderContent({ media, caption, author }) {
  return (
    <div tw="mx-0 lg:mx-8 min-h-full flex flex-col justify-between">
      <div tw="w-full h-80 ">{media}</div>
      <div tw="text-px21 p-8 my-10 bg-sitegray rounded">{caption}</div>
      <div>{author}</div>
    </div>
  );
}

function StoryAuthor({ image, name, address }) {
  return (
    <div tw="flex items-center">
      <div tw="rounded-full w-24 h-24 bg-gray-200 mr-4">{image}</div>
      <div>
        <div tw="text-px28">{name}</div>
        <div tw="text-px16 text-secondary">{address}</div>
      </div>
    </div>
  );
}

function DownloadableContent({ media, title, actions }) {
  return (
    <div tw="mx-8">
      <div
        css={[
          {
            minHeight: 250,
          },
        ]}
      >
        {media}
      </div>
      <div>
        <div tw="text-px28 mt-8">{title}</div>
        <div tw="text-px18 text-secondary">{actions}</div>
      </div>
    </div>
  );
}

function PlayButton({ ...rest }) {
  return (
    <button {...rest}>
      <PlayIcon />
    </button>
  );
}

export default function AmpedStory() {
  const slider1Ref = React.useRef();
  const slider2Ref = React.useRef();
  const slider3Ref = React.useRef();
  const [customerExperiencePlayed, setCustomerExperiencePlayed] =
    React.useState({
      v1: false,
      v2: false,
      v3: false,
      v4: false,
    });
  const [distributorExperiencePlayed, setDistributorExperiencePlayed] =
    React.useState({
      v1: false,
      v2: false,
      v3: false,
      v4: false,
    });

  return (
    <Layout pageTitle="Invest">
      <Banner />
      <div tw="px-4 lg:px-0 py-16 lg:pt-48">
        <div tw="lg:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-5">
          <SubHeader tw="col-span-2 mb-8 lg:mb-0 leading-normal">
            Impact Report Summary
          </SubHeader>
          <div tw="col-span-3 text-px21">
            <div tw="mb-6">
              Amped’s clean power products have a huge range of positive
              impacts. We are providing energy access where there was none
              before…the first solar television in a village is a source of
              news, education, information, entertainment, and joy. Our products
              are a source of pride, uplifting a family’s stature and place in
              their community, providing a gathering place, and a place of
              safety. Our products are a source of savings as well as a source
              of income generation. They represent pride, joy, entertainment,
              and a pathway out of poverty.
            </div>
            <div>
              Download our summary report and experience the Amped Impact.
            </div>
          </div>
        </div>
      </div>

      <div tw="px-8 lg:px-4 overflow-x-hidden ">
        <div tw="grid grid-cols-1 lg:grid-cols-5 lg:w-9/12 mx-auto">
          <div tw="text-2xl lg:text-px32 col-span-2 mb-8 lg:mb-0"></div>
          <div tw="col-span-3 relative" css={sliderOverride}>
            <div
              tw="absolute"
              css={[
                {
                  bottom: '20%',
                  left: '-30%',
                },
              ]}
            >
              <SliderButton
                onClick={() => {
                  slider3Ref.current.slickNext();
                }}
              />
            </div>
            <ContentSlider
              sliderRef={slider3Ref}
              tw=""
              contents={[
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        layout="fullWidth"
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/download-placeholder.png"
                      />
                    </div>
                  }
                  title={<div>Lorem ipsum</div>}
                  actions={<a href="#/">Download Now</a>}
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        layout="fullWidth"
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/download-placeholder.png"
                      />
                    </div>
                  }
                  title={<div>Lorem ipsum</div>}
                  actions={<a href="#/">Download Now</a>}
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        layout="fullWidth"
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/download-placeholder.png"
                      />
                    </div>
                  }
                  title={<div>Lorem ipsum</div>}
                  actions={<a href="#/">Download Now</a>}
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        layout="fullWidth"
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/download-placeholder.png"
                      />
                    </div>
                  }
                  title={<div>Lorem ipsum</div>}
                  actions={<a href="#/">Download Now</a>}
                />,
              ]}
            />
          </div>
        </div>
      </div>

      <div tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="lg:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-5">
          <SubHeader tw="col-span-2 mb-8 lg:mb-0 leading-normal">
            Investment Partners
          </SubHeader>
          <div tw="col-span-3 text-px21">
            <div>
              No social mission is possible without support from partners and
              investors that believe in what we are doing. Amped has been able
              to research, develop and grow our vision due to these partners
            </div>
            <div tw="grid grid-cols-3 justify-between items-center">
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
        </div>
      </div>

      <div tw="bg-sitegray">
        <ReachOut />
      </div>

      <div tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="text-px54 text-center mb-16 lg:mb-32">
          <div>
            <a href="#/" tw="break-all">
              #AmpedInnovationRedefiningSolar
            </a>
          </div>
        </div>
        <div tw="gap-2 lg:gap-8 grid grid-cols-1 lg:grid-cols-4 lg:w-9/12 mx-auto">
          {galleryImages.map((image, idx) => (
            <div key={idx}>{image}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
