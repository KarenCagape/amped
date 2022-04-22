import * as React from 'react';
import 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import WowSolarHero from '../components/heroes/wowsolar-hero';
import WowSolar from '../components/wowsolar';
import DataAndSpecSummary from '../components/data-and-spec-summary';
import Button from '../components/_/button';
import SvgLight from '../assets/ico-light.svg';
import { SvgCardLandscape, SvgCard } from '../components/svg-card';
import ExtraInfoFill from '../components/extra-info-fill';
import LightingSlider from '../components/lighting-slider';
import BecomeDistributor2 from '../components/sections/become-distributor2';
import SvgRadio from '../assets/ico-radio.svg';
import SvgTorch from '../assets/ico-torch.svg';
import SvgPayGo from '../assets/ico-paygo-controller.svg';
import SvgSolarPanel from '../assets/ico-solar-panel.svg';
import BannerLogo from '../assets/logo-wowsolar400.svg';

export default function ProductWowsolar400() {
  const detailRef = React.useRef();

  return (
    <Layout pageTitle="Wowsolar-400">
      <div tw="relative">
        <div tw="sticky top-0 flex justify-end z-10 pointer-events-none">
          <div tw="w-1/2 p-16">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/wowsolar400-hero-new.png"
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
                model={<span tw="text-primary">400</span>}
              />
            }
            caption={
              <span>
                Amped’s <span tw="text-primary">premium lighting kit</span> for
                those looking for a more high-performance home or business
                setup.
              </span>
            }
            // image={
            //   <StaticImage
            //     loading="eager"
            //     placeholder="none"
            //     src="../images/product-wowsolar400-hero.png"
            //   />
            // }
          />
        </div>
        <div ref={detailRef}>
          <div tw="px-4 lg:px-0 lg:w-9/12 mx-auto lg:py-48 py-16">
            <DataAndSpecSummary
              tw="mb-16 lg:mb-24"
              caption={
                <span>
                  The <WowSolar tw="text-2xl lg:text-px28" model={'400'} />
                  is designed with 5 or 6 light points, brighter lamps from 160
                  to 400 Lumens, a choice of solar panel for more phone
                  charging, and portable accessories with an extra-large battery
                  for long runtimes between charges.
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
            <div tw="lg:mb-32 mb-16">
              <div tw="text-lg lg:text-px28 lg:mb-16 mb-8 lg:w-6/12">
                The <WowSolar tw="text-2xl lg:text-px28" model={'400'} /> comes
                in multiple light point configurations:
              </div>
              <SvgCardLandscape
                tw="lg:w-1/2 mb-8"
                title={
                  <>
                    <span tw="text-primary">5-Point</span> Lighting System
                  </>
                }
                caption={
                  'with three overhead lamps, a portable torch built into the radio, and a standalone metal torch'
                }
                svg={
                  <>
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgRadio css={[{ width: 72 }]} />
                    <SvgTorch css={[{ width: 72 }]} />
                  </>
                }
              />
              <SvgCardLandscape
                tw="lg:w-1/2"
                title={
                  <>
                    <span tw="text-primary">6-Point</span> Lighting System
                  </>
                }
                caption={
                  'with four overhead lamps, a portable torch built into the radio, and a standalone metal torch'
                }
                svg={
                  <>
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgRadio css={[{ width: 72 }]} />
                    <SvgTorch css={[{ width: 72 }]} />
                  </>
                }
              />
            </div>
            <div>
              <div tw="text-2xl lg:text-px28 mb-16">What’s included</div>
              <div tw="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-1/2 mb-16">
                <SvgCard
                  icon={<SvgPayGo css={[{ width: 72 }]} />}
                  content={'20Whr Amped PAYGO Controller'}
                />
                <SvgCard
                  icon={<SvgLight css={[{ width: 72 }]} />}
                  content={'3-Point or 4-Point Lighting Solution'}
                />
                <SvgCard
                  icon={<SvgSolarPanel css={[{ width: 72 }]} />}
                  content={'15W or 20W Solar Panel'}
                />
                <SvgCard
                  icon={<SvgRadio css={[{ width: 72 }]} />}
                  content={'Radio with 40Lm Portable Torch'}
                />
                <SvgCard
                  icon={<SvgTorch css={[{ width: 72 }]} />}
                  content={'Standalone Metal Torch with 200Lm'}
                />
              </div>
              <div tw="text-secondary text-px16 w-1/2">
                *Choose a light point option and then select a solar panel
                option. Both configurations include the Amped 20Whr Controller
                and USB phone charging cable.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="lg:pb-48 pb-16">
        <div tw="w-9/12 mx-auto">
          <ExtraInfoFill
            caption={
              <div>
                The industry leading{' '}
                <WowSolar
                  tw="text-2xl lg:text-px28"
                  model={<span tw="text-primary">400</span>}
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
        <LightingSlider
          heading={
            <div tw="w-9/12 mx-auto font-sf-light text-px54 mb-12">
              Other similar products
            </div>
          }
          reverse={true}
          tw="lg:py-48 py-16"
        />
      </div>
      <div>
        <BecomeDistributor2 />
      </div>
    </Layout>
  );
}
