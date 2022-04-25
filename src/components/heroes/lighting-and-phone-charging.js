import * as React from "react";
import tw, { css } from "twin.macro";
import Hero from "../hero";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import useWindowSize from "../../helpers/window-size";

const BackgroundSection = ({ className, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "banner-background-new.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                mobile: file(relativePath: { eq: "mobile-banner-solar_generato.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );
    const windowSize = useWindowSize();
    const { desktop, mobile } = data;

    let imageData = desktop?.childImageSharp?.fluid;

    if (windowSize.width < 1024) {
        imageData = mobile?.childImageSharp?.fluid;
    }

    return (
        <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`#040e18`}>
            {children}
        </BackgroundImage>
    );
};

const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

const { Caption } = Hero;

export function LightingAndPhoneCharging({ heading, subText, image }) {
    return (
        <StyledBackgroundSection>
            <Hero tw="!h-auto pb-16 lg:!h-screen">
                <Caption>
                    {heading ? <Caption.Header>{heading}</Caption.Header> : ""}
                    <Caption.Text tw="font-sf-light">
                        <div
                            tw="text-px16 lg:text-px36 max-w-[83.333%] lg:max-w-none mx-auto"
                            css={[
                                css`
                                    strong {
                                        ${tw`font-circular-bold`}
                                    }
                                    em {
                                        font-style: normal;
                                        ${tw`font-circular-light`}
                                    }
                                `,
                            ]}
                            dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }}
                        />
                    </Caption.Text>
                </Caption>
                <div tw="lg:w-3/5 mt-10 lg:mt-0">
                    <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} />
                </div>
            </Hero>
        </StyledBackgroundSection>
    );
}

export default LightingAndPhoneCharging;
