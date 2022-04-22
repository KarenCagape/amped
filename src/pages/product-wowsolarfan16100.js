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
import SVGExternalBattery from '../assets/ico-external_battery.svg';
import SVGFan from '../assets/ico-fan.svg';
import BannerLogo from '../assets/logo-wowsolarfan16100.svg';

export default function ProductWowsolarFan16100() {
  const detailRef = React.useRef();

  return (
    <Layout pageTitle="Wowsolar-fan16100">
      <div tw="relative">
        <div tw="sticky top-0 flex justify-end z-10 pointer-events-none">
          <div tw="w-1/2 p-16">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              // src="../images/wowsolar_fan16120-hero.png"
              src="../images/product-wowsolar_fan16100.png"
            />
          </div>
        </div>
        <div tw="absolute top-0 left-0 min-h-screen">
          <WowSolarHero
            detailRef={detailRef}
            bannerLogo={<BannerLogo />}
            wowsolar={
              <WowSolar
                tw="text-xl lg:text-px28"
                model={<span tw="text-primary">FAN 16100</span>}
              />
            }
            caption={
              <span>
                Amped’s <span tw="text-primary">starting cooling system</span> -
                perfect for all night air-flow and daytime power for keeping
                cool.
              </span>
            }
            // image={
            //   <StaticImage
            //     loading="eager"
            //     placeholder="none"
            //     src="../images/product-wowsolar_fan16100-hero.png"
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
                  The{' '}
                  <WowSolar tw="text-2xl lg:text-px28" model={'FAN 16100'} />{' '}
                  comes with 3 light points at 160 to 400 lumens, a large 40W
                  panel for fast phone charging and includes high speed airflow,
                  advanced motor design for long time usage, and all day
                  runtimes.
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
                The <WowSolar tw="text-2xl lg:text-px28" model={'FAN16100'} />{' '}
                comes in configuration:
              </div>
              <SvgCardLandscape
                tw="lg:w-1/2"
                title={
                  <>
                    <span tw="text-primary">16100</span> Fan System
                  </>
                }
                caption={
                  'with three overhead lamps, 100Whr total battery and a 40W panel'
                }
                svg={
                  <>
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgLight css={[{ width: 72 }]} />
                    <SvgSolarPanel css={[{ width: 72 }]} />
                  </>
                }
              />
            </div>
            <div>
              <div tw="text-2xl lg:text-px28 mb-8 lg:mb-16">
                What’s included
              </div>
              <div tw="grid lg:grid-cols-3 gap-8 lg:w-1/2 lg:mb-16 mb-8 grid-cols-1">
                <SvgCard
                  icon={<SvgPayGo css={[{ width: 72 }]} />}
                  content={'20Whr Amped PAYGO Controller'}
                />
                <SvgCard
                  icon={<SVGExternalBattery css={[{ width: 72 }]} />}
                  content={'80Whr External Battery'}
                />
                <SvgCard
                  icon={<SvgLight css={[{ width: 72 }]} />}
                  content={'3 Overhead Lamps'}
                />
                <SvgCard
                  icon={<SvgSolarPanel css={[{ width: 72 }]} />}
                  content={'40W Solar Panel'}
                />
                <SvgCard
                  icon={<SVGFan css={[{ width: 72 }]} />}
                  content={'16’’ Standing Fan'}
                />
              </div>
              <div tw="text-secondary text-px16">
                *Includes a USB phone charging cable.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div tw="px-4 lg:px-0 pb-16 lg:pb-48">
        <div tw="lg:w-9/12 mx-auto">
          <ExtraInfoFill
            caption={
              <div>
                Like other Amped solutions the{' '}
                <WowSolar
                  tw="text-2xl lg:text-px28"
                  model={<span tw="text-primary">FAN 16100 </span>}
                />{' '}
                can be upgrade with a TV in the customer’s home or business
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
