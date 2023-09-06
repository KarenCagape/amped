import * as React from "react";
import "twin.macro";

export function SubMenuGroup({ image, links, ...rest }) {
    return (
        <div tw="xl:grid xl:grid-cols-7 justify-between gap-4 2xl:gap-6 lg:px-4" {...rest}>
            {image ? <div tw="xl:col-span-2 pointer-events-none max-w-[33.333%] xl:max-w-full mx-auto">{image}</div> : ""}
            {links ? <div tw="xl:col-span-5 flex-none flex flex-col">{links}</div> : ""}
        </div>
    );
}

export default SubMenuGroup;
