import * as React from "react";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

export function MeetTheSolutions({ heading, imageCopies }) {
    return (
        <div tw="pt-12 lg:pt-48 pb-20 lg:pb-24">
            <div tw="container px-4 mx-auto">
                <div tw="mb-8 lg:mb-32">
                    <div
                        css={[
                            tw`font-sf-light text-px36 lg:text-px72`,
                            css`
                                strong {
                                    ${tw`font-sf-bold text-primary`}
                                }
                            `,
                        ]}
                        dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }}
                    />
                </div>
                {imageCopies.map(({ heading, subText, image }, idx) => (
                    <div key={idx} tw="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center" css={[idx !== 0 ? tw`mt-10 lg:mt-10` : ""]}>
                        <div tw="mb-4 lg:mb-0" css={[idx % 2 === 0 ? tw`lg:order-first` : tw`lg:order-last`]}>
                            {image?.gatsbyImageData ? <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} /> : ""}
                        </div>
                        <div>
                            <div tw="text-px24 lg:text-px54 mb-8 font-sf-regular">
                                <div tw="my-4 lg:leading-tight" dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }} />
                            </div>
                            <div
                                tw="text-lg lg:text-px21 font-circular-regular"
                                dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MeetTheSolutions;
