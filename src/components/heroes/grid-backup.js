import * as React from "react";
import "twin.macro";
import { StaticImage, getImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { convertToBgImage } from "gbimage-bridge";

import Hero from "../hero";

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

export function GridBackup() {
    return (
        <StyledBackgroundSection>
            <Hero>
                <Caption>
                    <Caption.Header tw="font-sf-light">Solar Generator</Caption.Header>
                    <Caption.Text tw="text-px36">
                        Amped’s ground-breaking solar generator delivers uninterrupted power for a price that pays back within a year.
                    </Caption.Text>
                </Caption>
                <div tw="w-3/5">
                    <StaticImage placeholder="none" loading="eager" src="../../images/img-solar-generator-new.png" />
                </div>
            </Hero>
        </StyledBackgroundSection>
    );
}

export default GridBackup;
