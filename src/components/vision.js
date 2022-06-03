import * as React from "react";
import tw, { css } from "twin.macro";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import useWindowSize from "../helpers/window-size";

import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

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
    height: 30vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export function Vision() {
    const data = useStaticQuery(graphql`
        query {
            contentfulGlobalSettings(name: { eq: "Amped" }) {
                footerBanner {
                    ...ImageCopy
                }
            }
        }
    `);
    const { contentfulGlobalSettings } = data;
    const { footerBanner } = contentfulGlobalSettings;
    const { heading, image, imageMobile } = footerBanner;
    return (
        <StyledBackgroundSection image={image} imageMobile={imageMobile}>
            <div tw="container px-4 mx-auto h-full font-circular-bold text-px28 2xl:text-px36 flex justify-center items-center text-center">
                <div>
                    <div
                        tw="leading-tight font-circular-light"
                        css={[
                            css`
                                strong {
                                    ${tw`font-circular-bold`}
                                }
                                em {
                                    font-style: normal;
                                    ${tw`font-circular-bold text-primary`}
                                }
                            `,
                        ]}
                        dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }}
                    />
                </div>
            </div>
        </StyledBackgroundSection>
    );
}

export default Vision;
