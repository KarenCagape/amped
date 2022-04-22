import * as React from "react";
import "twin.macro";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Banner from "../components/heroes/news";
import SliderButton from "../components/btn-slider-arrow";
import Button from "../components/button";

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

export default function AmpedStory() {
  const slider3Ref = React.useRef();

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
                      rel="noreferrer"
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
                      rel="noreferrer"
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
                      rel="noreferrer"
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
                      rel="noreferrer"
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
