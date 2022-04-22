import * as React from 'react';
import { css } from 'twin.macro';
import Slider from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Banner from '../components/heroes/customer-experience';
import { SubHeader } from '../components/_/header';
import SliderButton from '../components/btn-slider-arrow';
import PlayIcon from '../assets/ico-play_video.svg';

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
      <div tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="lg:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-5">
          <SubHeader tw="col-span-2 mb-8 lg:mb-0">Overview</SubHeader>
          <div tw="col-span-3 text-px21">
            Our world is defined by our compassion to deliver a reliable solar
            experience with no compromise. While there are many choices when it
            comes to solar manufacturers and products, few are as committed as
            we are to delivering a solar experience with no compromise. We
            partner with our distributors fueled by a spirit of discovery, a
            desire to understand all there is about the customer experience. Our
            job is about being observant and testing the waters. So, we’ll stop
            evolving when the customer’s needs do.
          </div>
        </div>
      </div>
      <div tw="overflow-x-hidden">
        <div tw="px-4 lg:px-0 lg:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-5">
          <div tw="text-px32 col-span-2 mb-8 lg:mb-0">Customer Experience</div>
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
                  slider1Ref.current.slickNext();
                }}
              />
            </div>
            <ContentSlider
              sliderRef={slider1Ref}
              contents={[
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      {customerExperiencePlayed.v1 && (
                        <iframe
                          tw="w-full h-full rounded-md"
                          src="https://www.youtube.com/embed/LpWhaBVIrZw?autoplay=1"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      )}
                      {!customerExperiencePlayed.v1 && (
                        <div tw="relative">
                          <PlayButton
                            onClick={() =>
                              setCustomerExperiencePlayed({
                                ...customerExperiencePlayed,
                                v1: true,
                              })
                            }
                            tw="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                          <StaticImage
                            alt=""
                            src="../images/customer-hadijjah-banner.jpg"
                          />
                        </div>
                      )}
                    </div>
                  }
                  caption={
                    'It saves you a lot from electricity costs, comes with a radio, and is affordable. he radio can be used everywhere so it is portable so you don’t have to miss out on news and entertainment.'
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            loading="eager"
                            placeholder="none"
                            src="../images/customer-hadijjah-profile.png"
                          />
                        </div>
                      }
                      name={'Hadijjah Nakonde'}
                      address={'Kayunga, Kenya'}
                    />
                  }
                />,
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      {customerExperiencePlayed.v2 && (
                        <iframe
                          tw="w-full h-full rounded-md"
                          src="https://www.youtube.com/embed/LpWhaBVIrZw?autoplay=true"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      )}
                      {!customerExperiencePlayed.v2 && (
                        <div tw="relative">
                          <PlayButton
                            onClick={() =>
                              setCustomerExperiencePlayed({
                                ...customerExperiencePlayed,
                                v2: true,
                              })
                            }
                            tw="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                          <StaticImage
                            alt=""
                            src="../images/customer-kukunda-banner.jpg"
                          />
                        </div>
                      )}
                    </div>
                  }
                  caption={
                    'It saves you a lot from electricity costs, comes with a radio, and is affordable. he radio can be used everywhere so it is portable so you don’t have to miss out on news and entertainment.'
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            loading="eager"
                            placeholder="none"
                            src="../images/customer-kukunda-profile.png"
                          />
                        </div>
                      }
                      name={'Kukunda Evelyne'}
                      address={'Mityana, Kenya'}
                    />
                  }
                />,
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      {customerExperiencePlayed.v3 && (
                        <iframe
                          tw="w-full h-full rounded-md"
                          src="https://www.youtube.com/embed/LpWhaBVIrZw?autoplay=1"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      )}
                      {!customerExperiencePlayed.v3 && (
                        <div tw="relative">
                          <PlayButton
                            onClick={() =>
                              setCustomerExperiencePlayed({
                                ...customerExperiencePlayed,
                                v1: true,
                              })
                            }
                            tw="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                          <StaticImage
                            alt=""
                            src="../images/customer-hadijjah-banner.jpg"
                          />
                        </div>
                      )}
                    </div>
                  }
                  caption={
                    'It saves you a lot from electricity costs, comes with a radio, and is affordable. he radio can be used everywhere so it is portable so you don’t have to miss out on news and entertainment.'
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            loading="eager"
                            placeholder="none"
                            src="../images/customer-hadijjah-profile.png"
                          />
                        </div>
                      }
                      name={'Hadijjah Nakonde'}
                      address={'Kayunga, Kenya'}
                    />
                  }
                />,
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      {customerExperiencePlayed.v4 && (
                        <iframe
                          tw="w-full h-full rounded-md"
                          src="https://www.youtube.com/embed/LpWhaBVIrZw?autoplay=true"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      )}
                      {!customerExperiencePlayed.v4 && (
                        <div tw="relative">
                          <PlayButton
                            onClick={() =>
                              setCustomerExperiencePlayed({
                                ...customerExperiencePlayed,
                                v2: true,
                              })
                            }
                            tw="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                          <StaticImage
                            alt=""
                            src="../images/customer-kukunda-banner.jpg"
                          />
                        </div>
                      )}
                    </div>
                  }
                  caption={
                    'It saves you a lot from electricity costs, comes with a radio, and is affordable. he radio can be used everywhere so it is portable so you don’t have to miss out on news and entertainment.'
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            loading="eager"
                            placeholder="none"
                            src="../images/customer-kukunda-profile.png"
                          />
                        </div>
                      }
                      name={'Kukunda Evelyne'}
                      address={'Mityana, Kenya'}
                    />
                  }
                />,
              ]}
            />
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 py-16 lg:py-48 overflow-x-hidden">
        <div tw="lg:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-5">
          <div tw="text-px32 col-span-2 mb-8 lg:mb-0">
            Distributor Experience
          </div>
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
                  slider2Ref.current.slickNext();
                }}
              />
            </div>
            <ContentSlider
              sliderRef={slider2Ref}
              contents={[
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      {distributorExperiencePlayed.v1 && (
                        <iframe
                          tw="w-full h-full rounded-md"
                          src="https://www.youtube.com/embed/LpWhaBVIrZw?autoplay=true"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      )}
                      {!distributorExperiencePlayed.v1 && (
                        <div tw="relative">
                          <PlayButton
                            onClick={() =>
                              setDistributorExperiencePlayed({
                                ...distributorExperiencePlayed,
                                v1: true,
                              })
                            }
                            tw="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                          <StaticImage
                            alt=""
                            placeholder="none"
                            loading="eager"
                            src="../images/distributor-apollo-banner.jpg"
                          />
                        </div>
                      )}
                    </div>
                  }
                  caption={
                    'There is a huge difference using the kerosene lantern and the Amped Wowosloar. There is no pollution… I have thrown away my kerosene lanterns.'
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            placeholder="none"
                            loading="eager"
                            src="../images/distributor-apollo-profile.png"
                          />
                        </div>
                      }
                      name={'Apollo Kagwa'}
                      address={'Maasai Homeland, Kenya'}
                    />
                  }
                />,
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      {distributorExperiencePlayed.v2 && (
                        <iframe
                          tw="w-full h-full rounded-md"
                          src="https://www.youtube.com/embed/LpWhaBVIrZw?autoplay=true"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      )}

                      {!distributorExperiencePlayed.v2 && (
                        <div tw="relative">
                          <PlayButton
                            onClick={() =>
                              setDistributorExperiencePlayed({
                                ...distributorExperiencePlayed,
                                v2: true,
                              })
                            }
                            tw="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                          <StaticImage
                            alt=""
                            placeholder="none"
                            loading="eager"
                            src="../images/distributor-naisiga-banner.jpg"
                          />
                        </div>
                      )}
                    </div>
                  }
                  caption={
                    "One of the best in the market if you asked me and my neighbor's"
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            placeholder="none"
                            loading="eager"
                            src="../images/distributor-naisiga-profile.png"
                          />
                        </div>
                      }
                      name={'Naisiga Fatumah'}
                      address={'Kayunga, Kenya'}
                    />
                  }
                />,
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      {distributorExperiencePlayed.v3 && (
                        <iframe
                          tw="w-full h-full rounded-md"
                          src="https://www.youtube.com/embed/LpWhaBVIrZw?autoplay=true"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      )}
                      {!distributorExperiencePlayed.v3 && (
                        <div tw="relative">
                          <PlayButton
                            onClick={() =>
                              setDistributorExperiencePlayed({
                                ...distributorExperiencePlayed,
                                v1: true,
                              })
                            }
                            tw="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                          <StaticImage
                            alt=""
                            placeholder="none"
                            loading="eager"
                            src="../images/distributor-apollo-banner.jpg"
                          />
                        </div>
                      )}
                    </div>
                  }
                  caption={
                    'There is a huge difference using the kerosene lantern and the Amped Wowosloar. There is no pollution… I have thrown away my kerosene lanterns.'
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            placeholder="none"
                            loading="eager"
                            src="../images/distributor-apollo-profile.png"
                          />
                        </div>
                      }
                      name={'Apollo Kagwa'}
                      address={'Maasai Homeland, Kenya'}
                    />
                  }
                />,
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      {distributorExperiencePlayed.v4 && (
                        <iframe
                          tw="w-full h-full rounded-md"
                          src="https://www.youtube.com/embed/LpWhaBVIrZw?autoplay=true"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      )}

                      {!distributorExperiencePlayed.v4 && (
                        <div tw="relative">
                          <PlayButton
                            onClick={() =>
                              setDistributorExperiencePlayed({
                                ...distributorExperiencePlayed,
                                v2: true,
                              })
                            }
                            tw="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                          <StaticImage
                            alt=""
                            placeholder="none"
                            loading="eager"
                            src="../images/distributor-naisiga-banner.jpg"
                          />
                        </div>
                      )}
                    </div>
                  }
                  caption={
                    "One of the best in the market if you asked me and my neighbor's"
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            placeholder="none"
                            loading="eager"
                            src="../images/distributor-naisiga-profile.png"
                          />
                        </div>
                      }
                      name={'Naisiga Fatumah'}
                      address={'Kayunga, Kenya'}
                    />
                  }
                />,
              ]}
            />
          </div>
        </div>
      </div>
      <div tw="px-8 lg:px-4 py-16 lg:py-48 overflow-x-hidden bg-sitegray">
        <div tw="grid grid-cols-1 lg:grid-cols-5 lg:w-9/12 mx-auto pb-16 lg:pb-32">
          <div tw="text-px54 col-span-2 mb-8 lg:mb-0">
            Distributor resources
          </div>
          <div tw="text-px21 col-span-3">
            Looking to learn more about our product or the ways in which Amped
            has been leading the industry? Always wondered what makes Amped
            Innovation’s WOWsolar solutions unique? Curious about how we create
            products perfectly for your needs? Feel free to download one our
            free resources below.
          </div>
        </div>
        <div tw="grid grid-cols-1 lg:grid-cols-5 lg:w-9/12 mx-auto">
          <div tw="text-2xl lg:text-px32 col-span-2 mb-8 lg:mb-0">
            <span tw="leading-tight">Download our Report</span>
          </div>
          <div tw="col-span-3 relative">
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
                        src="../images/report-img-01.jpg"
                      />
                    </div>
                  }
                  title={'FAQ Sheet'}
                  actions={<a href="#/">Download Now</a>}
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/report-img-02.jpg"
                      />
                    </div>
                  }
                  title={'Energy Budget Explained'}
                  actions={<a href="#/">Download Now</a>}
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/report-img-03.jpg"
                      />
                    </div>
                  }
                  title={'The Advantage of the Orange'}
                  actions={<a href="#/">Download Now</a>}
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/report-img-02.jpg"
                      />
                    </div>
                  }
                  title={'FAQ Sheet'}
                  actions={<a href="#/">Download Now</a>}
                />,
              ]}
            />
          </div>
        </div>
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
