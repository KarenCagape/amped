import * as React from "react";
import tw, { css } from "twin.macro";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import useWindowSize from "../../helpers/window-size";

import Hero from "../hero";
import StoryCaption from "../story-caption";

const BackgroundSection = ({ image, imageMobile, className, children }) => {
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
`;

const { Caption } = Hero;

export function BecomeDistributor({ heading, image, imageMobile }) {
    return (
        <StyledBackgroundSection image={image} imageMobile={imageMobile}>
            <Hero>
                <Caption tw="lg:w-7/12 px-4 lg:px-0">
                    <StoryCaption tw="font-sf-light">
                        {heading?.childMarkdownRemark?.html ? (
                            <div
                                tw="text-px28 lg:text-6xl"
                                css={[
                                    css`
                                        strong {
                                            ${tw`text-primary font-sf-bold`}
                                        }
                                    `,
                                ]}
                                dangerouslySetInnerHTML={{ __html: heading.childMarkdownRemark.html }}
                            />
                        ) : (
                            ""
                        )}
                    </StoryCaption>
                </Caption>
            </Hero>
        </StyledBackgroundSection>
    );
}

export default BecomeDistributor;
