import * as React from "react";
import "twin.macro";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import Hero from "../hero";
import StoryCaption from "../story-caption";

const BackgroundSection = ({ className, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "experience-become-distributor-hero.png" }) {
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

export function BecomeDistributor() {
    return (
        <StyledBackgroundSection>
            <Hero>
                <Caption tw="lg:w-7/12">
                    <StoryCaption tw="font-sf-light">
                        Amped looks to{" "}
                        <span tw="font-sf-bold" css={[{ color: "#FC4803" }]}>
                            build relationships so we can support
                        </span>{" "}
                        you every step of the way.
                    </StoryCaption>
                </Caption>
            </Hero>
        </StyledBackgroundSection>
    );
}

export default BecomeDistributor;
