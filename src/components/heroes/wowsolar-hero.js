import * as React from "react";
import "twin.macro";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import BannerArrowDown from "../../assets/banner-arrow-down.svg";

const BackgroundSection = ({ className, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "bg-gradient.png" }) {
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
        <BackgroundImage Tag="section" className={className} {...bgImage}>
            {children}
        </BackgroundImage>
    );
};

export function WowsolarHero({ detailRef, wowsolar, bannerLogo, caption, image, ...rest }) {
    return (
        <BackgroundSection tw="w-full bg-center bg-no-repeat bg-cover bg-fixed">
            <div tw="relative">
                <div tw="container px-4 mx-auto">
                    <div tw="relative py-24 lg:min-h-screen lg:justify-between lg:items-center lg:grid lg:grid-cols-2" {...rest}>
                        <div tw="lg:order-last mb-4">{image}</div>
                        <div>
                            <div tw="mb-6 lg:mb-12 lg:block flex justify-center">{wowsolar}</div>
                            <div tw="text-px24 text-center lg:text-left lg:text-px48 font-book lg:w-3/4">
                                <span tw="leading-tight">{caption}</span>
                            </div>
                        </div>
                        <div
                            tw="absolute hidden lg:block"
                            css={[
                                {
                                    bottom: "-12%",
                                    left: "-12%",
                                },
                            ]}
                        >
                            {bannerLogo}
                        </div>
                        <button
                            tw="absolute transform -translate-x-1/2 translate-y-1/2 bottom-0 left-1/2 lg:bottom-[5%] lg:left-0 lg:transform-none"
                            onClick={(e) => {
                                if (!detailRef || !detailRef.current) {
                                    return;
                                }

                                detailRef.current.scrollIntoView();
                            }}
                        >
                            <BannerArrowDown tw="max-h-[51px] lg:max-h-0" />
                        </button>
                    </div>
                </div>
            </div>
        </BackgroundSection>
    );
}

export default WowsolarHero;
