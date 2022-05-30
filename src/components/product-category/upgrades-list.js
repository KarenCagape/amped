import * as React from "react";
import "twin.macro";
import UpgradeCard from "../upgrade-card";
import { GatsbyImage } from "gatsby-plugin-image";
import SliderArrow from "../btn-slider-arrow";

function UpgradesList({ cards }) {
    return (
        <div tw="grid gap-8 lg:gap-16 lg:grid-cols-3 grid-cols-1 items-stretch">
            {cards?.map(({ title, image, subText }, idx) => (
                <div tw="relative mb-6 lg:mb-0" key={idx}>
                    {idx < cards.length - 1 ? (
                        <div tw="z-10 flex justify-center items-center absolute w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 lg:top-[50%] lg:left-[100%] top-[100%] left-[50%] rotate-90 lg:rotate-0">
                            <SliderArrow />
                        </div>
                    ) : (
                        ""
                    )}

                    <UpgradeCard
                        image={image?.gatsbyImageData ? <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} /> : ""}
                        title={title}
                        caption={<div dangerouslySetInnerHTML={{ __html: subText?.childMarkdownRemark?.html }} />}
                    />
                </div>
            ))}
        </div>
    );
}

export default UpgradesList;
