import * as React from "react";
import { css } from "twin.macro";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Banner from "../components/heroes/news";
import { SubHeader } from "../components/_/header";
import SliderButton from "../components/btn-slider-arrow";
import PlayIcon from "../assets/ico-play_video.svg";
import Button from "../components/button";

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
    <Layout pageTitle="Customer Experience">
      <Banner />
      <div tw="px-8 lg:px-4 py-16 lg:py-48 overflow-x-hidden bg-sitegray">
        <div tw="grid grid-cols-1 lg:grid-cols-5 lg:w-9/12 mx-auto">
          <div tw="text-2xl lg:text-px32 col-span-2 mb-8 lg:mb-0">
            <span tw="leading-tight">Recent News</span>
          </div>
          <div tw="col-span-3 relative">
            <div
              tw="absolute"
              css={[
                {
                  bottom: "20%",
                  left: "-30%",
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
              // css={[{ width: "65vw !important" }]}
              tw="lg:w-screenx-65 w-full"
              contents={[
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/news/cover-3.png"
                      />
                    </div>
                  }
                  title="Amped Innovation Completes Series A to Catalyze Demand for Off-Grid Energy Appliances"
                  actions={
                    <a
                      href="https://fincaventures.com/why-we-invested-amped-innovation/"
                      target="_blank"
                    >
                      Read More
                    </a>
                  }
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/news/cover-2.png"
                      />
                    </div>
                  }
                  title="Introducing Our Newest Impact Investee: Amped Innovation"
                  actions={
                    <a
                      href="https://www.sv2.org/introducing-our-newest-impact-investee-amped-innovation/"
                      target="_blank"
                    >
                      Read More
                    </a>
                  }
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/news/cover-1.png"
                      />
                    </div>
                  }
                  title="EDFI ElectriFI $6 Million to Support Amped Innovation’s African Projects"
                  actions={
                    <a
                      href="https://energycapitalpower.com/edfi-electrifi-6-million-to-support-amped-innovations-african-projects/"
                      target="_blank"
                    >
                      Read More
                    </a>
                  }
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/news/cover-2.png"
                      />
                    </div>
                  }
                  title="Introducing Our Newest Impact Investee: Amped Innovation"
                  actions={
                    <a
                      href="https://www.sv2.org/introducing-our-newest-impact-investee-amped-innovation/"
                      target="_blank"
                    >
                      Read More
                    </a>
                  }
                />,
              ]}
            />
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 lg:w-9/12 mx-auto py-16 lg:py-48">
        <div tw="grid grid-cols-1 lg:grid-cols-5">
          <div tw="text-px32 font-circular-bold col-span-2 mb-8 lg:mb-0 pr-16">
            Recent News
          </div>
          <div tw="col-span-3">
            <div tw="mb-12">
              Keep up with our newsletters, announcements and publications,
              dating back to our inception in 2015.
            </div>
            <div tw="bg-sitegray p-12">
              <div tw="text-px21 mb-8">
                Be the first to get the latest news and product release
              </div>
              <div tw="lg:grid lg:grid-cols-5">
                <input
                  tw="text-px16 col-span-3 p-4 w-full lg:w-auto mb-8 lg:mb-0"
                  placeholder="Enter your email address"
                />
                <Button
                  tw="col-span-2 lg:rounded-tl-none rounded-bl-none w-full lg:w-auto text-center"
                  text="SUBSCRIBE NOW"
                  path="mailto:andi@ampedinnovation.com"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
