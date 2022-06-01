import * as React from "react";
import "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Gallery({ items, heading }) {
    return items?.length ? (
        <div tw="px-4 container mx-auto py-16 lg:py-32">
            <div tw="text-px21 lg:text-px48 2xl:text-px54 text-center mb-8 lg:mb-16">{heading ? <div tw="break-all">{heading}</div> : ""}</div>
            <div tw="gap-2 lg:gap-8 grid grid-cols-2 lg:grid-cols-4">
                {items.map((image, idx) => (
                    <div key={idx}>{image?.gatsbyImageData ? <GatsbyImage tw="w-full" image={image?.gatsbyImageData} alt={image?.title} /> : ""}</div>
                ))}
            </div>
        </div>
    ) : (
        ""
    );
}
