import * as React from "react";
import "twin.macro";
import Hero from "../hero";

import StoryCaption from "../story-caption";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

const BackgroundSection = ({ className, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "banner-news.png" }) {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        `
    );

    const imageGatsby = getImage(data.desktop);
    const bgImage = convertToBgImage(imageGatsby);

    return (
        <BackgroundImage Tag="section" className={className} {...bgImage} backgroundColor={`#040e18`}>
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

export function AmpedStory() {
    return (
        <StyledBackgroundSection>
            <Hero>
                <Caption tw="lg:w-7/12 px-4 lg:px-0">
                    <StoryCaption>
                        Follow the Amped mission and story as we
                        <span tw="font-bold" css={[{ color: "#FC4803" }]}>
                            continue to grow our impact
                        </span>{" "}
                        whilst redefining solar
                    </StoryCaption>
                </Caption>
            </Hero>
        </StyledBackgroundSection>
    );
}

export default AmpedStory;
