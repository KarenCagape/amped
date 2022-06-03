import * as React from "react";
import tw, { css } from "twin.macro";

import TextCard from "../text-card";

export default function OverviewKeyStats({ heading, subText, keyStats, ...rest }) {
    return (
        <div tw="px-4 container mx-auto pt-16 lg:pt-32 2xl:pt-48 lg:pb-32" {...rest}>
            <div tw="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-8 2xl:gap-x-16">
                {heading ? (
                    <div tw="text-px24 lg:text-px48 2xl:text-px54 leading-tight col-span-2 mb-4 lg:mb-0">
                        <span>{heading}</span>
                    </div>
                ) : (
                    ""
                )}
                <div tw="col-span-3">
                    {subText?.childMarkdownRemark?.html ? (
                        <div
                            tw="lg:text-px18 2xl:text-px21"
                            css={[
                                css`
                                    p {
                                        ${tw`mb-6`}
                                    }
                                `,
                            ]}
                            dangerouslySetInnerHTML={{ __html: subText.childMarkdownRemark.html }}
                        />
                    ) : (
                        ""
                    )}
                    {keyStats?.length ? (
                        <div tw="grid grid-cols-1 lg:grid-cols-3 gap-6  mt-16">
                            {keyStats?.map(({ value, suffix, label }, idx) => (
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
    );
}
