import * as React from "react";
import "twin.macro";
import LinkCategory from "./link-category";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

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

    return (
        <div tw="p-4 lg:p-0 bg-default">
            <div tw="container px-4 mx-auto">
                <div tw="xl:flex justify-between pt-12 lg:pt-24 xl:pt-40">
                    <div tw="text-center lg:text-left lg:mb-0 text-center mb-8 flex-[0 0 auto] xl:pr-8 lg:mb-16 xl:mb-0">
                        <Link tw="inline-block" to="/">
                            {footerLogo?.gatsbyImageData ? (
                                <GatsbyImage tw="w-full" image={footerLogo?.gatsbyImageData} alt={footerLogo?.title} />
                            ) : (
                                <img src={footerLogo?.file?.url} alt={footerLogo?.title} width={footerLogo?.width} height={footerLogo?.height} />
                            )}
                        </Link>
                    </div>
                    <div tw="lg:flex justify-between xl:flex-[1] lg:gap-6">
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
