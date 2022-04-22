import * as React from 'react';
import 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import WowSolarHero from '../components/heroes/wowsolar-hero';
import WowSolar from '../components/wowsolar';
import DataAndSpecSummary from '../components/data-and-spec-summary';
import Button from '../components/_/button';
import { SvgCardLandscape, SvgCard } from '../components/svg-card';
import ExtraInfoFill from '../components/extra-info-fill';
import BecomeDistributor2 from '../components/sections/become-distributor2';
import SvgLight from '../assets/ico-light.svg';

import SvgPayGo from '../assets/ico-paygo-controller.svg';
import SvgSolarPanel from '../assets/ico-solar-panel.svg';
import SvgExternalBattery from '../assets/ico-external_battery.svg';
import SvgTv from '../assets/ico-tv.svg';
import BannerLogo from '../assets/logo-wowsolartv32120.svg';

export default function ProductWowsolarTv32120() {
  const detailRef = React.useRef();

  return (
    <Layout pageTitle="Wowsolar-tv32120">
      <div tw="relative">
        <div tw="sticky top-0 flex justify-end z-10 pointer-events-none">
          <div tw="w-1/2 p-16">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              // src="../images/product-wowsolar_tv32120-hero.png"
              src="../images/banner-wowsolar-tv-new.png"
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
                model={<span tw="text-primary">TV 32120</span>}
              />
            }
            caption={
              <span>
                Amped’s{' '}
                <span tw="text-primary">premium television offering</span> with
                an extra-large 32” screen and industry leading brightness
              </span>
            }
            // image={
            //   <StaticImage
            //     loading="eager"
            //     placeholder="none"
            //     src="../images/product-wowsolar_tv32120-hero.png"
            //   />
            // }
          />
        </div>
        <div ref={detailRef}>
          <div tw="px-4 lg:px-0 lg:w-9/12 mx-auto lg:py-48 py-16">
            <DataAndSpecSummary
              tw="mb-8 lg:mb-24"
              caption={
                <span>
                  The <WowSolar tw="text-2xl lg:text-px28" model={'TV32120'} />{' '}
                  comes with 4 light points at 160 to 400 lumens, a large panel
                  for fast charging and includes innovative SmartPerformance
                  features like Amped Intelligent Power Control - making it the
                  brightest 32” TV with the longest runtime in the off-grid
                  market.
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
            <div tw="px-4 lg:px-0 mb-16 lg:mb-32">
              <div tw="text-2xl lg:text-px28 lg:mb-16 mb-8">
                The <WowSolar tw="text-2xl lg:text-px28" model={'TV32120'} />{' '}
                comes with configurations:
              </div>
              <SvgCardLandscape
                tw="lg:w-1/2 mb-8"
                title={
                  <>
                    <span tw="text-primary">32”</span> Television System
                  </>
                }
                caption={
                  'with four overhead lamps, 120Whr total battery and either a 40W or 50W panel'
                }
                svg={
                  <>
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgSolarPanel css={[{ width: 72 }]} />
                  </>
                }
              />
            </div>
            <div>
              <div tw="text-2xl lg:text-px28 lg:mb-16 mb-8">
                What’s included
              </div>
              <div tw="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:w-1/2 lg:mb-16 mb-8">
                <SvgCard
                  icon={<SvgPayGo css={[{ width: 72 }]} />}
                  content={'40Whr Amped PAYGO Controller'}
                />
                <SvgCard
                  icon={<SvgExternalBattery css={[{ width: 72 }]} />}
                  content={'80Whr External Battery'}
                />
                <SvgCard
                  icon={<SvgLight css={[{ width: 72 }]} />}
                  content={'4-Point Lights'}
                />
                <SvgCard
                  icon={<SvgSolarPanel css={[{ width: 72 }]} />}
                  content={'40W or 50W Solar Panel'}
                />
                <SvgCard
                  icon={<SvgTv css={[{ width: 72 }]} />}
                  content={'32” Solar TV'}
                />
              </div>
              <div tw="text-secondary text-px16">
                *Includes a USB phone charging cable and a decoder splitter
                cable.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 pb-16">
        <div tw="lg:w-9/12 mx-auto">
          <ExtraInfoFill
            caption={
              <div>
                The industry leading{' '}
                <WowSolar
                  tw="text-2xl lg:text-px28"
                  model={<span tw="text-primary">TV32120</span>}
                />{' '}
                system has the option of two high performance accessories - 200
                Lm metal torch and a radio with a 40 Lumen built in torch. Each
                accessory has a 7.4Whr battery providing long runtimes between
                charges. It can be upgrade with a{' '}
                <WowSolar
                  tw="text-2xl lg:text-px28"
                  model={<span tw="text-primary">FAN</span>}
                />{' '}
                without having to purchase another controller, lights or phone
                charging cable.
              </div>
            }
          />
        </div>
      </div>

      <div>
        <BecomeDistributor2 />
      </div>
    </Layout>
  );
}
