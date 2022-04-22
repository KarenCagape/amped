import * as React from 'react';
import 'twin.macro';

import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "vision-new.png" }) {
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
  height: 30vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export function Vision() {
  return (
    <StyledBackgroundSection>
      <div tw="h-full font-circular-bold text-px28 lg:text-px36 flex justify-center items-center text-center">
        <div>
          <span tw="leading-tight">Amped</span>{' '}
          <span tw="leading-tight font-circular-light">Innovation,</span>{' '}
          <span tw="text-primary leading-tight">Redefining Solar</span>
        </div>
      </div>
    </StyledBackgroundSection>
  );
}

export default Vision;
