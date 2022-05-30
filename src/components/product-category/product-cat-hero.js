import * as React from "react";
import tw, { css } from "twin.macro";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

import useWindowSize from "../../helpers/window-size";
import Hero from "../hero";

const BackgroundSection = ({ className, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "bg-product-gradient.png" }) {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
                mobile: file(relativePath: { eq: "bg-product-gradient-mobile.png" }) {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        `
    );
    const windowSize = useWindowSize();
    const { desktop, mobile } = data;

    let imageGatsby = getImage(desktop);

    if (windowSize.width < 1024) {
        imageGatsby = getImage(mobile);
    }

    const bgImage = convertToBgImage(imageGatsby);

    return (
        <BackgroundImage Tag="section" className={className} {...bgImage} backgroundColor={`#040e18`}>
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

function ProductCategoryHero({ heading, subText, image }) {
    return (
        <StyledBackgroundSection>
            <Hero tw="!h-auto pb-16 lg:!h-screen">
                <Caption tw="lg:pr-16 w-full lg:w-[50%]">
                    {heading ? (
                        <Caption.Header tw="lg:mb-12">
                            <h1>{heading}</h1>
                        </Caption.Header>
                    ) : (
                        ""
                    )}
                    <Caption.Text tw="font-sf-light mt-6">
                        <div
                            tw="text-px16 lg:text-px28 2xl:text-px36 max-w-[83.333%] lg:max-w-none mx-auto"
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

export default ProductCategoryHero;
