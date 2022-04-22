import * as React from "react";
import "twin.macro";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import WowSolarHero from "../components/heroes/wowsolar-hero";
import WowSolar from "../components/wowsolar";
import DataAndSpecSummary from "../components/data-and-spec-summary";
import Button from "../components/_/button";
import SVGLight from "../assets/ico-light.svg";
import SVGPaygoController from "../assets/ico-paygo-controller.svg";
import SVGSolarGrid from "../assets/ico-solar-panel.svg";
import SVGRadio from "../assets/ico-radio.svg";
import { SvgCardLandscape, SvgCard } from "../components/svg-card";
import ExtraInfoFill from "../components/extra-info-fill";
import LightingSlider from "../components/lighting-slider";
import BecomeDistributor2 from "../components/sections/become-distributor2";
import SvgRadio from "../assets/ico-radio.svg";
import BannerLogo from "../assets/logo-wowsolar100.svg";

export default function ProductWowsolar100() {
  const detailRef = React.useRef();

  return (
    <Layout pageTitle="Wowsolar-100">
      <div tw="relative">
        <div tw="sticky top-0 flex justify-end z-10 pointer-events-none">
          <div tw="w-1/2 p-16">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/wowsolar100-hero-new.png"
            />
          </div>
        </div>
        <div tw="absolute top-0 left-0 min-h-screen">
          <WowSolarHero
            detailRef={detailRef}
            bannerLogo={<BannerLogo />}
            wowsolar={
              <WowSolar
                tw="text-2xl lg:text-px28"
                model={<span tw="text-primary">100</span>}
              />
            }
            caption={
              <span>
                Amped’s{" "}
                <span tw="text-primary">best-selling lightning system</span> at
                an ultra-affordable price for those looking for the highest
                standard offering
              </span>
            }
            // image={
            //   <StaticImage
            //     loading="eager"
            //     placeholder="none"
            //     src="../images/product-wowsolar100-hero.png"
            //   />
            // }
          />
        </div>
        <div ref={detailRef}>
          <div tw="px-4 lg:px-0 lg:w-9/12 mx-auto lg:py-48 py-16 font-circular-regular">
            <DataAndSpecSummary
              tw="mb-8 lg:mb-24"
              caption={
                <span>
                  The <WowSolar tw="text-lg lg:text-px28" model={"100"} /> is
                  designed with 4 or 5 light points, brighter lamps from 140 to
                  400 Lumens, a bigger 10W solar panel for more phone charging,
                  and portable torch/radio with an extra-large battery for
                  longer runtimes between charges.
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
            <div tw="mb-8 lg:mb-32">
              <div tw="text-px28 lg:mb-16 mb-8">
                The <WowSolar tw="text-2xl lg:text-px28" model={"100"} /> comes
                in two configurations:
              </div>
              <SvgCardLandscape
                tw="lg:w-1/2 mb-8"
                title={
                  <>
                    <span tw="text-primary">4-Point</span> Lighting System
                  </>
                }
                caption={
                  "with three overhead lamps and portable torch built into the radio"
                }
                svg={
                  <>
                    <SVGLight css={[{ width: 72 }]} />
                    <SVGLight css={[{ width: 72 }]} />
                    <SVGLight css={[{ width: 72 }]} />
                    <SvgRadio css={[{ width: 72 }]} />
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
                caption={
                  "with four overhead lamps and portable torch built into the radio"
                }
                svg={
                  <>
                    <SVGLight css={[{ width: 72 }]} />
                    <SVGLight css={[{ width: 72 }]} />
                    <SVGLight css={[{ width: 72 }]} />
                    <SVGLight css={[{ width: 72 }]} />
                    <SvgRadio css={[{ width: 72 }]} />
                  </>
                }
              />
            </div>
            <div>
              <div tw="text-2xl mb-8 lg:text-px28 lg:mb-16">
                What’s included
              </div>
              <div tw="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-1/2 lg:mb-16 mb-8">
                <SvgCard
                  icon={<SVGPaygoController css={[{ width: 72 }]} />}
                  content={"20Whr Amped PAYGO Controller"}
                />
                <SvgCard
                  icon={<SVGLight css={[{ width: 72 }]} />}
                  content={"3-Point or 4-Point Lighting Solution"}
                />
                <SvgCard
                  icon={<SVGSolarGrid css={[{ width: 72 }]} />}
                  content={"6W Solar Panel"}
                />
                <SvgCard
                  icon={<SVGRadio css={[{ width: 72 }]} />}
                  content={"Radio with Portable Torch"}
                />
              </div>
              <div tw="text-secondary text-px16">
                *Both configurations include a USB phone charging cable.
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
                The industry leading{" "}
                <WowSolar
                  tw="text-lg lg:text-px28"
                  model={<span tw="text-primary">100</span>}
                />{" "}
                has true upgradability that allows you to upgrade the lighting
                system with a TV or fanin the customer’s home without have to
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
          tw="py-48"
        />
      </div>
      <div>
        <BecomeDistributor2 />
      </div>
    </Layout>
  );
}
