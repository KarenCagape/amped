import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Hero from './hero';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';

const { Caption } = Hero;

export function PrimaryHero({ data }) {
  const { background, caption, heading } = data;
  const image = getImage(background);
  const bgImage = convertToBgImage(image);

  return (
    <div className="tae">
      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
        tw="h-screen w-full"
      >
        <Hero>
          <Caption>
            <Caption.Header tw="leading-none">
              <span>It’s time to</span>
              <br/>
              <span tw="font-bold text-primary font-sf-bold ">
                redefine what’s possible
              </span>
            </Caption.Header>
            <Caption.Text>
              City-like performance with off-grid efficiency. Solar products
              without compromise.
            </Caption.Text>
          </Caption>
        </Hero>
      </BackgroundImage>
    </div>
  );
}

export default PrimaryHero;
