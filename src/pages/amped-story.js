import * as React from "react";
import { graphql } from "gatsby";
import tw, { css } from "twin.macro";
import Layout from "../components/layout";
import Banner from "../components/sections/inner-banner";
import { GatsbyImage } from "gatsby-plugin-image";
import WowSolarPortraitLogo from "../assets/logo-wowsolar.svg";
import RichText from "../components/rich-text";

export default function AmpedStory({ data }) {
    const { contentfulAmpedStory } = data;
    const { name, heroBanner, logo, content, bottomHeading, signatures } = contentfulAmpedStory;

    return (
        <Layout pageTitle={name}>
            {/* BANNER */}
            <Banner {...heroBanner} />

            {/* CONTENT */}
            <div tw="container px-6 lg:px-4 mx-auto">
                <div tw="relative lg:w-7/12 mx-auto py-20 lg:py-32">
                    {/* LOGO */}
                    {logo?.gatsbyImageData ? (
                        <div tw="pb-14 lg:pb-24">
                            <GatsbyImage tw="w-[80%] lg:w-auto" image={logo?.gatsbyImageData} alt={logo?.title} />
                        </div>
                    ) : logo?.file?.url ? (
                        <div tw="pb-16 lg:pb-20">
                            <img tw="w-[80%] lg:w-auto" loading="lazy" width={logo?.width} height={logo?.height} src={logo?.file?.url} alt={logo?.title} />
                        </div>
                    ) : (
                        ""
                    )}

                    {/* RICH TEXT */}
                    <div tw="text-lg lg:text-px18 2xl:text-px21 text-default lg:mb-32 mb-16 mx-auto">
                        <RichText content={content} />
                    </div>

                    {/* SIGNATURES */}
                    <div tw="relative">
                        <div tw="text-2xl lg:text-px48 2xl:text-px54 text-default lg:mb-24 mb-10">
                            <div
                                tw="leading-tight"
                                css={[
                                    css`
                                        strong {
                                            ${tw`text-primary font-circular-bold`}
                                        }
                                    `,
                                ]}
                                dangerouslySetInnerHTML={{ __html: bottomHeading?.childMarkdownRemark?.html }}
                            />
                        </div>
                        <div tw="grid grid-cols-5 items-end">
                            <div tw="grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-4">
                                {signatures?.map(({ name, headshot, jobInfo, signature }, idx) => (
                                    <div tw="text-px18 lg:text-px18 2xl:text-px21 max-w-[75%] lg:max-w-full" key={idx}>
                                        <div tw="w-6/12 mb-4 lg:mb-12">
                                            <div tw="rounded-full bg-sitegray lg:hidden w-[90px] h-[90px] mb-4">
                                                {headshot?.gatsbyImageData ? (
                                                    <GatsbyImage tw="w-[90px] h-[90px]" image={headshot?.gatsbyImageData} alt={headshot?.title} />
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                            {signature?.gatsbyImageData ? (
                                                <GatsbyImage tw="w-full" image={signature?.gatsbyImageData} alt={signature?.title} />
                                            ) : (
                                                <img src={signature?.file?.url} alt={signature?.title} />
                                            )}
                                        </div>
                                        <div tw="flex justify-start items-center  gap-6 mb-8 lg:mb-0">
                                            <div tw="rounded-full bg-sitegray hidden lg:block">
                                                {headshot?.gatsbyImageData ? (
                                                    <GatsbyImage tw="w-[90px] h-[90px]" image={headshot?.gatsbyImageData} alt={headshot?.title} />
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                            <div>
                                                <div>{name}</div>
                                                <div tw="text-px14 lg:text-px16 text-secondary">{jobInfo}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div tw="flex justify-end items-start col-span-1 absolute right-0 top-0 lg:top-auto lg:bottom-0 w-[80px] lg:w-[120px]">
                                <WowSolarPortraitLogo tw="w-full h-[auto]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulAmpedStory(name: { eq: "Amped Story" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            logo {
                ...Image
            }
            content {
                raw
                references {
                    __typename
                    contentful_id
                    ...Image
                }
            }
            bottomHeading {
                childMarkdownRemark {
                    html
                }
            }
            signatures {
                ...PersonCard
            }
        }
    }
`;
