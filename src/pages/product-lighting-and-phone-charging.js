import * as React from "react";
import tw, { css } from "twin.macro";
import Layout from "../components/layout";
import HeroLightingAndPhoneCharging from "../components/heroes/lighting-and-phone-charging";
import ComparisonTableLighting from "../components/comparison-lighting";
import UpgradeSteps2 from "../components/upgrade-steps-2";
import ExtraInfoLight from "../components/extra-info-light";
import BecomeDistributor from "../components/sections/become-distributor";
import { SubHeader } from "../components/_/header";
import { Text } from "../components/_/text";
import SvgCard from "../components/svg-card";

import SvgBrighterLamp from "../assets/brighter-lamp.svg";
import SvgPhoneCharging from "../assets/phone-charging.svg";
import SvgLongerTorchOrRadioRuntime from "../assets/longer-torch-or-radio-runtime.svg";
import InFieldGallery from "../components/in-field-gallery";
import WowSolar from "../components/wowsolar";
import LightingSlider from "../components/lighting-slider";
import Slider from "react-slick";

const tableContainer = css`
  ${tw`overflow-x-scroll lg:overflow-visible`}
`;

const sliderOverride = css`
  & .slick-track {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 4px;
  }

  & .slick-slide {
    ${tw`mx-2`}
  }
`;

export default function ProductLightingAndPhoneCharging(props) {
  const svgSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Layout pageTitle="Lighting and Phone Charging">
      <HeroLightingAndPhoneCharging />
      <div tw="px-4 py-12 lg:px-0 md:py-12 lg:py-48">
        <div tw="lg:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-5">
          <SubHeader tw="font-sf-light mb-6 col-span-2">Overview</SubHeader>
          <div tw="col-span-3">
            <Text tw="mb-16 font-circular-book leading-normal">
              From entry-level kits to high-performance kits, our family of
              lighting and phone charging solutions can do it all. Our lighting
              systems are designed to provide more light points (up to eight),
              brighter lamps (up to 400 Lumens), bigger solar panels for more
              phone charging, and portable accessories like a torch or radio
              with an extra-large battery for long runtimes between charges.
              Moreover, every <WowSolar tw="text-px16 lg:text-px21" /> lighting
              kit allows a customer to upgrade to an Amped solar television in
              their home without having to replace their initially purchased
              investment.
            </Text>

            <div tw="grid-cols-3 gap-x-6 hidden lg:grid">
              <SvgCard
                icon={<SvgBrighterLamp css={[{ width: 96 }]} />}
                content={<div>More Light Points and Brighter Lamps</div>}
              />
              <SvgCard
                icon={<SvgPhoneCharging css={[{ width: 96 }]} />}
                content={<div>More Phone Charging</div>}
              />

              <SvgCard
                icon={<SvgLongerTorchOrRadioRuntime css={[{ width: 96 }]} />}
                content={<div>Longer Torch/ Radio Runtime</div>}
              />
            </div>
            <div css={[sliderOverride]} tw="lg:hidden">
              <Slider {...svgSliderSettings}>
                <SvgCard
                  tw="h-full"
                  icon={
                    <SvgBrighterLamp css={[{ width: 96, height: "100%" }]} />
                  }
                  content={<div>More Light Points and Brighter Lamps</div>}
                />
                <SvgCard
                  tw="h-full"
                  icon={
                    <SvgPhoneCharging css={[{ width: 96, height: "100%" }]} />
                  }
                  content={<div>More Phone Charging</div>}
                />

                <SvgCard
                  tw="h-full"
                  icon={
                    <SvgLongerTorchOrRadioRuntime
                      css={[{ width: 96, height: "100%" }]}
                    />
                  }
                  content={<div>Longer Torch/ Radio Runtime</div>}
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div tw="pb-12 px-4 lg:px-0 lg:pb-48">
        <div tw="lg:w-9/12 m-auto">
          <SubHeader tw="mb-16">Products</SubHeader>
        </div>
        <LightingSlider />
      </div>
      <div tw="bg-sitegray lg:py-48 py-12">
        <div tw="w-9/12 m-auto">
          <SubHeader tw="font-sf-light mb-24">Comparison</SubHeader>
          <div css={[tableContainer]}>
            <ComparisonTableLighting />
          </div>
        </div>
      </div>
      <div tw="py-12 lg:py-48">
        <div tw="px-4 lg:px-0 lg:w-9/12 m-auto">
          <SubHeader tw="mb-24 font-sf-light">Upgrades</SubHeader>
          <UpgradeSteps2 />
          <div tw="pt-16 lg:pt-36">
            <ExtraInfoLight
              caption={
                <div>
                  Every <WowSolar tw="text-px16 lg:text-px28" /> Lighting Kit
                  allows a customer to upgrade to an Amped Solar Television in
                  their home without having to replace their initial purchase
                  investment.
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div tw="bg-sitegray lg:py-48 py-12">
        <div tw="px-4 lg:px-0 lg:w-9/12 m-auto">
          <InFieldGallery />
        </div>
      </div>
      <BecomeDistributor />
    </Layout>
  );
}
