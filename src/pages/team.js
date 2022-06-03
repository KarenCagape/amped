import * as React from "react";
import "twin.macro";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Banner from "../components/sections/inner-banner";
import OverviewKeyStats from "../components/become-a/overview-keystats";
import ImageCopy from "../components/become-a/image-copy";
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

            {/* INTRO SECTION */}
            <OverviewKeyStats heading={introSection?.heading} subText={introSection?.copy} tw="pb-10" />

            {/* TEAMS */}
            <div tw="lg:pt-10">
                <div tw="px-4 container mx-auto">
                    {teams?.map(({ label, members }, idx) => (
                        <div key={idx} tw="grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-48">
                            {label ? <div tw="col-span-2 text-px18 lg:text-px32 font-circular-bold mb-10 lg:mb-0">{label}</div> : ""}
                            <div tw="col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                                {members?.map(({ name, headshot, jobInfo }, idx2) => (
                                    <EmployeeCard
                                        key={idx2}
                                        avatar={
                                            headshot?.gatsbyImageData ? (
                                                <GatsbyImage
                                                    tw="max-w-full w-[106px] h-[106px] lg:w-[128px] lg:h-[128px]"
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
            <div tw="bg-sitegray">
                <ImageCopy {...imageCopy} reverse={true} />
            </div>

            {/* PARTNERS */}
            <div tw="py-14 lg:py-32">
                {partnersHeading ? <div tw="px-4 container mx-auto text-px21 2xl:text-px28 text-center mb-8 lg:mb-0">{partnersHeading}</div> : ""}
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
