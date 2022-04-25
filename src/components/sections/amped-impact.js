import * as React from "react";
import "twin.macro";
import Button from "../button";

import AmpedStoryMap from "../amped-story-map";

function MetricCard({ value, label }) {
    return (
        <div tw="bg-sitegray px-8 py-2 rounded-md">
            <div tw="font-circular-bold ">{value}</div>
        </div>
    );
}

export function AmpedImpact({ heading, subText, keyStats, cta, images }) {
    return (
        <div tw=" py-20 lg:py-52 container px-4 mx-auto">
            <div tw="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div tw="lg:pr-16 text-center lg:text-left">
                    <h2
                        tw="text-px24 lg:text-px54 my-5 lg:my-8 font-sf-regular leading-tight"
                    >
                      {heading}
                    </h2>
                    <div
                        tw="text-px16 lg:text-px21 mb-12 lg:mb-8 font-circular-regular leading-normal"
                        dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }}
                    />
                    <div tw="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {keyStats?.map(({ value, suffix, label }, idx) => (
                            <MetricCard
                                key={idx}
                                value={
                                    <div tw="text-px16 grid grid-cols-2 gap-4 items-center justify-between">
                                        <div tw="text-px48 ">
                                            <span tw="text-primary">{value}</span>
                                            <sup tw="text-secondary">{suffix}</sup>
                                        </div>
                                        <div>{label}</div>
                                    </div>
                                }
                            />
                        ))}
                    </div>
                    {cta?.url ? (
                        <div>
                            <Button text={cta?.title} tw="px-4 py-2 uppercase min-w-[200px]" path={cta?.url} />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div tw="lg:pl-16 order-first lg:order-last">
                    <AmpedStoryMap images={images} />
                </div>
            </div>
        </div>
    );
}

export default AmpedImpact;
