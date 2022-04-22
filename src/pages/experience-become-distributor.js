import * as React from "react";

import Layout from "../components/layout";
import Banner from "../components/heroes/become-distributor";
import Button from "../components/button";
import TextCard from "../components/text-card";
import WowSolar from "../components/wowsolar";
import { StaticImage } from "gatsby-plugin-image";
import AboutInvestment from "../components/sections/about-investment";

import { css } from "twin.macro";
import Slider from "react-slick";

import SliderButton from "../components/btn-slider-arrow";
import PlayIcon from "../assets/ico-play_video.svg";

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
    <Layout pageTitle="Become Distributor">
      <Banner />
      <div tw="px-4 lg:px-0 lg:w-9/12 mx-auto py-16 lg:py-48">
        <div tw="grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-32">
          <div tw="text-4xl lg:text-px54 col-span-2 mb-8 lg:mb-0">
            <span tw="leading-tight">Become an Amped Partner</span>
          </div>
          <div tw="col-span-3">
            <div tw="text-px21 mb-16">
              <p tw="mb-8">
                There are many choices when it comes to solar manufacturers and
                products. But you are most likely here because a fellow
                distributor said “Have you heard of Amped?”{" "}
              </p>
              <p tw="mb-8">
                Introducing a new manufacturer is a huge commitment. There are
                many steps to the process that takes both time and an
                investment. There must be a compelling reason to change.
              </p>
              <p tw="mb-8">
                For example, a slightly cheaper product is not compelling, given
                all the costs associated with switching. Instead, a distributor
                could ask their existing partner to compete for that price.
              </p>
            </div>
            <div tw="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <TextCard
                tw="bg-sitegray"
                value={
                  <div>
                    <span tw="text-primary">500</span>
                    <sup tw="text-secondary">+</sup>
                  </div>
                }
                label={"Agents Certified"}
              />
              <TextCard
                tw="bg-sitegray"
                value={
                  <div>
                    <span tw="text-primary">100</span>
                    <sup tw="text-secondary">k</sup>
                  </div>
                }
                label="Products in the Field"
              />
              <TextCard
                tw="bg-sitegray"
                value={
                  <div>
                    <span tw="text-primary">23</span>
                    <sup tw="text-secondary">+</sup>
                  </div>
                }
                label="Total Markets Active"
              />
            </div>
          </div>
        </div>
        <div tw="grid grid-cols-1 lg:grid-cols-5">
          <div tw="text-px32 font-circular-bold col-span-2 mb-8 lg:mb-0">
            So, why are distributors choosing Amped?
          </div>
          <div tw="col-span-3">
            <div tw="mb-8">
              <StaticImage
                alt=""
                loading="eager"
                placeholder="none"
                src="../images/why-distributor.jpg"
                layout="fullWidth"
              />
            </div>
            <div tw="text-px21">
              <p tw="mb-8">
                Distributors are making the effort to work with Amped because
                they see Amped as a long term technology and business partner. A
                product manufacturer is a distributor’s lifeline. A high quality
                product with the right features and product support means the
                difference between success and failure.
              </p>
              <p tw="mb-8">
                Distributors are excited by our appliance product roadmap and
                don’t want to be left behind still selling SHS when there is a
                portfolio of appliances they could be distributing. They want to
                be the first to meet the market demand and do not want someone
                else to swoop in and take their market. They are looking for a
                partner that gives them a competitive edge while partnering to
                build a business.
              </p>
              <p tw="mb-8">
                We receive inquiries weekly from distributors who were
                recommended to us by another distributor. We are Amped
                distributors’ go-to resource when they want to know about new
                appliance ideas or know about the latest battery technology.
              </p>
              <p tw="mb-8">
                Our reputation in product innovation and quality has not only
                made the “Orange” product the one end users request, but has
                made Amped the trusted advisor to distributors.
              </p>
            </div>

            <div tw="bg-sitegray p-12">
              <div tw="text-px21 mb-8">
                Become an Amped Distributor and Join Our mission!
              </div>
              <div tw="lg:grid lg:grid-cols-5">
                <input
                  tw="text-px16 col-span-3 p-4 w-full lg:w-auto mb-8 lg:mb-0"
                  placeholder="Enter your email address"
                />
                <Button
                  tw="col-span-2 lg:rounded-tl-none rounded-bl-none w-full lg:w-auto"
                  path="mailto:andi@ampedinnovation.com"
                  text="BECOME A PARTNER"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div tw="overflow-x-hidden pb-48">
        <div tw="px-4 lg:px-0 lg:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-5">
          <div tw="text-px36 col-span-2 mb-8 lg:mb-0 font-circular-bold">
            Distributor Experience
          </div>
          <div tw="col-span-3 relative" css={sliderOverride}>
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
                          src="../images/distributor-naisiga-banner.png"
                        />
                      </div>
                    </div>
                  }
                  caption={
                    "““In my experience, the WOWsolar 32” TVs are a very interesting product. Very unique. This is a product that has been built for our kind of market. You’ll notice from how the product has been made to service the customer. Amped’s tech support has really been outstanding. So many nice things to say about the support team. They are like a part of the family. Basically, to have a partnership with Amped has been a joyride.””"
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            loading="eager"
                            placeholder="none"
                            src="../images/distributor-robert-profile.png"
                          />
                        </div>
                      }
                      name={"Asaba Robert"}
                      address={"Technical Manager, Yellow Uganda"}
                    />
                  }
                />,
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      <div tw="relative">
                        <StaticImage
                          alt=""
                          src="../images/distributor-apollo-banner.png"
                        />
                      </div>
                    </div>
                  }
                  caption={
                    '"Their engineering team has really stepped up to the challenge of the African market and have created a wonderful product. The Amped Tech team is really really great. They really support us in the field. Day and ngiht!"'
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            loading="eager"
                            placeholder="none"
                            src="../images/distributor-mike-profile.png"
                          />
                        </div>
                      }
                      name={"Mike Tenywa & Jeus Ainomugisha"}
                      address={"Technical Manager, Brightlife"}
                    />
                  }
                />,
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      <div tw="relative">
                        <StaticImage
                          alt=""
                          src="../images/distributor-naisiga-banner.png"
                        />
                      </div>
                    </div>
                  }
                  caption={
                    "““In my experience, the WOWsolar 32” TVs are a very interesting product. Very unique. This is a product that has been built for our kind of market. You’ll notice from how the product has been made to service the customer. Amped’s tech support has really been outstanding. So many nice things to say about the support team. They are like a part of the family. Basically, to have a partnership with Amped has been a joyride.””"
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            loading="eager"
                            placeholder="none"
                            src="../images/distributor-robert-profile.png"
                          />
                        </div>
                      }
                      name={"Asaba Robert"}
                      address={"Technical Manager, Yellow Uganda"}
                    />
                  }
                />,
                <StorySliderContent
                  media={
                    <div tw="flex items-center justify-center h-full">
                      <div tw="relative">
                        <StaticImage
                          alt=""
                          src="../images/distributor-apollo-banner.png"
                        />
                      </div>
                    </div>
                  }
                  caption={
                    '"Their engineering team has really stepped up to the challenge of the African market and have created a wonderful product. The Amped Tech team is really really great. They really support us in the field. Day and ngiht!"'
                  }
                  author={
                    <StoryAuthor
                      image={
                        <div>
                          <StaticImage
                            alt=""
                            loading="eager"
                            placeholder="none"
                            src="../images/distributor-mike-profile.png"
                          />
                        </div>
                      }
                      name={"Mike Tenywa & Jeus Ainomugisha"}
                      address={"Technical Manager, Brightlife"}
                    />
                  }
                />,
              ]}
            />
          </div>
        </div>
      </div>

      <div tw="bg-sitegray py-16 lg:py-48 px-4 lg:px-0">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5">
          <div tw="text-px32 font-circular-bold col-span-2 lg:pr-16 mb-8 lg:mb-0">
            More than Products, We Help Build a Business
          </div>
          <div tw="col-span-3">
            <p tw="text-px21 mb-16">
              The Amped Partner Program has been designed around distributor
              sales success, ease of doing business, and creating opportunities
              to grow their business. It provides product and technical
              training, technical support, PAYGO integration, sales and
              marketing tools, and a range of other benefits exclusively
              available through our Partner program.
            </p>
            <div tw="grid grid-cols-2 lg:grid-cols-3 gap-8">
              <TextCard
                value={
                  <div>
                    <span tw="text-primary">1</span>
                    <span tw="text-secondary">.</span>
                  </div>
                }
                label={
                  "Product training and certification for sales acceleration"
                }
              />
              <TextCard
                value={
                  <div>
                    <span tw="text-primary">2</span>
                    <span tw="text-secondary">.</span>
                  </div>
                }
                label={
                  "Technical support and certifications to reduce the cost post-sales support"
                }
              />
              <TextCard
                value={
                  <div>
                    <span tw="text-primary">3</span>
                    <span tw="text-secondary">.</span>
                  </div>
                }
                label={"Fast product warranty response"}
              />
              <TextCard
                value={
                  <div>
                    <span tw="text-primary">4</span>
                    <span tw="text-secondary">.</span>
                  </div>
                }
                label={"Operational and shipping logistics help"}
              />
              <TextCard
                value={
                  <div>
                    <span tw="text-primary">5</span>
                    <span tw="text-secondary">.</span>
                  </div>
                }
                label={"Financing including experience with Letters of Credit"}
              />
              <TextCard
                value={
                  <div>
                    <span tw="text-primary">6</span>
                    <span tw="text-secondary">.</span>
                  </div>
                }
                label={"Easy and multiple ways to pay"}
              />
              <TextCard
                value={
                  <div>
                    <span tw="text-primary">7</span>
                    <span tw="text-secondary">.</span>
                  </div>
                }
                label={
                  "Collaboration on product roadmap for a differentiated product offering"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div tw="px-8 lg:px-4 py-16 lg:py-48 overflow-x-hidden">
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
                        layout="fullWidth"
                        src="../images/dreport-img-01.png"
                      />
                    </div>
                  }
                  title={"FAQ Sheet"}
                  actions={<a href="#/">Download Now</a>}
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        layout="fullWidth"
                        src="../images/dreport-img-02.png"
                      />
                    </div>
                  }
                  title={"Energy Budget Explained"}
                  actions={<a href="#/">Download Now</a>}
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        layout="fullWidth"
                        src="../images/dreport-img-03.png"
                      />
                    </div>
                  }
                  title={"The Advantage of the Orange"}
                  actions={<a href="#/">Download Now</a>}
                />,
                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        layout="fullWidth"
                        src="../images/dreport-img-03-1.png"
                      />
                    </div>
                  }
                  title={
                    <div>
                      <WowSolar tw="text-px28" model={60} /> - Product Training
                    </div>
                  }
                  actions={<a href="#/">Download Now</a>}
                />,

                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        layout="fullWidth"
                        src="../images/dreport-img-03-2.png"
                      />
                    </div>
                  }
                  title={
                    <div>
                      <WowSolar tw="text-px28" model={100} /> - Product Training
                    </div>
                  }
                  actions={<a href="#/">Download Now</a>}
                />,

                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        layout="fullWidth"
                        src="../images/dreport-img-03-3.png"
                      />
                    </div>
                  }
                  title={
                    <div>
                      <WowSolar tw="text-px28" model={"400"} /> - Product
                      Training
                    </div>
                  }
                  actions={<a href="#/">Download Now</a>}
                />,

                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        layout="fullWidth"
                        src="../images/dreport-img-03-4.png"
                      />
                    </div>
                  }
                  title={
                    <div>
                      <WowSolar tw="text-px28" model={"TV24100"} /> - Product
                      Training
                    </div>
                  }
                  actions={<a href="#/">Download Now</a>}
                />,

                <DownloadableContent
                  media={
                    <div>
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        layout="fullWidth"
                        src="../images/dreport-img-03-5.png"
                      />
                    </div>
                  }
                  title={
                    <div>
                      <WowSolar tw="text-px28" model={"TV32120"} /> - Product
                      Training
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
        <AboutInvestment />
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
