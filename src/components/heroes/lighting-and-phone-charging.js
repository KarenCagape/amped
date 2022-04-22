import * as React from 'react';
import 'twin.macro';
import Hero from '../hero';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import WowSolar from '../wowsolar';

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "banner-background-new.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const { Caption } = Hero;

export function LightingAndPhoneCharging() {
  return (
    <StyledBackgroundSection>
      <Hero>
        <Caption>
          <Caption.Header>Lighting and Phone Charging</Caption.Header>
          <Caption.Text tw="font-sf-light">
            <WowSolar tw="text-px16 lg:text-px36" /> is Amped’s premium lighting
            kit.
          </Caption.Text>
        </Caption>
        <div tw="w-3/5">
          <StaticImage
            loading="eager"
            placeholder="none"
            src="../../images/banner-lights-and-charging-new.png"
          />
        </div>
      </Hero>
    </StyledBackgroundSection>
  );
}

export default LightingAndPhoneCharging;
