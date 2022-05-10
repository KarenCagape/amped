import * as React from "react";
import { graphql } from "gatsby";
import tw, { css } from "twin.macro";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Banner from "../components/heroes/invest";
import { SubHeader } from "../components/_/header";
import SliderButton from "../components/btn-slider-arrow";
import ReachOut from "../components/sections/reach-out";

const sliderOverride = css`
    & .slick-list,
    & .slick-track {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
    }

    & .slick-slide > div {
        height: 100%;
    }
`;

function ContentSlider({ sliderRef, contents = [], slidesToShow = 3, ...rest }) {
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider tw="lg:w-screen lg:-mx-8" {...sliderSettings} {...rest} ref={sliderRef}>
            {contents.map((content, idx) => (
                <div tw="min-h-full" key={idx}>
                    {content}
                </div>
            ))}
        </Slider>
    );
}

function DownloadableContent({ media, title, actions }) {
    return (
        <div tw="mx-8">
            <div
                css={[
                    {
                        minHeight: 250,
                    },
                ]}
            >
                {media}
            </div>
            <div>
                <div tw="text-px28 mt-8">{title}</div>
                <div tw="text-px18 text-secondary">{actions}</div>
            </div>
        </div>
    );
}

export default function InvestPage({ data }) {
    const slider3Ref = React.useRef();
    const { contentfulInvest } = data;
    const { name, heroBanner, resourcesHeading, resources, partnersHeading, partners, imageCopy, galleryHeading, gallery } = contentfulInvest;

    return (
        <Layout pageTitle={name}>
            {/* HERO BANNER */}
            <Banner {...heroBanner} />

            {/* INTRO SECTION */}
            {resourcesHeading?.copy?.childMarkdownRemark?.html ? (
                <div tw="px-4 container mx-auto pt-16 pb-0 lg:pb-16 lg:pt-48">
                    <div tw="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                        {resourcesHeading?.heading ? <SubHeader tw="col-span-2 leading-normal">{resourcesHeading?.heading}</SubHeader> : ""}
                        <div
                            tw="col-span-3 lg:text-px21"
                            css={[
                                css`
                                    p {
                                        ${tw`mb-6`}
                                    }
                                `,
                            ]}
                            dangerouslySetInnerHTML={{ __html: resourcesHeading?.copy?.childMarkdownRemark?.html }}
                        />
                    </div>
                </div>
            ) : (
                ""
            )}

            {/* RESOURCES SLIDER */}
            {resources?.length ? (
                <div tw="overflow-x-hidden">
                    <div tw="px-4 container mx-auto">
                        <div tw="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                            <div tw="text-2xl lg:text-px32 col-span-2"></div>
                            <div tw="col-span-3 relative" css={sliderOverride}>
                                <div
                                    tw="absolute"
                                    css={[
                                        {
                                            bottom: "20%",
                                            left: "-30%",
                                        },
                                    ]}
                                >
                                    <SliderButton
                                        onClick={() => {
                                            slider3Ref.current.slickNext();
                                        }}
                                    />
                                </div>
                                <ContentSlider
                                    tw="lg:w-screenx-65 w-[83.333%]"
                                    css={[
                                        css`
                                            @media (max-width: 480px) {
                                                .slick-list {
                                                    overflow: visible;
                                                }
                                            }
                                        `,
                                    ]}
                                    sliderRef={slider3Ref}
                                    contents={resources?.map(({ title, url, image }, idx) => (
                                        <DownloadableContent
                                            media={
                                                <div>
                                                    {image?.gatsbyImageData ? <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} /> : ""}
                                                </div>
                                            }
                                            title={<div dangerouslySetInnerHTML={{ __html: title?.childMarkdownRemark?.html }} />}
                                            actions={<a href={url}>Download Now</a>}
                                        />
                                    ))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}

            {/* PARTNERS */}
            <div tw="px-4 container mx-auto py-16 lg:py-48">
                <div tw="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    {partnersHeading?.heading ? <SubHeader tw="col-span-2 leading-normal">{partnersHeading?.heading}</SubHeader> : ""}
                    <div tw="col-span-3 lg:text-px21">
                        {partnersHeading?.copy?.childMarkdownRemark?.html ? (
                            <div dangerouslySetInnerHTML={{ __html: partnersHeading?.copy?.childMarkdownRemark?.html }} />
                        ) : (
                            ""
                        )}
                        <div tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between items-center">
                            {partners?.map(({ title, url, image }, idx) => (
                                <a key={idx} href={url} rel="noreferrer,nofollow">
                                    {image?.gatsbyImageData ? <GatsbyImage alt={image?.title} image={image?.gatsbyImageData} tw="w-[245px] mx-auto" /> : ""}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* IMAGE - COPY */}
            <div tw="bg-sitegray">
                <ReachOut {...imageCopy} />
            </div>

            {/* GALLERY */}
            {gallery?.length ? (
                <div tw="px-4 container mx-auto py-16 lg:py-48">
                    {galleryHeading ? (
                        <div tw="text-px21 lg:text-px54 text-center mb-10 lg:mb-32">
                            <div tw="break-all">{galleryHeading}</div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div tw="gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-4">
                        {gallery.map((image, idx) => (
                            <div key={idx}>
                                {image?.gatsbyImageData ? <GatsbyImage tw="w-full" image={image?.gatsbyImageData} alt={image?.title} /> : ""}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                ""
            )}
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulInvest(name: { eq: "Invest" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            resourcesHeading {
                ...HeadingCopy
            }
            resources {
                ...LinkedImage
            }
            partnersHeading {
                ...HeadingCopy
            }
            partners {
                ...LinkedImage
            }
            imageCopy {
                ...ImageCopy
            }
            galleryHeading
            gallery {
                ...Image
            }
        }
    }
`;
