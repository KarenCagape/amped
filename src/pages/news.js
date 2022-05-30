import * as React from "react";
import tw, { css } from "twin.macro";
import { graphql } from "gatsby";
import Slider from "react-slick";
import { useForm } from "react-hook-form";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Banner from "../components/heroes/news";
import SliderButton from "../components/btn-slider-arrow";
import ButtonForm from "../components/_/button";

function ContentSlider({ sliderRef, contents = [], slidesToShow = 2, ...rest }) {
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
        <Slider tw="w-[83.333%] lg:w-[65vw] lg:-mx-8" {...sliderSettings} {...rest} ref={sliderRef}>
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
        <div tw="mx-4 lg:mx-8">
            {media ? <div>{media}</div> : ""}
            <div>
                {title ? <div tw="text-px18 lg:text-px28 mt-6 lg:mt-8">{title}</div> : ""}
                {actions ? <div tw="text-px14 lg:text-px18 text-secondary mt-2">{actions}</div> : ""}
            </div>
        </div>
    );
}

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default function News({ data, navigate }) {
    const slider3Ref = React.useRef();
    const { contentfulNewsTemplate } = data;
    const { name, heroBanner, newsListingHeading, newsListing, newsletterHeading, newsletterFormTitle } = contentfulNewsTemplate;

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
            {/* BANNER */}
            <Banner {...heroBanner} />

            {/* NEWS LISTING */}
            {newsListing?.length ? (
                <div tw="py-16 lg:py-48 overflow-x-hidden bg-sitegray">
                    <div tw="px-4 container mx-auto">
                        <div tw="grid grid-cols-1 lg:grid-cols-5">
                            {newsListingHeading ? (
                                <div tw="text-2xl lg:text-px32 col-span-2 mb-8 lg:mb-0">
                                    <span tw="leading-tight">{newsListingHeading}</span>
                                </div>
                            ) : (
                                ""
                            )}
                            <div tw="col-span-3 relative">
                                {newsListing?.length > 2 ? (
                                    <div tw="absolute bottom-[20%] left-[-30%]">
                                        <SliderButton
                                            onClick={() => {
                                                slider3Ref.current.slickNext();
                                            }}
                                        />
                                    </div>
                                ) : (
                                    ""
                                )}
                                <ContentSlider
                                    sliderRef={slider3Ref}
                                    css={[
                                        css`
                                            .slick-list {
                                                ${tw`overflow-visible lg:overflow-hidden`}
                                            }
                                        `,
                                    ]}
                                    contents={newsListing?.map(({ title, url, image }, idx) => (
                                        <DownloadableContent
                                            key={idx}
                                            media={
                                                <div>
                                                    {image?.gatsbyImageData ? (
                                                        <GatsbyImage tw="w-full" image={image?.gatsbyImageData} alt={image?.title} />
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            }
                                            title={<div dangerouslySetInnerHTML={{ __html: title?.childMarkdownRemark?.html }} />}
                                            actions={
                                                url ? (
                                                    <a href={url} target="_blank" rel="noreferrer">
                                                        Read More
                                                    </a>
                                                ) : (
                                                    ""
                                                )
                                            }
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

            {/* NEWSLETTER */}
            <div tw="py-16 lg:py-48">
                <div tw="px-4 container mx-auto">
                    <div tw="grid grid-cols-1 lg:grid-cols-5">
                        {newsletterHeading?.heading ? (
                            <div tw="text-px32 font-circular-bold col-span-2 mb-4 lg:mb-0 pr-16">{newsletterHeading?.heading}</div>
                        ) : (
                            ""
                        )}
                        <div tw="col-span-3">
                            {newsletterFormTitle ? <div tw="mb-12">{newsletterFormTitle}</div> : ""}
                            <div tw="bg-sitegray p-12">
                                <div
                                    tw="lg:text-px18 2xl:text-px21 mb-8"
                                    dangerouslySetInnerHTML={{ __html: newsletterHeading?.copy?.childMarkdownRemark?.html }}
                                />
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    name={"subscribe-now"}
                                    method="POST"
                                    data-netlify
                                    data-netlify-honeypot="bot-field"
                                >
                                    <input type="hidden" {...register("form-name")} defaultValue={`subscribe-now`} />
                                    <div tw="lg:grid lg:grid-cols-5">
                                        <input
                                            {...register("email")}
                                            required
                                            tw="text-px16 col-span-3 p-4 w-full lg:w-auto mb-8 lg:mb-0"
                                            placeholder="Enter your email address"
                                        />
                                        <ButtonForm tw="col-span-2 lg:rounded-tl-none rounded-bl-none w-full lg:w-auto">SUBSCRIBE NOW</ButtonForm>
                                    </div>
                                    {errors["email"] && (
                                        <small tw="text-[#FE3636]">{errors["email"]?.type === "required" && `Email is required`}</small>
                                    )}
                                </form>
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
        contentfulNewsTemplate(name: { eq: "News" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            newsListingHeading
            newsListing {
                ...LinkedImage
            }
            newsletterHeading {
                ...HeadingCopy
            }
            newsletterFormTitle
        }
    }
`;
