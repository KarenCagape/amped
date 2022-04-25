import * as React from "react";
import "twin.macro";
import ExtraInfoFill from "../extra-info-fill";
import Button from "../button";

const MetricCard = ({ value, label }) => {
    return (
        <div tw="bg-white p-6 pt-10 lg:p-8 lg:pt-16 rounded-md font-circular-bold">
            <div tw="text-px48 lg:text-px72 mb-8">{value}</div>
            <div tw="text-px14 lg:text-px16">{label}</div>
        </div>
    );
};

function ClimateImpact({ heading, subText, cta, keyStats }) {
    return (
        <div tw="py-16 lg:pt-0 lg:pb-48">
            <div tw="container px-4 mx-auto">
                <ExtraInfoFill
                    caption={
                        <div>
                            {heading ? <h2 tw="text-px24 lg:text-px54 my-5 lg:my-8 font-sf-regular leading-tight">{heading}</h2> : ""}
                            {subText ? (
                                <div
                                    tw="text-px16 lg:text-px21 mb-12 lg:mb-8 font-circular-regular leading-normal"
                                    dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }}
                                />
                            ) : (
                                ""
                            )}

                            <div>
                                <div tw="grid grid-cols-1 lg:grid-cols-3 w-full lg:w-11/12 m-auto gap-8">
                                    {keyStats?.map(({ value, suffix, label }, idx) => (
                                        <MetricCard
                                            tw="bg-white px-8 pt-16 pb-8 rounded-md font-circular-bold"
                                            key={idx}
                                            value={
                                                <div>
                                                    <span tw="text-primary ">{value}</span>
                                                    <sup tw="text-secondary">{suffix}</sup>
                                                </div>
                                            }
                                            label={label}
                                        />
                                    ))}
                                </div>
                            </div>
                            {cta?.url ? (
                                <div tw="text-center">
                                    <Button text={cta?.title} tw="px-4 py-2 uppercase" path={cta?.url} />
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    }
                />
            </div>
        </div>
    );
}

export default ClimateImpact;
