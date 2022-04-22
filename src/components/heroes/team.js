import * as React from 'react';
import 'twin.macro';
import Hero from '../hero';
import StoryCaption from '../story-caption';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "banner-team.jpg" }) {
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

export function Team() {
  return (
    <StyledBackgroundSection>
      <Hero>
        <Caption tw="lg:w-7/12">
          <StoryCaption>
            We{' '}
            <span tw="font-bold" css={[{ color: '#FC4803' }]}>
              specialize in solar power{' '}
            </span>
            electronics and design for extreme affordability.
          </StoryCaption>
        </Caption>
      </Hero>
    </StyledBackgroundSection>
  );
}

export default Team;
