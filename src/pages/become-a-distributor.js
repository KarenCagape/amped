import * as React from "react";
import { graphql } from "gatsby";
import { useForm } from "react-hook-form";

import Layout from "../components/layout";
import Banner from "../components/heroes/become-distributor";
import Button from "../components/_/button";
import TextCard from "../components/text-card";
import { GatsbyImage } from "gatsby-plugin-image";
import AboutInvestment from "../components/sections/about-investment";

import tw, { css } from "twin.macro";
import Slider from "react-slick";

import SliderButton from "../components/btn-slider-arrow";

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

function StorySliderContent({ media, caption, author }) {
    return (
        <div tw="mx-4 lg:mx-8 min-h-full flex flex-col justify-between">
            <div tw="w-full lg:h-80 ">{media}</div>
            <div tw="lg:text-px18 2xl:text-px21 p-8 my-4 lg:my-10 bg-sitegray rounded">{caption}</div>
            <div>{author}</div>
        </div>
    );
}

function StoryAuthor({ image, name, address }) {
    return (
        <div tw="flex items-center">
            <div tw="rounded-full w-16 h-16 lg:w-24 lg:h-24 bg-gray-200 mr-4">{image}</div>
            <div tw="flex-1">
                <div tw="lg:text-px28">{name}</div>
                <div tw="text-px16 text-secondary">{address}</div>
            </div>
        </div>
    );
}

function DownloadableContent({ media, title, actions }) {
    return (
        <div tw="mx-4 lg:mx-8">
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
                <div tw="font-circular-bold lg:font-circular-regular lg:text-px18 text-secondary mt-3">{actions}</div>
            </div>
        </div>
    );
}

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default function BecomeADistributor({ data, navigate }) {
    const { contentfulBecomeADistributor } = data;
    const {
        name,
        heroBanner,
        copyKeyStats,
        newsletterCopyImage,
        newsletterFormHeading,
        testimonialsHeading,
        testimonials,
        listCopy,
        resourcesHeading,
        resourcesGalleryHeading,
        resourcesGallery,
        imageCopy,
        galleryHeading,
        galleryItems,
    } = contentfulBecomeADistributor;
    const slider1Ref = React.useRef();
    const slider3Ref = React.useRef();
    const testimonialSlides = [...testimonials, ...testimonials];

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(data),
        })
            .then(() => navigate("/thank-you/"))
            .catch((error) => console.error(error));
    };

    return (
        <Layout pageTitle={name}>
            {/* BANNER HERO */}
            <Banner {...heroBanner} />

            {/* COPY WITH KEY STATS */}
            <div tw="px-4 container mx-auto py-16 lg:py-48">
                <div tw="grid grid-cols-1 lg:grid-cols-5 lg:mb-32">
                    {copyKeyStats?.heading ? (
                        <div tw="text-px24 lg:text-px48 2xl:text-px54 leading-tight col-span-2 mb-4 lg:mb-0">
                            <span>{copyKeyStats?.heading}</span>
                        </div>
                    ) : (
                        ""
                    )}
                    <div tw="col-span-3">
                        {copyKeyStats?.subText?.childMarkdownRemark?.html ? (
                            <div
                                tw="lg:text-px18 2xl:text-px21 mb-16"
                                css={[
                                    css`
                                        p {
                                            ${tw`mb-6`}
                                        }
                                    `,
                                ]}
                                dangerouslySetInnerHTML={{ __html: copyKeyStats?.subText.childMarkdownRemark.html }}
                            />
                        ) : (
                            ""
                        )}
                        {copyKeyStats?.keyStats?.length ? (
                            <div tw="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {copyKeyStats?.keyStats?.map(({ value, suffix, label }, idx) => (
                                    <TextCard
                                        key={idx}
                                        tw="bg-sitegray mx-[10%] lg:mx-0"
                                        value={
                                            <div>
                                                <span tw="text-primary">{value}</span>
                                                <sup tw="text-secondary">{suffix}</sup>
                                            </div>
                                        }
                                        label={label}
                                    />
                                ))}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>

            {/* NEWSLETTER */}
            <div tw="px-4 container mx-auto pt-10 pb-20 lg:py-16">
                <div tw="grid grid-cols-1 lg:grid-cols-5">
                    {newsletterCopyImage?.title ? (
                        <div tw="text-px18 lg:text-px32 font-circular-bold col-span-2 mb-8 lg:mb-0 lg:mr-8">{newsletterCopyImage?.title}</div>
                    ) : (
                        ""
                    )}
                    <div tw="col-span-3">
                        {newsletterCopyImage?.image?.gatsbyImageData ? (
                            <div tw="mb-8">
                                <GatsbyImage image={newsletterCopyImage?.image?.gatsbyImageData} alt={newsletterCopyImage?.image?.title} />
                            </div>
                        ) : (
                            ""
                        )}
                        {newsletterCopyImage?.subText?.childMarkdownRemark?.html ? (
                            <div
                                tw="lg:text-px18 2xl:text-px21 mb-10"
                                css={[
                                    css`
                                        p {
                                            ${tw`my-6`}
                                        }
                                    `,
                                ]}
                                dangerouslySetInnerHTML={{ __html: newsletterCopyImage?.subText.childMarkdownRemark.html }}
                            />
                        ) : (
                            ""
                        )}

                        <div tw="bg-sitegray p-12 text-center lg:text-left">
                            <div tw="text-px18 lg:text-px18 2xl:text-px21 mb-8">{newsletterFormHeading}</div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                name={"become-a-partner"}
                                method="POST"
                                data-netlify
                                data-netlify-honeypot="bot-field"
                            >
                                <input type="hidden" {...register("form-name")} defaultValue={`become-a-partner`} />
                                <div tw="lg:grid lg:grid-cols-5">
                                    <input
                                        {...register("email")}
                                        required
                                        tw="text-px16 col-span-3 p-4 w-full lg:w-auto mb-8 lg:mb-0"
                                        placeholder="Enter your email address"
                                    />
                                    <Button tw="col-span-2 lg:rounded-tl-none rounded-bl-none w-full lg:w-auto">BECOME A PARTNER</Button>
                                </div>
                                {errors["email"] && <small tw="text-[#FE3636]">{errors["email"]?.type === "required" && `Email is required`}</small>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* TESTIMONIALS */}
            <div tw="overflow-x-hidden py-10 lg:pt-0 lg:pb-48">
                <div tw="px-4 container m-auto">
                    <div tw="grid grid-cols-1 lg:grid-cols-5">
                        {testimonialsHeading ? (
                            <div tw="text-px18 lg:text-px28 2xl:text-px36 col-span-2 mb-10 lg:mb-0 font-circular-bold">{testimonialsHeading}</div>
                        ) : (
                            ""
                        )}
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
                                        slider1Ref.current.slickNext();
                                    }}
                                />
                            </div>
                            {testimonials ? (
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
                                    sliderRef={slider1Ref}
                                    contents={testimonialSlides?.map(({ name, quote, jobInfo, image, headshot }, idx) => (
                                        <StorySliderContent
                                            key={idx}
                                            media={
                                                <div tw="flex items-center justify-center lg:h-full">
                                                    <div tw="relative w-full h-full">
                                                        {image?.gatsbyImageData ? (
                                                            <GatsbyImage tw="max-h-full rounded" image={image?.gatsbyImageData} alt={image?.title} />
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>
                                                </div>
                                            }
                                            caption={<div dangerouslySetInnerHTML={{ __html: quote?.childMarkdownRemark?.html }} />}
                                            author={
                                                <StoryAuthor
                                                    image={
                                                        <div>
                                                            {headshot?.gatsbyImageData ? (
                                                                <GatsbyImage image={headshot?.gatsbyImageData} alt={headshot?.title} />
                                                            ) : (
                                                                ""
                                                            )}
                                                        </div>
                                                    }
                                                    name={name}
                                                    address={jobInfo}
                                                />
                                            }
                                        />
                                    ))}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* LIST COPY */}
            <div tw="bg-sitegray py-16 lg:py-48">
                <div tw="container px-4 mx-auto">
                    <div tw="grid grid-cols-1 lg:grid-cols-5">
                        <div tw="text-px18 lg:text-px32 font-circular-bold col-span-2 lg:pr-16 mb-8 lg:mb-0">{listCopy?.heading}</div>
                        <div tw="col-span-3">
                            {listCopy?.subText?.childMarkdownRemark?.html ? (
                                <div
                                    tw="lg:text-px18 2xl:text-px21 mb-16"
                                    css={[
                                        css`
                                            p {
                                                ${tw`mb-6`}
                                            }
                                        `,
                                    ]}
                                    dangerouslySetInnerHTML={{ __html: listCopy?.subText?.childMarkdownRemark?.html }}
                                />
                            ) : (
                                ""
                            )}
                            <div tw="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                                {listCopy?.keyStats?.map(({ value, suffix, label }, idx) => (
                                    <TextCard
                                        tw="p-4"
                                        key={idx}
                                        value={
                                            <div tw="text-left">
                                                <span tw="text-primary">{value}</span>
                                                <span tw="text-secondary">{suffix}</span>
                                            </div>
                                        }
                                        label={<div tw="text-left text-px14 lg:text-px16">{label}</div>}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RESOURCES SLIDER */}
            <div tw="py-16 pb-10 lg:py-48 overflow-x-hidden">
                <div tw="px-4 container mx-auto pb-16 lg:pb-32">
                    <div tw="grid grid-cols-1 lg:grid-cols-5 ">
                        <div tw="text-px18 lg:text-px48 2xl:text-px54 col-span-2 font-circular-bold lg:font-circular-regular mb-4 lg:mb-0">
                            {resourcesHeading?.heading}
                        </div>
                        {resourcesHeading?.copy?.childMarkdownRemark?.html ? (
                            <div
                                tw="lg:text-px18 2xl:text-px21 col-span-3"
                                dangerouslySetInnerHTML={{ __html: resourcesHeading?.copy?.childMarkdownRemark?.html }}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div tw="container px-4 mx-auto">
                    <div tw="grid grid-cols-1 lg:grid-cols-5">
                        <div tw="hidden lg:block text-px18 lg:text-2xl lg:text-px32 col-span-2 mb-8 lg:mb-0">
                            {resourcesGalleryHeading ? <span tw="leading-tight">{resourcesGalleryHeading}</span> : ""}
                        </div>
                        <div tw="col-span-3 relative">
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
                                sliderRef={slider3Ref}
                                // css={[{ width: "65vw !important" }]}
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
                                contents={resourcesGallery?.map(({ title, url, image }, idx) => (
                                    <DownloadableContent
                                        key={idx}
                                        media={
                                            <div tw="w-full flex">
                                                {image?.gatsbyImageData ? (
                                                    <GatsbyImage tw="w-full" image={image?.gatsbyImageData} alt={image?.title} />
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        }
                                        title={
                                            <div
                                                tw="text-lg lg:text-px28"
                                                css={[
                                                    css`
                                                        strong {
                                                            ${tw`font-circular-bold`}
                                                        }
                                                        em {
                                                            font-style: normal;
                                                            ${tw`font-circular-light`}
                                                        }
                                                        del {
                                                            text-decoration: none;
                                                            ${tw`font-kallisto font-bold`}
                                                        }
                                                    `,
                                                ]}
                                                dangerouslySetInnerHTML={{ __html: title?.childMarkdownRemark?.html }}
                                            />
                                        }
                                        actions={<a href={url}>Download Now</a>}
                                    />
                                ))}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* IMAGE - COPY */}
            <div tw="bg-sitegray">
                <AboutInvestment {...imageCopy} />
            </div>

            {/* GALLERY */}
            {galleryItems?.length ? (
                <div tw="px-4 container mx-auto py-16 lg:py-48">
                    <div tw="text-px21 lg:text-px48 2xl:text-px54 text-center mb-8 lg:mb-32">
                        {galleryHeading ? <div tw="break-all">{galleryHeading}</div> : ""}
                    </div>
                    <div tw="gap-2 lg:gap-8 grid grid-cols-2 lg:grid-cols-4">
                        {galleryItems.map((image, idx) => (
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
        contentfulBecomeADistributor(name: { eq: "Become a Distributor" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            copyKeyStats {
                ...CopyKeyStats
            }
            newsletterCopyImage {
                ...CardSimple
            }
            newsletterFormHeading
            testimonialsHeading
            testimonials {
                ...Testimonial
            }
            listCopy {
                ...CopyKeyStats
            }
            resourcesHeading {
                ...HeadingCopy
            }
            resourcesGalleryHeading
            resourcesGallery {
                ...LinkedImage
            }
            imageCopy {
                ...ImageCopy
            }
            galleryHeading
            galleryItems {
                ...Image
            }
        }
    }
`;
