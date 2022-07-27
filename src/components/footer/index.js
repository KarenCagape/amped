import * as React from "react";
import "twin.macro";
import LinkCategory from "./link-category";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { useForm } from "react-hook-form";

import Button from "../_/button";
import TextInput from "../text-input";

function CategorizedLink({ name = "", links = [] }) {
    if (!links.length) {
        return null;
    }

    return (
        <div tw="mb-12">
            <div tw="mb-8 lg:mb-16">
                <LinkCategory text={name} />
            </div>
            {links.map((link, idx) => {
                return (
                    <div tw="mb-4 lg:mb-9" key={idx}>
                        <Link tw="text-px14 lg:text-px16 text-white font-circular-book" to={link.path}>
                            {link.text}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export function Footer() {
    const data = useStaticQuery(graphql`
        query {
            contentfulGlobalSettings(name: { eq: "Amped" }) {
                footerLogo {
                    ...Image
                }
                footerNav {
                    name
                    url
                    subLinks {
                        ... on ContentfulNavLink {
                            label {
                                childMarkdownRemark {
                                    html
                                }
                            }
                            url
                        }
                    }
                }
                copyright {
                    childMarkdownRemark {
                        html
                    }
                }
                legalLinks {
                    label {
                        childMarkdownRemark {
                            html
                        }
                    }
                    url
                }
            }
        }
    `);
    const { contentfulGlobalSettings } = data;
    const { footerLogo, footerNav, copyright, legalLinks } = contentfulGlobalSettings;
    const [isMcSubmitted, setMcSubmitted] = React.useState(false);
    const [isAlertVisible, setIsAlertVisible] = React.useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        if (data?.email) {
            addToMailchimp(data.email).then((data) => {
                setMcSubmitted(data);
                setIsAlertVisible(true);
                setTimeout(() => {
                    setIsAlertVisible(false);
                    reset();
                }, 3000);
            });
        }
    };

    return (
        <div tw="p-4 lg:p-0 bg-default">
            <div tw="container px-4 mx-auto">
                <div tw="xl:flex justify-between pt-12 lg:pt-24 xl:pt-40">
                    <div tw="text-center lg:text-left lg:mb-0 text-center mb-8 flex-[1] xl:pr-8 lg:mb-16 xl:mb-0">
                        <Link tw="inline-block" to="/">
                            {footerLogo?.gatsbyImageData ? (
                                <GatsbyImage tw="w-full" image={footerLogo?.gatsbyImageData} alt={footerLogo?.title} />
                            ) : (
                                <img src={footerLogo?.file?.url} alt={footerLogo?.title} width={footerLogo?.width} height={footerLogo?.height} />
                            )}
                        </Link>
                    </div>
                    <div tw="xl:flex-[0 0 auto]">
                        <div tw="lg:flex lg:justify-end lg:gap-24 xl:gap-28">
                            {footerNav?.length
                                ? footerNav?.map(({ name, url, subLinks }, idx) => (
                                      <div key={idx}>
                                          <CategorizedLink
                                              name={<span tw="uppercase">{name}</span>}
                                              links={subLinks?.map((sub) => ({
                                                  text: sub?.label?.childMarkdownRemark?.html.replace(/<[^>]+>/g, ""),
                                                  path: sub?.url,
                                              }))}
                                          />
                                      </div>
                                  ))
                                : ""}
                        </div>
                        <div tw="px-10 py-10 bg-black bg-opacity-30 text-white my-10">
                            <form tw="" onSubmit={handleSubmit(onSubmit)}>
                                <div tw="text-px14 lg:text-px16 mb-2 lg:mb-4">
                                    Be the first to get the latest updates and special offers from Amped
                                </div>
                                <div tw="md:flex md:gap-8 mb-2 lg:justify-end items-end">
                                    <div tw="md:flex-1 mb-3 md:mb-0">
                                        <TextInput
                                            {...register("email")}
                                            required
                                            tw="w-full py-3 bg-charcoal-70 bg-opacity-10"
                                            placeholder="Enter you email"
                                        />
                                        {errors["email"] && (
                                            <small tw="text-[#FE3636]">{errors["email"]?.type === "required" && `Email is required`}</small>
                                        )}
                                    </div>
                                    <div tw="md:flex-[0 0 auto]">
                                        <Button tw="w-full lg:w-auto bg-white text-black">SUBSCRIBE</Button>
                                    </div>
                                </div>
                                {isMcSubmitted?.result === "success" && isAlertVisible ? (
                                    <div tw="bg-green-400 px-4 py-2 text-white">Form successfully submitted!</div>
                                ) : (
                                    ""
                                )}
                                {isMcSubmitted?.result === "error" && isAlertVisible ? (
                                    <div tw="bg-red-400 px-4 py-2 text-white">There was an error when submitting the form.</div>
                                ) : (
                                    ""
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div tw="py-12 flex flex-col lg:flex-row justify-between">
                        <div
                            tw="text-center lg:text-left text-px16 text-white font-circular-regular"
                            dangerouslySetInnerHTML={{ __html: copyright?.childMarkdownRemark?.html }}
                        />

                        <div tw="flex order-first gap-8 lg:gap-16 lg:order-last justify-center lg:justify-between items-center mb-12 lg:mb-0">
                            {legalLinks?.length
                                ? legalLinks?.map(({ label, url }, idx) => (
                                      <div key={idx}>
                                          <Link tw="text-px16 text-white font-circular-regular" to={url}>
                                              <span
                                                  tw="text-center lg:text-left text-px16 text-white font-circular-regular"
                                                  dangerouslySetInnerHTML={{ __html: label?.childMarkdownRemark?.html }}
                                              />
                                          </Link>
                                      </div>
                                  ))
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
