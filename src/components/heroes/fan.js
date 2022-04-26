import * as React from "react";
import "twin.macro";
import { StaticImage, getImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { convertToBgImage } from "gbimage-bridge";

import Hero from "../hero";
import WowSolar from "../wowsolar";

const BackgroundSection = ({ className, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "banner-background-new.png" }) {
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

export function Fan() {
    return (
        <StyledBackgroundSection>
            <Hero>
                <Caption>
                    <Caption.Header>Fan</Caption.Header>
                    <Caption.Text>
                        <WowSolar tw="text-px16 lg:text-px36" model="FAN" /> is a solar powered cooling solution designed to provide 24-hour comfort
                        in any environment.
                    </Caption.Text>
                </Caption>
                <div tw="w-3/5">
                    <StaticImage loading="eager" placeholder="none" src="../../images/product-wowsolar_fan16120.png" />
                </div>
            </Hero>
        </StyledBackgroundSection>
    );
}

export default Fan;
