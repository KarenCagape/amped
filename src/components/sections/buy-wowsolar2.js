import * as React from 'react';
import 'twin.macro';
import Section from '../section';
import Button from '../button';
import { StaticImage } from 'gatsby-plugin-image';

const { Content } = Section;

export function BuyWowSolar() {
  return (
    <Section>
      <Content>
        <div>
          <Content.Title tw="mb-16">
            Amped works with dozens of distributors in 23 countries.
          </Content.Title>
          <Button path="/action-buy-wowsolar" text="BUY WOWSOLAR" />
        </div>
        <div tw="lg:order-last order-first mb-4 lg:mb-0">
          <StaticImage
            alt=""
            loading="eager"
            placeholder="none"
            src="../../images/grow_business.png"
          />
        </div>
      </Content>
    </Section>
  );
}

export default BuyWowSolar;
