import * as React from "react";
import tw, { css } from "twin.macro";

import TextCard from "../text-card";

export default function ListCopy({ heading, subText, keyStats }) {
    return (
        <div tw="bg-sitegray py-16 lg:py-32">
            <div tw="container px-4 mx-auto">
                <div tw="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-8 2xl:gap-x-16">
                    <div tw="text-px18 lg:text-px32 font-circular-bold col-span-2 lg:pr-16 mb-8 lg:mb-0">{heading}</div>
                    <div tw="col-span-3">
                        {subText?.childMarkdownRemark?.html ? (
                            <div
                                tw="lg:text-px18 2xl:text-px21 mb-16"
                                css={[
                                    css`
                                        p {
                                            ${tw`mb-6`}
                                        }
                                    `,
                                ]}
                                dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }}
                            />
                        ) : (
                            ""
                        )}
                        <div tw="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                            {keyStats?.map(({ value, suffix, label }, idx) => (
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
    );
}
