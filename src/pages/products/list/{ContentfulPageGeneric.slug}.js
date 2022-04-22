import * as React from 'react';
import 'twin.macro';
import { graphql } from 'gatsby';
// import _ from 'lodash';
import Layout from '../../../components/layout';
import WowSolarHero from '../../../components/heroes/wowsolar-hero';
import WowSolar from '../../../components/wowsolar';
import DataAndSpecSummary from '../../../components/data-and-spec-summary';
import Button from '../../../components/_/button';
import SVGLight from '../../../assets/ico-light.svg';
import SVGPaygoController from '../../../assets/ico-paygo-controller.svg';
import SVGSolarPanel from '../../../assets/ico-solar-panel.svg';
import { SvgCardLandscape, SvgCard } from '../../../components/svg-card';
import ExtraInfoFill from '../../../components/extra-info-fill';
import LightingSlider from '../../../components/lighting-slider';
import BecomeDistributor from '../../../components/sections/become-distributor';
import { StaticImage } from 'gatsby-plugin-image';
import BannerLogo from '../../../assets/logo-wowsolar60.svg';

export default function ProductWowsolar60(props) {
  console.log(props);
  const detailRef = React.useRef();

  return (
    <Layout pageTitle="Wowsolar-60">
      <div tw="relative">
        <div tw="sticky top-0 flex justify-end z-10 pointer-events-none">
          <div tw="w-1/2 p-16">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/product-wowsolar60-hero.png"
            />
          </div>
        </div>
        <div tw="absolute top-0 left-0 min-h-screen">
          <WowSolarHero
            detailRef={detailRef}
            bannerLogo={<BannerLogo />}
            wowsolar={
              <WowSolar
                tw="text-lg lg:text-px28"
                model={<span tw="text-primary">60</span>}
              />
            }
            caption={
              <span>
                Amped’s{' '}
                <span tw="text-primary">most affordable lighting kit </span>
                for those looking for the simplest lighting and phone charging
                offering.
              </span>
            }
          />
        </div>

        <div ref={detailRef}>
          <div tw="px-4 lg:px-0 lg:w-9/12 mx-auto lg:py-48 py-16">
            <DataAndSpecSummary
              tw="mb-8 lg:mb-24"
              caption={
                <span>
                  The <WowSolar tw="text-2xl lg:text-px28" model={'60'} /> is
                  designed with 3 or 4 light points, bright 140 Lumen lamps, two
                  USB ports, and up to 7-meter light cables making it easier to
                  light your entire home.
                </span>
              }
              actions={
                <>
                  <Button tw="mr-4" as="a" href="/">
                    DATA SHEET
                  </Button>
                  <Button tw="bg-secondary" as="a" href="/">
                    SPEC SHEET
                  </Button>
                </>
              }
            />
            <div tw="lg:mb-32 mb-8">
              <div tw="text-2xl lg:text-px28 lg:mb-16 mb-8">
                The <WowSolar tw="text-2xl lg:text-px28" model={'60'} /> comes
                in two configurations:
              </div>
              <SvgCardLandscape
                tw="lg:w-1/2 mb-8"
                title={
                  <>
                    <span tw="text-primary">3-Point</span> Lighting System
                  </>
                }
                caption={'with three overhead lamps'}
                svg={
                  <>
                    <SVGLight css={[{ width: 72 }]} />
                    <SVGLight css={[{ width: 72 }]} />
                    <SVGLight css={[{ width: 72 }]} />
                  </>
                }
              />
              <SvgCardLandscape
                tw="lg:w-1/2"
                title={
                  <>
                    <span tw="text-primary">4-Point</span> Lighting System
                  </>
                }
                caption={'with four overhead lamps'}
                svg={
                  <>
                    <SVGLight css={[{ width: 72 }]} />
                    <SVGLight css={[{ width: 72 }]} />
                    <SVGLight css={[{ width: 72 }]} />
                    <SVGLight css={[{ width: 72 }]} />
                  </>
                }
              />
            </div>
            <div>
              <div tw="text-2xl lg:text-px28 lg:mb-16 mb-8">
                What’s included
              </div>

              <div tw="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-1/2 lg:mb-16 mb-8">
                <SvgCard
                  icon={<SVGPaygoController css={[{ width: 72 }]} />}
                  content={'20Whr Amped PAYGO Controller'}
                />
                <SvgCard
                  icon={<SVGLight css={[{ width: 72 }]} />}
                  content={'3-Point or 4-Point Lighting Solution'}
                />
                <SvgCard
                  icon={<SVGSolarPanel css={[{ width: 72 }]} />}
                  content={'6W Solar Panel'}
                />
              </div>

              <div tw="text-secondary text-px16">
                *Both configurations include a USB phone charging cable.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div tw="px-4 lg:px-0 pb-24 lg:pb-48">
        <div tw="lg:w-9/12 mx-auto">
          <ExtraInfoFill
            caption={
              <div>
                The industry leading{' '}
                <WowSolar
                  tw="text-2xl lg:text-px28"
                  model={<span tw="text-primary">60</span>}
                />{' '}
                has true upgradability that allows you to upgrade the lighting
                system with a TV in the customer’s home without have to
                repurchase the controller, lights or phone charging cable.
              </div>
            }
          />
        </div>
      </div>

      <div>
        <LightingSlider reverse={true} tw="lg:py-48 py-16" />
      </div>
      <div>
        <BecomeDistributor />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    contentfulPageGeneric(id: { eq: $id }) {
      banner {
        id
        banner
        captions {
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
      sections {
        id
        section
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
