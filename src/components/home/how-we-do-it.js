import * as React from "react";
import tw, { css } from "twin.macro";
import Button from "../button";
import { GatsbyImage } from "gatsby-plugin-image";

export function HowWeDoIt({ heading, subText, button, cards }) {
    return (
        <div tw="rounded py-16 lg:py-48 bg-default">
            <div tw="container px-4 mx-auto">
                <div tw="font-sf-regular mb-12 lg:mb-0">
                    <div
                        css={[
                            tw`text-px36 lg:text-[56px] 2xl:text-px72 text-white leading-none lg:mb-32 `,
                            css`
                                strong {
                                    ${tw`text-primary font-sf-bold`}
                                }
                            `,
                        ]}
                        dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }}
                    />
                </div>
                <div tw="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-32">
                    <div tw="grid grid-cols-2 gap-5 lg:gap-8">
                        {cards.map(({ title, image, logo, icons }, index) => (
                            <div key={index}>
                                <div tw="h-12 flex items-center mb-12">
                                    {logo?.gatsbyImageData ? (
                                        <GatsbyImage image={logo?.gatsbyImageData} alt={logo?.title} tw="max-w-[160px] flex-auto" />
                                    ) : (
                                        <div tw="text-px21 text-white">Other Products</div>
                                    )}
                                </div>
                                <div css={[index === 1 ? tw`opacity-50` : ""]}>
                                    {image?.gatsbyImageData ? <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} /> : ""}
                                </div>
                                <div tw="mt-5 lg:mt-10 flex gap-4 mb-4 lg:mb-5">
                                    {icons.map((icon, idx) => (
                                        <div tw="inline-block" key={idx}>
                                            {icon?.gatsbyImageData ? (
                                                <GatsbyImage
                                                    image={icon?.gatsbyImageData}
                                                    alt={icon?.title}
                                                    tw="w-[32px] lg:w-[60px]"
                                                />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    ))}
                                </div>
                                {title ? <div tw="text-px14 lg:text-px18 text-secondary lg:max-w-[75%]">{title}</div> : ""}
                            </div>
                        ))}
                    </div>
                    <div tw="lg:order-first">
                        <div
                            tw="font-circular-regular text-px16 lg:text-px18 2xl:text-px21 text-white mt-10 mb-9 lg:mb-16"
                            dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }}
                        />

                        <Button tw="uppercase lg:min-w-[260px]" text={button?.title} path={button?.url} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWeDoIt;
