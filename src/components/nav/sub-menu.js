import * as React from 'react';
import 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import SubMenuGroup from './sub-menu-group';
import WowSolarLink from './wowsolar-link';
import HeaderLink from './header-link';

export function SubMenu({ ...rest }) {
  return (
    <div tw="absolute z-20 w-full left-0 top-full bg-white" {...rest}>
      <div tw="w-11/12 mx-auto py-24 grid grid-cols-4 gap-12">
        <SubMenuGroup
          tw="border-r-2 border-sitegray"
          image={
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../../images/slider-lights-and-charging.png"
            />
          }
          links={
            <>
              <HeaderLink
                path="/product-lighting-and-phone-charging"
                text={
                  <>
                    <div>Lighting and </div>
                    Phone Charging
                  </>
                }
              />
              <WowSolarLink path="/product-wowsolar60" number={60} />
              <WowSolarLink path="/product-wowsolar100" number={100} />
              <WowSolarLink path="/product-wowsolar400" number={400} />
            </>
          }
        />
        <SubMenuGroup
          tw="border-r-2 border-sitegray"
          image={
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../../images/slider-television.png"
            />
          }
          links={
            <>
              <HeaderLink path="/product-television" text="Television" />
              <WowSolarLink path="/product-wowsolartv24100" number="TV24100" />
              <WowSolarLink path="/product-wowsolartv32120" number="TV32120" />
            </>
          }
        />
        <SubMenuGroup
          tw="border-r-2 border-sitegray"
          image={
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../../images/product-fan.png"
            />
          }
          links={
            <>
              <HeaderLink path="/product-fan" text="Fan" />
              <WowSolarLink
                path="/product-wowsolarfan16100"
                number="FAN16100"
              />
              <WowSolarLink
                path="/product-wowsolarfan16120"
                number="FAN16120"
              />
            </>
          }
        />
        <SubMenuGroup
          image={
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../../images/img-solar-generator.png"
            />
          }
          links={
            <>
              <HeaderLink path="/product-grid-backup" text="Solar Generator" />
              <div tw="text-px16 font-kallisto font-bold ">
                POWER HUB{' '}
                <span tw="ml-4 text-px12 rounded bg-sky-gray px-4 py-1 text-white">
                  Coming Soon
                </span>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}

export default SubMenu;
