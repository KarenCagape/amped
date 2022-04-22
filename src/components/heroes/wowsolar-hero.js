import * as React from 'react';
import 'twin.macro';

import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BannerArrowDown from '../../assets/banner-arrow-down.svg';

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bg-gradient.png" }) {
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
    <BackgroundImage Tag="section" className={className} fluid={imageData}>
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

export function WowsolarHero({
  detailRef,
  wowsolar,
  bannerLogo,
  caption,
  image,
  ...rest
}) {
  return (
    <StyledBackgroundSection>
      <div tw="relative">
        <div
          tw="relative min-h-screen w-9/12 justify-between items-center mx-auto grid grid-cols-1 lg:grid-cols-2"
          {...rest}
        >
          <div>
            <div tw="mb-6 lg:mb-12 lg:block flex justify-center">
              {wowsolar}
            </div>
            <div tw="text-px24 text-center lg:text-left lg:text-px48 font-book lg:w-3/4">
              <span tw="leading-tight">{caption}</span>
            </div>
          </div>
          <div tw="order-first lg:order-last">{image}</div>
          <div
            tw="absolute"
            css={[
              {
                bottom: '-12%',
                left: '-12%',
              },
            ]}
          >
            {bannerLogo}
          </div>
          <button
            tw="absolute"
            css={[{ bottom: '5%', left: 0 }]}
            onClick={(e) => {
              if (!detailRef || !detailRef.current) {
                return;
              }

              detailRef.current.scrollIntoView();
            }}
          >
            <BannerArrowDown tw="hidden lg:block" />
          </button>
        </div>
      </div>
    </StyledBackgroundSection>
  );
}

export default WowsolarHero;
