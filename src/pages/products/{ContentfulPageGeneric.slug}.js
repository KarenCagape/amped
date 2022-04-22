import * as React from 'react';
import Slider from 'react-slick';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { StaticImage } from 'gatsby-plugin-image';
import tw, { css } from 'twin.macro';
import Layout from '../../components/layout';
import UpgradeSteps from '../../components/upgrade-steps';
import ExtraInfoLight from '../../components/extra-info-light';
import SvgCard from '../../components/svg-card';
import Button from '../../components/button';
import Button2 from '../../components/_/button';
import WowSolar from '../../components/wowsolar';
import get from '../../helpers/get';
import SliderButton from '../../components/btn-slider-arrow';
import ProductCardLandscape from '../../components/product-card-landscape';

const comparisonCss = css`
  table {
    ${tw`w-full`}
  }

  table,
  th,
  td {
    ${tw`
      border-2
      border-gray-200 
    `}
  }

  th,
  td {
    ${tw`p-3.5`}
  }

  table thead {
    ${tw`
      text-left 
      text-primary
      font-circular-bold
    `}
  }

  tbody {
    ${tw`bg-white`}
  }

  .h-icon {
    width: 40px;
    height: 40px;
    ${tw`mb-4`}
  }
`;

function ProductSlider({ reverse = false, ...rest }) {
  const sliderRef = React.useRef();
  const productSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div tw="overflow-x-hidden">
      <div
        tw="relative"
        css={[
          {
            width: 2800,
            transform: 'translateX(16%)',
          },
        ]}
      >
        <SliderButton
          tw="absolute"
          onClick={() => {
            sliderRef.current.slickNext();
          }}
          css={[
            {
              left: '-7%',
              bottom: '5%',
            },
          ]}
        />
        <Slider ref={sliderRef} {...productSliderSettings}>
          <div tw="px-4">
            <ProductCardLandscape
              css={[reverse && tw`bg-white`]}
              img={
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/slider-wowsolar60.png"
                />
              }
              title={<WowSolar tw="text-px32" model={60} />}
              caption={
                <div tw="text-px18">
                  Amped’s most affordable solution, with 20Whr of LiFe battery,
                  3 pendant lamps and built-in phone charging.
                </div>
              }
              action={
                <Button2 as="a" href="/product-wowsolar60">
                  VIEW PRODUCT
                </Button2>
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
                  src="../images/slider-wowsolar100.png"
                />
              }
              title={<WowSolar tw="text-px32" model={100} />}
              caption={
                <div tw="text-px18">
                  Amped’s most affordable lighting kit for those looking for the
                  simplest lighting and phone charging offering.
                </div>
              }
              action={
                <Button2 as="a" href="/product-wowsolar100">
                  VIEW PRODUCT
                </Button2>
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
                  src="../images/wowsolar60.png"
                />
              }
              title={<WowSolar tw="text-px32" model={400} />}
              caption={
                <div tw="text-px18">
                  Amped’s most affordable lighting kit for those looking for the
                  simplest lighting and phone charging offering.
                </div>
              }
              action={
                <Button2 as="a" href="/product-wowsolar400">
                  VIEW PRODUCT
                </Button2>
              }
            />
          </div>
          <div tw="px-4">
            <ProductCardLandscape
              css={[reverse && tw`bg-white`]}
              img={<StaticImage alt="" src="../images/wowsolar60.png" />}
              title={<WowSolar tw="text-px32" model={60} />}
              caption={
                <div tw="text-px18">
                  Amped’s most affordable lighting kit for those looking for the
                  simplest lighting and phone charging offering.
                </div>
              }
              action={
                <Button2 as="a" href="/product-wowsolar60">
                  VIEW PRODUCT
                </Button2>
              }
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default function ProductLightingAndPhoneCharging(props) {
  const slug = get(props, 'params.slug');
  const sections = get(props, 'data.contentfulPageGeneric.sections', []);
  const bgData = get(props, 'data.contentfulPageGeneric.banner.background');
  const bannerHeadings = get(
    props,
    'data.contentfulPageGeneric.banner.headings',
    []
  );
  const bannerCaptions = get(
    props,
    'data.contentfulPageGeneric.banner.captions',
    []
  );
  // const section1 = get(props, 'data.contentfulPageGeneric.sections[0]');
  // const svgSliderSettings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  // };

  const bgImage = getImage(bgData);
  const bg = convertToBgImage(bgImage);

  console.log('SECTIONS', sections);

  return (
    <Layout pageTitle={slug}>
      <BackgroundImage
        tw="min-h-screen bg-fixed bg-cover bg-no-repeat flex items-center"
        {...bg}
      >
        <div tw="w-9/12 mx-auto">
          <div tw="w-2/5">
            <h1 tw="font-sf-light text-px72 mb-12">
              {bannerHeadings.map((heading, idx) => (
                <span key={idx}>{heading.text.text}</span>
              ))}
            </h1>
            <p tw="text-px32 font-circular-book">
              <WowSolar tw="text-px32" />{' '}
              {bannerCaptions.map((caption, idx) => (
                <span key={idx}>{caption.text.text}</span>
              ))}
            </p>
          </div>
        </div>
      </BackgroundImage>
      {sections.map((section, idx) => {
        console.log('LAYOUT', get(section, 'layout'));

        if (get(section, 'layout') === 'overview') {
          return (
            <section key={idx} tw="pt-48 flex items-center">
              <div tw="w-9/12 mx-auto ">
                <div tw="grid grid-cols-5">
                  <div tw="col-span-2">
                    <h2 tw="font-sf-light text-px54">
                      {get(section, 'headings', []).map((heading, idx) => (
                        <span key={idx}>{get(heading, 'text.text')}</span>
                      ))}
                    </h2>
                  </div>
                  <div tw="col-span-3">
                    <div>
                      {get(section, 'captions', []).map((caption, idx) => (
                        <p
                          key={idx}
                          tw="mb-16 font-circular-book leading-normal text-px21 text-default"
                        >
                          {get(caption, 'text.text')}
                        </p>
                      ))}
                    </div>
                    <div tw="grid grid-cols-3 justify-between gap-6">
                      {get(section, 'block', []).map((block, idx) => (
                        <SvgCard
                          key={idx}
                          icon={
                            <img
                              src={get(block, 'icons[0].file.url')}
                              alt=""
                              tw="w-1/2"
                            />
                          }
                          content={
                            <div>
                              {get(block, 'captions', []).map(
                                (caption, idx) => (
                                  <span key={idx}>
                                    {get(caption, 'text.text')}
                                  </span>
                                )
                              )}
                            </div>
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (get(section, 'layout') === 'product-slider') {
          return (
            <section key={idx} tw="flex py-48 items-center">
              <div tw="w-full">
                <div tw="w-9/12 mx-auto">
                  <h2 tw="mb-16 text-px54 font-bold">
                    {get(section, 'headings', []).map((heading, idx) => (
                      <span key={idx}>{get(heading, 'text.text')}</span>
                    ))}
                  </h2>
                </div>
                <ProductSlider />
              </div>
            </section>
          );
        }

        if (get(section, 'layout') === 'comparison') {
          return (
            <section
              key={idx}
              className="layout-comparison"
              tw="py-48 flex items-center bg-sitegray"
              css={[comparisonCss]}
            >
              <div tw="w-9/12 mx-auto">
                <h2 tw="mb-16 text-px54 font-bold">
                  {get(section, 'headings', []).map((heading, idx) => (
                    <span key={idx}>{get(heading, 'text.text')}</span>
                  ))}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: get(section, 'html', [])
                      .map((htmlItems) => get(htmlItems, 'content.content', ''))
                      .join(''),
                  }}
                />
              </div>
            </section>
          );
        }

        if (get(section, 'layout') === 'upgrades') {
          return (
            <section key={idx} tw="pt-48 flex items-center">
              <div tw="w-9/12 mx-auto">
                <h2 tw="text-5xl mb-16">
                  {get(section, 'headings', []).map((heading, idx) => (
                    <span key={idx}>{get(heading, 'text.text')}</span>
                  ))}
                </h2>
                <UpgradeSteps data={get(section, 'block', [])} />
              </div>
            </section>
          );
        }

        if (get(section, 'layout') === 'feature') {
          return (
            <section key={idx} tw="py-48 flex items-center">
              <div tw="w-9/12 mx-auto">
                <ExtraInfoLight
                  caption={
                    <div
                      dangerouslySetInnerHTML={{
                        __html: get(section, 'html', [])
                          .map((htmlItems) =>
                            get(htmlItems, 'content.content', '')
                          )
                          .join(''),
                      }}
                    />
                  }
                />
              </div>
            </section>
          );
        }

        if (get(section, 'layout') === 'photo-grid') {
          const photoGridImages = get(section, 'images', []).map((image) =>
            get(image, 'images[0]')
          );

          return (
            <section key={idx} tw="py-48 flex items-center bg-sitegray">
              <div tw="w-9/12 mx-auto">
                <h2 tw="mb-16 text-px54 font-bold">
                  {get(section, 'headings', []).map((heading, idx) => (
                    <span key={idx}>{get(heading, 'text.text')}</span>
                  ))}
                </h2>
                <div tw="grid grid-cols-3 gap-8">
                  {photoGridImages.map((image, idx) => (
                    <GatsbyImage
                      key={idx}
                      image={getImage(image)}
                      alt={image.title}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (get(section, 'layout') === 'become-a-distributor') {
          const becomeDistributorImages = get(section, 'images', []).map(
            (image) => get(image, 'images[0]')
          );

          return (
            <section key={idx} tw="py-48 flex items-center">
              <div tw="w-9/12 mx-auto grid grid-cols-2 gap-8 items-center">
                <div>
                  <h2 tw="text-5xl mb-16">
                    {get(section, 'headings', []).map((heading, idx) => (
                      <span key={idx}>{get(heading, 'text.text')}</span>
                    ))}
                  </h2>
                  {get(section, 'links', []).map((link, idx) => (
                    <Button
                      key={idx}
                      path={get(link, 'path', '')}
                      text={get(link, 'label', '')}
                    />
                  ))}
                </div>
                <div>
                  {becomeDistributorImages.map((image, idx) => (
                    <GatsbyImage
                      key={idx}
                      image={getImage(image)}
                      alt={image.title}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    contentfulPageGeneric(id: { eq: $id }) {
      banner {
        id
        banner
        headings {
          heading
          text {
            text
          }
        }
        captions {
          text {
            text
          }
        }
        background {
          title
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      sections {
        id
        section
        layout
        links {
          label
          link
        }
        html {
          content {
            content
          }
        }
        images {
          images {
            title
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        block {
          icons {
            id
            title
            file {
              url
            }
          }
          block {
            block {
              captions {
                caption
                text {
                  text
                }
              }
              headings {
                heading
                text {
                  text
                }
              }
            }
          }
        }
        headings {
          text {
            text
          }
        }
        captions {
          caption
          text {
            text
          }
        }
        block {
          id
          captions {
            caption
            text {
              text
            }
          }
          headings {
            heading
            text {
              text
            }
          }
          block {
            captions {
              caption
              text {
                text
              }
            }
            headings {
              heading
              text {
                text
              }
              childrenContentfulElementHeadingTextTextNode {
                text
              }
            }
          }
        }
      }
    }
  }
`;
