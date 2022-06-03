import * as React from "react";
import "twin.macro";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import useWindowSize from "../../helpers/window-size";

import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import BannerArrowDown from "../../assets/banner-arrow-down.svg";

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

function ProductHero({ detailRef, wowsolar, bannerLogo, caption, image, ...rest }) {
    return (
        <BackgroundSection tw="w-full bg-center bg-no-repeat bg-cover bg-fixed">
            <div tw="relative">
                <div tw="container px-4 mx-auto">
                    <div tw="relative py-24 lg:min-h-screen lg:justify-between lg:items-center lg:grid lg:grid-cols-2" {...rest}>
                        <div tw="lg:order-last mb-4">{image}</div>
                        <div>
                            <div tw="mb-6 lg:mb-12 lg:block flex justify-center">{wowsolar}</div>
                            <div tw="text-px24 text-center lg:text-left lg:text-px36 2xl:text-px48 font-book lg:w-3/4">
                                <span tw="leading-tight">{caption}</span>
                            </div>
                        </div>
                        <div
                            tw="absolute hidden xl:block max-w-[7%]"
                            css={[
                                {
                                    bottom: "-12%",
                                    left: "-8%",
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
                            <BannerArrowDown tw="max-h-[51px] lg:max-h-full" />
                        </button>
                    </div>
                </div>
            </div>
        </BackgroundSection>
    );
}

export default ProductHero;
