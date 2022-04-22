import * as React from 'react';
import styled from 'styled-components';
import 'twin.macro';
import Hero from '../hero';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import _ from 'lodash';

const { Caption } = Hero;

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "banner-home-new.png" }) {
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
  background-color: white;
`;

export function PrimaryHero(props) {
  return (
    <div>
      <StyledBackgroundSection>
        <Hero>
          <Caption>
            <Caption.Header>
              <div>It’s time to</div>
              <div tw="text-primary font-sf-bold">redefine what’s possible</div>
            </Caption.Header>
            <Caption.Text>
              City-like performance with off-grid efficiency. Solar products
              without compromise.
            </Caption.Text>
          </Caption>
        </Hero>
      </StyledBackgroundSection>
    </div>
  );
}

export default PrimaryHero;
