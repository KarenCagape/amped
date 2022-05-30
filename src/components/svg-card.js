import * as React from "react";
import "twin.macro";

export function SvgCard({ icon, content, ...rest }) {
    return (
        <div tw="rounded-md font-circular-bold text-px18 flex-none pr-6 pl-6 pt-6 pb-12 inline-block bg-sitegray" {...rest}>
            <div tw="flex items-center justify-between mb-8">{icon}</div>
            <div tw="text-px16 text-default">{content}</div>
        </div>
    );
}

export function SvgCardLandscape({ title, caption, svg, ...rest }) {
    return (
        <div tw="bg-sitegray px-10 lg:px-16 py-8 lg:py-12 rounded-md text-center lg:text-left" {...rest}>
            <div tw="text-px18 lg:text-px28">{title}</div>
            <div tw="text-px14 lg:text-px18 2xl:text-px21 mt-2 lg:mt-7">{caption}</div>
            <div tw="flex flex-nowrap mt-7 justify-center lg:justify-start">{svg}</div>
        </div>
    );
}

export default SvgCard;
