import * as React from "react";
import styled from "styled-components";
import tw, { css } from "twin.macro";
import Hero from "../hero";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import useWindowSize from "../../helpers/window-size";

const { Caption } = Hero;

const BackgroundSection = ({ className, children, image, imageMobile }) => {
    const windowSize = useWindowSize();
    let imageGatsby = getImage(image);

    if (windowSize.width < 1024) {
        imageGatsby = getImage(imageMobile);
    }

    const bgImage = convertToBgImage(imageGatsby);

    return (
        <BackgroundImage Tag="section" className={className} {...bgImage} preserveStackingContext backgroundColor={`#040e18`}>
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
    z-index: 1;
`;

export function PrimaryHero({ heading, subText, image, imageMobile }) {
    return (
        <div>
            <StyledBackgroundSection image={image} imageMobile={imageMobile}>
                <Hero>
                    <Caption>
                        <Caption.Header
                            css={[
                                css`
                                    strong {
                                        ${tw`text-primary font-sf-bold`}
                                    }
                                `,
                            ]}
                        >
                            <div tw="leading-tight" dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }} />
                        </Caption.Header>
                        <Caption.Text tw="pt-4 lg:pt-6 lg:pb-10">
                            <div dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }} />
                        </Caption.Text>
                    </Caption>
                </Hero>
            </StyledBackgroundSection>
        </div>
    );
}

export default PrimaryHero;
