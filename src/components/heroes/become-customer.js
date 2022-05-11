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
                desktop: file(relativePath: { eq: "banner-customer_story.png" }) {
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
                <Caption tw="lg:w-7/12 px-4 lg:px-0">
                    <StoryCaption>
                        Our world is defined by our Amped looks to{" "}
                        <span tw="font-bold" css={[{ color: "#FC4803" }]}>
                            compassion to deliver a reliable solar experience
                        </span>{" "}
                        with no compromise
                    </StoryCaption>
                </Caption>
            </Hero>
        </StyledBackgroundSection>
    );
}

export default BecomeDistributor;
