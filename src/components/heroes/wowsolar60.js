import * as React from "react";
import tw from "twin.macro";
import Hero from "../hero";
import { StaticImage } from "gatsby-plugin-image";

const { Caption } = Hero;

export function WowSolar60() {
  return (
    <Hero bgColor="">
      <Caption>
        <Caption.Header>Lighting and Phone Charging</Caption.Header>
        <Caption.Text>
          <span tw="font-bold">WOW</span>SOLAR &trade; is Amped’s premium
          lighting kit.
        </Caption.Text>
      </Caption>
    </Hero>
  );
}

export default LightingAndPhoneCharging;
