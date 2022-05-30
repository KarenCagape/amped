import * as React from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Banner from "../components/heroes/team";
import Button from "../components/button";
import Brands from "../components/sections/brands";

function EmployeeCard({ avatar, name, position }) {
    return (
        <div tw="flex flex-col items-center justify-center">
            <div tw="mb-6 text-center">{avatar}</div>
            <div tw="text-center text-px18 2xl:text-px21 mb-1">{name}</div>
            <div tw="text-secondary text-px16 lg:text-px16 text-center">{position}</div>
        </div>
    );
}

export default function AmpedStory({ data }) {
    const { contentfulOurTeam } = data;
    const { name, heroBanner, introSection, teams, imageCopy, partnersHeading, partners } = contentfulOurTeam;

    return (
        <Layout pageTitle={name}>
            {/* BANNER */}
            <Banner {...heroBanner} />

            {/* TEAMS */}
            <div tw="py-16 lg:py-48">
                <div tw="px-4 container mx-auto">
                    <div tw="grid grid-cols-1 lg:grid-cols-5 mb-20 lg:mb-64">
                        {introSection?.heading ? <div tw="col-span-2 text-px24 lg:text-px48 2xl:text-px54 mb-4 lg:mb-0">{introSection?.heading}</div> : ""}
                        {introSection?.copy?.childMarkdownRemark?.html ? (
                            <div tw="col-span-3 lg:text-px18 2xl:text-px21" dangerouslySetInnerHTML={{ __html: introSection?.copy?.childMarkdownRemark?.html }} />
                        ) : (
                            ""
                        )}
                    </div>
                    {teams?.map(({ label, members }, idx) => (
                        <div key={idx} tw="grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-48">
                            {label ? <div tw="col-span-2 text-px18 lg:text-px32 font-circular-bold mb-10 lg:mb-0">{label}</div> : ""}
                            <div tw="col-span-3 grid lg:grid-cols-3 gap-x-8 gap-y-16" css={[idx > 0 ? tw`grid-cols-2` : tw`grid-cols-1`]}>
                                {members?.map(({ name, headshot, jobInfo }, idx2) => (
                                    <EmployeeCard
                                        key={idx2}
                                        avatar={
                                            headshot?.gatsbyImageData ? (
                                                <GatsbyImage
                                                    tw="max-w-full lg:w-[128px] lg:h-[128px]"
                                                    css={[idx > 0 ? tw`w-[106px] h-[106px]` : tw`w-[196px] h-[196px]`]}
                                                    image={headshot?.gatsbyImageData}
                                                    alt={headshot?.title}
                                                />
                                            ) : (
                                                ""
                                            )
                                        }
                                        name={name}
                                        position={jobInfo}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* IMAGE - COPY */}
            <div tw="py-32 lg:py-48 bg-sitegray">
                <div tw="px-4 container mx-auto">
                    <div tw="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div tw="lg:pr-32">
                            {imageCopy?.image?.gatsbyImageData ? (
                                <GatsbyImage image={imageCopy?.image?.gatsbyImageData} alt={imageCopy?.image?.title} />
                            ) : (
                                <img src={imageCopy?.image?.file?.url} alt={imageCopy?.image?.title} />
                            )}
                        </div>
                        <div>
                            {imageCopy?.heading?.childMarkdownRemark?.html ? (
                                <div tw="text-px24 lg:text-px48 2xl:text-px54 mb-4 lg:mb-8">
                                    <div tw="leading-tight" dangerouslySetInnerHTML={{ __html: imageCopy?.heading?.childMarkdownRemark?.html }} />
                                </div>
                            ) : (
                                ""
                            )}
                            {imageCopy?.subText?.childMarkdownRemark?.html ? (
                                <div
                                    tw="lg:text-px18 2xl:text-px21 mb-8 lg:mb-16"
                                    dangerouslySetInnerHTML={{ __html: imageCopy?.subText?.childMarkdownRemark?.html }}
                                />
                            ) : (
                                ""
                            )}
                            {imageCopy?.cta?.url ? <Button path={imageCopy?.cta?.url} text={imageCopy?.cta?.title}></Button> : ""}
                        </div>
                    </div>
                </div>
            </div>

            {/* PARTNERS */}
            <div tw="py-16 lg:py-48">
                {partnersHeading ? <div tw="px-4 container mx-auto text-px21 lg:text-px28 text-center mb-8 lg:mb-0">{partnersHeading}</div> : ""}
                <div>
                    <Brands logos={partners} />
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulOurTeam(name: { eq: "Our Team" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            introSection {
                ...HeadingCopy
            }
            teams {
                ...Team
            }
            imageCopy {
                ...ImageCopy
            }
            partnersHeading
            partners {
                ...LinkedImage
            }
        }
    }
`;
