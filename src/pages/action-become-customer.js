import * as React from 'react';
import { css } from 'twin.macro';
import Slider from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Banner from '../components/heroes/become-customer';
import { SubHeader } from '../components/_/header';
import SliderButton from '../components/btn-slider-arrow';
import PlayIcon from '../assets/ico-play_video.svg';
import Button from '../components/button';
import WowSolar from '../components/wowsolar';
import BuyWowSolar2 from '../components/sections/buy-wowsolar2';

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
          <SubHeader tw="col-span-2 mb-8 lg:mb-0">
            Stories from Africa
          </SubHeader>
          <div tw="col-span-3 text-px21">
            While there are many choices when it comes to solar manufacturers
            and products, few are as committed as we are to delivering a solar
            experience with no compromise. We partner with our distributors
            fueled by a spirit of discovery, a desire to understand all there is
            about the customer experience. Our job is about being observant and
            testing the waters. So, we'll stop evolving only when the customer’s
            needs do.
          </div>
        </div>
      </div>

      <div tw="px-4 lg:px-0 lg:w-9/12 mx-auto py-16 lg:py-48">
        <div tw="grid grid-cols-1 lg:grid-cols-5">
          <div tw="text-px32 font-circular-bold col-span-2 mb-8 lg:mb-0 pr-16">
            So, why are customers loving Amped?
          </div>
          <div tw="col-span-3">
            <div tw="mb-8">
              <StaticImage
                alt=""
                loading="eager"
                placeholder="none"
                src="../images/so-why-loving.jpg"
                layout="fullWidth"
              />
            </div>
            <div tw="text-px21">
              <p tw="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
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
                <Button tw="col-span-2 lg:rounded-tl-none rounded-bl-none w-full lg:w-auto text-center" text="SUBSCRIBE NOW" path="mailto:andi@ampedinnovation.com"></Button>
              </div>
            </div>
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
                      <div tw="relative">
                        <StaticImage
                          alt=""
                          src="../images/customer-kukunda-banner.jpg"
                        />
                      </div>
                    </div>
                  }
                  caption={
                    '“My WOWsolar is just wonderful! The small radio keeps me entertained the whole day as I serve my customers. One of the best in the market if you asked me and my neighbors around who bought it. It’s a very affordable product with good customer care, has a radio, and brighter, not forgetting that bit of phone charging! It’s so helpful.”'
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
                      <div tw="relative">
                        <StaticImage
                          alt=""
                          src="../images/customer-hadijjah-banner.jpg"
                        />
                      </div>
                    </div>
                  }
                  caption={
                    '"Being someone who lives in the village, this product has helped me save on the cost of kerosene that we regularly uses for lighting, chidlren reading at night, and changing our phones. WOWsolar is brighter than other solar products we have in the market here and it\'s affordable."'
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
                      name={'Francis Olagai'}
                      address={'Serere, Uganda'}
                    />
                  }
                />,
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      <div tw="relative">
                        <StaticImage
                          alt=""
                          src="../images/customer-kukunda-banner.jpg"
                        />
                      </div>
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
                      <div tw="relative">
                        <StaticImage
                          alt=""
                          src="../images/customer-hadijjah-banner.jpg"
                        />
                      </div>
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
                      <div tw="relative">
                        <StaticImage
                          alt=""
                          src="../images/customer-kukunda-banner.jpg"
                        />
                      </div>
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

      <div tw="px-8 lg:px-4 py-16 lg:py-48 overflow-x-hidden ">
        <div tw="grid grid-cols-1 lg:grid-cols-5 lg:w-9/12 mx-auto pb-16 lg:pb-32">
          <div tw="text-px32 col-span-2 mb-8 lg:mb-0">Download Resources</div>
          <div tw="text-px21 col-span-3">
            Looking to learn more about our product or the ways in which Amped
            has been leading the industry? Always wondered what makes Amped
            Innovation’s WOWsolar solutions unique? Curious about how we create
            products perfectly for your needs? Feel free to download one our
            free resources below.
          </div>
        </div>
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
                        src="../images/report-img-01.png"
                      />
                    </div>
                  }
                  title={
                    <div>
                      <WowSolar tw="text-px28" model={'60/100'} /> - Product
                      Manual
                    </div>
                  }
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
                        src="../images/report-img-02.png"
                      />
                    </div>
                  }
                  title={
                    <div>
                      <WowSolar tw="text-px28" model={'400'} /> - Product Manual
                    </div>
                  }
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
                        src="../images/report-img-03.png"
                      />
                    </div>
                  }
                  title={
                    <div>
                      <WowSolar tw="text-px28" model={'TV'} /> - Product Manual
                    </div>
                  }
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
                        src="../images/report-img-04.png"
                      />
                    </div>
                  }
                  title={
                    <div>
                      <WowSolar tw="text-px28" model={'FAN'} /> - Product Manual
                    </div>
                  }
                  actions={<a href="#/">Download Now</a>}
                />,
              ]}
            />
          </div>
        </div>
      </div>
      <div tw="bg-sitegray">
        <BuyWowSolar2 />
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
