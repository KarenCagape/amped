import React from "react";
import { graphql } from "gatsby";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import _ from "lodash";

function Submenu({ refs, sections }) {
    function handleClick(e, idx) {
        e.preventDefault();
        refs[idx]?.current.scrollIntoView();
    }

    return (
        <div tw="hidden lg:block overflow-auto bg-white sticky top-20 z-10">
            <div tw="container px-4 mx-auto">
                <ul tw="py-8 text-px16 flex font-circular-book items-center justify-between">
                    {sections?.map(({ heading }, idx) => (
                        <React.Fragment key={idx}>
                            <li>
                                <a
                                    href="#"
                                    tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
                                    onClick={(e) => handleClick(e, idx)}
                                    dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }}
                                />
                            </li>
                            {idx < sections.length - 1 ? (
                                <li>
                                    <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
                                </li>
                            ) : (
                                ""
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Innovation({ data }) {
    const { contentfulInnovationsTemplate } = data;
    const { sections, gallery } = contentfulInnovationsTemplate;
    const refs = sections.map(() => React.createRef());

    return (
        <Layout pageTitle="Innovations">
            <Submenu refs={refs} sections={sections} />

            {/* IMAGE COPY SECTIONS */}
            {sections?.length
                ? sections.map(({ heading, subText, image }, idx) => (
                      <div
                          ref={refs[idx]}
                          key={idx}
                          id={_.kebabCase(heading?.childMarkdownRemark?.html.replace(/<[^>]+>/g, ""))}
                          tw="py-14 lg:py-32 2xl:py-48"
                          css={[idx % 2 === 0 ? tw`bg-sitegray` : "", idx === sections?.length - 1 ? tw`pb-8 lg:pb-16 2xl:pb-24` : ""]}
                      >
                          <div tw="container mx-auto px-4">
                              <div tw="grid grid-cols-1 lg:gap-x-16 lg:grid-cols-5">
                                  <div
                                      tw="text-px24 lg:text-px48 2xl:text-px54 col-span-2 leading-normal"
                                      dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }}
                                  />
                                  <div
                                      tw="text-px16 lg:text-px18 2xl:text-px21 col-span-3"
                                      css={[
                                          css`
                                              p {
                                                  ${tw`my-6`}
                                              }
                                          `,
                                      ]}
                                      dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }}
                                  />
                              </div>
                              {image?.gatsbyImageData ? (
                                  <div tw="flex items-center justify-center relative lg:max-w-[83.333%] mx-auto mt-8 lg:mt-20">
                                      <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} />
                                  </div>
                              ) : (
                                  ""
                              )}
                          </div>
                      </div>
                  ))
                : ""}

            {/* GALLERY */}
            {gallery?.length ? (
                <div tw="pb-16 lg:pb-48 bg-sitegray">
                    <div tw="container mx-auto px-4">
                        <div tw="overflow-auto">
                            <div tw="flex gap-4">
                                <div tw="w-[75%] lg:w-[30%] flex-[0 0 75%] lg:flex-[0 0 30%]">
                                    {gallery[0]?.gatsbyImageData ? (
                                        <GatsbyImage image={gallery[0]?.gatsbyImageData} alt={gallery[0]?.title} tw="h-full rounded-xl block" />
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div tw="flex flex-col gap-4 flex-[0 0 95%] lg:flex-1">
                                    <div tw="flex-[0 0 50%]">
                                        {gallery[1]?.gatsbyImageData ? (
                                            <GatsbyImage image={gallery[1]?.gatsbyImageData} alt={gallery[1]?.title} tw="h-full rounded-xl block" />
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div tw="flex-[0 0 50%]">
                                        <div tw="grid grid-cols-2 gap-4">
                                            <div>
                                                {gallery[2]?.gatsbyImageData ? (
                                                    <GatsbyImage
                                                        image={gallery[2]?.gatsbyImageData}
                                                        alt={gallery[2]?.title}
                                                        tw="h-full rounded-xl block"
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                            <div>
                                                {gallery[3]?.gatsbyImageData ? (
                                                    <GatsbyImage
                                                        image={gallery[3]?.gatsbyImageData}
                                                        alt={gallery[3]?.title}
                                                        tw="h-full rounded-xl block"
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div tw="w-[75%] w-[30%] flex-[0 0 75%] lg:flex-[0 0 30%]">
                                    {gallery[4]?.gatsbyImageData ? (
                                        <GatsbyImage image={gallery[4]?.gatsbyImageData} alt={gallery[4]?.title} tw="h-full rounded-xl block" />
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
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
        contentfulInnovationsTemplate(name: { eq: "Innovation" }) {
            sections {
                ...ImageCopy
            }
            gallery {
                ...Image
            }
        }
    }
`;
