import * as React from 'react';
import 'twin.macro';
import Layout from '../components/layout';
import Television from '../components/heroes/television';
import { SubHeader } from '../components/_/header';
import WowSolar from '../components/wowsolar';
import SvgCard from '../components/svg-card';
import styled from 'styled-components';

import SvgOnGrid from '../assets/ico-on_grid.svg';
import SvgLongerPlay from '../assets/ico-longer_play.svg';
import SvgIntelligent from '../assets/ico-intelligent.svg';
import ProductSlider2 from '../components/product-slider2';
import TelevisionComparison from '../components/television-comparison';
import ExtraInfoLight from '../components/extra-info-light';
import InTheFieldGallery from '../components/in-field-gallery';
import BecomeDistributor2 from '../components/sections/become-distributor2';

export default function ProductTelevision() {
  return (
    <Layout pageTitle="Television">
      <Television />
      <div tw="py-16 lg:py-48 px-4 lg:px-0">
        <div tw="lg:w-9/12 m-auto grid lg:grid-cols-5 grid-cols-1">
          <SubHeader tw="col-span-2  mb-8 lg:mb-0 font-sf-light">
            Overview
          </SubHeader>
          <div tw="text-px16 lg:text-px21 col-span-3">
            <div tw="mb-16">
              The <WowSolar tw="text-px16 lg:text-px21" model={'TV'} /> system
              has the brightness of a TV in the city but with the energy
              efficiency needed for off-grid living, allowing customers to enjoy
              their TV anytime and anywhere, including outdoors. Business owners
              can display the TV in a restaurant or small shop. Our TV includes
              Amped Intelligent Power Control, Appliance Security, and Appliance
              PAYGO. These exclusive Amped features set the{' '}
              <WowSolar tw="text-px16 lg:text-px21" model={'TV'} /> system apart
              from other 12V DC TVs, making it the industry’s first true Solar
              TV. With so many features packed into one system, the{' '}
              <WowSolar tw="text-px16 lg:text-px21" model={'TV'} /> is a must
              have for viewing your favorite football team or TV show.
            </div>

            <div tw="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <SvgCard
                icon={<SvgOnGrid css={[{ width: 96 }]} />}
                content={<span>On-Grid Like Brightness</span>}
              />
              <SvgCard
                icon={<SvgLongerPlay css={[{ width: 96 }]} />}
                content={<span>Longer Runtimes</span>}
              />
              <SvgCard
                icon={<SvgIntelligent css={[{ width: 96 }]} />}
                content={<span>Intelligent Security</span>}
              />
            </div>
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 pb-16 lg:pb-48">
        <div tw="lg:w-9/12 mx-auto">
          <SubHeader tw="mb-8 lg:mb-16">Products</SubHeader>
        </div>
        <ProductSlider2 />
      </div>
      <div tw="bg-sitegray lg:py-48 py-16 px-4 lg:px-0">
        <div tw="lg:w-9/12 mx-auto">
          <SubHeader tw="lg:mb-24 mb-8">Comparison</SubHeader>
          <div tw="overflow-hidden">
            <TelevisionComparison />
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 py-16 lg:py-48 lg:w-9/12 mx-auto">
        <ExtraInfoLight
          caption={
            <div>
              Every <WowSolar tw="text-px16 lg:text-px21" model="TV" /> has
              available battery upgrades for longer runtimes between charges.
              Both configurations include a 40W solar panel and USB phone
              charging cable
            </div>
          }
        />
      </div>
      <div tw="bg-sitegray lg:py-48 py-16">
        <div tw="w-9/12 mx-auto">
          <InTheFieldGallery />
        </div>
      </div>
      <div>
        <BecomeDistributor2 />
      </div>
    </Layout>
  );
}
