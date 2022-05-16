import * as React from "react";
import "twin.macro";

export function SubMenuGroup({ image, links, ...rest }) {
    return (
        <div tw="grid grid-cols-7 justify-between gap-8 " {...rest}>
            {image ? <div tw="col-span-2 pointer-events-none">{image}</div> : ""}
            {links ? <div tw="col-span-5 flex-none flex flex-col pt-4">{links}</div> : ""}
        </div>
    );
}

export default SubMenuGroup;
