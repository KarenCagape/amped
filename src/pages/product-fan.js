import * as React from 'react';
import 'twin.macro';
import Layout from '../components/layout';
import Banner from '../components/heroes/fan';
import { SubHeader } from '../components/_/header';
import WowSolar from '../components/wowsolar';
import SvgCard from '../components/svg-card';

import { Text } from '../components/_/text';
import ProductSlider3 from '../components/product-slider3';
import ComparisonTableFan from '../components/comparison-fan';
import ExtraInfoLight from '../components/extra-info-light';
import InTheFieldGallery from '../components/in-field-gallery';
import BecomeDistributor2 from '../components/sections/become-distributor2';
import SvgAirFlow from '../assets/ico-high_speed_airflow.svg';
import SvgLongerFan from '../assets/ico-fan_longer_runtimes.svg';
import SvgAdvancedMotorDesign from '../assets/ico-advanced_motor_design.svg';

export default function ProductFan() {
  return (
    <Layout pageTitle="Fan">
      <Banner />
      <div tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="lg:w-9/12 m-auto grid lg:grid-cols-5 grid-cols-1">
          <SubHeader tw="col-span-2 mb-8 lg:mb-0">Overview</SubHeader>
          <div tw="text-lg lg:text-px21 col-span-3">
            <Text tw="mb-16">
              The <WowSolar tw="text-px16 lg:text-px21" model={'FAN'} /> is a
              premium cooling solution powered by a high-efficiency brushless DC
              motor that maximizes the power from the sun. Every{' '}
              <WowSolar tw="text-px16 lg:text-px21" /> Fan kit comes with an
              energy-efficient 16” pedestal fan that operates between 9W to 11W
              depending on the airflow speed selected. The height of the fan can
              be adjusted to fit the room. Using an optional 7-meter extension
              cable enables further reach of the fan to other rooms.
            </Text>
            <div tw="grid lg:grid-cols-3 gap-8 grid-cols-1">
              <SvgCard
                icon={<SvgAirFlow css={[{ width: 96 }]} />}
                content={<span>High Speed Airflow</span>}
              />
              <SvgCard
                icon={<SvgLongerFan css={[{ width: 96 }]} />}
                content={<span>Advanced Motor Design</span>}
              />
              <SvgCard
                icon={<SvgAdvancedMotorDesign css={[{ width: 96 }]} />}
                content={<span>Longer Runtimes</span>}
              />
            </div>
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 lg:pb-48 pb-16">
        <div tw="lg:w-9/12 m-auto">
          <SubHeader tw="mb-8 lg:mb-16">Products</SubHeader>
        </div>
        <ProductSlider3 />
      </div>
      <div tw="bg-sitegray lg:py-48 py-16 px-4 lg:px-0">
        <div tw="lg:w-9/12 m-auto">
          <SubHeader tw="mb-8">Comparison</SubHeader>
          <div tw="overflow-x-scroll lg:overflow-x-auto">
            <ComparisonTableFan />
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 lg:py-48 py-16">
        <div tw="lg:w-9/12 mx-auto">
          <ExtraInfoLight
            caption={
              <div>
                Every <WowSolar tw="text-px16 lg:text-px21" model="FAN" /> has
                available battery upgrades for longer runtimes between charges.
                Both configurations include a 40W solar panel and USB phone
                charging cable
              </div>
            }
          />
        </div>
      </div>
      <div tw="px-4 lg:px-0 bg-sitegray lg:py-48 py-16">
        <div tw="lg:w-9/12 m-auto">
          <InTheFieldGallery />
        </div>
      </div>
      <div>
        <BecomeDistributor2 />
      </div>
    </Layout>
  );
}
