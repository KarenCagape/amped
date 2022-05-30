import * as React from "react";
import "twin.macro";

export function ProductCardLandscape({ img, title, caption, action }) {
    return (
        <div className="product-card lg:w-1050" tw="block bg-sitegray lg:flex rounded py-10 px-8 lg:p-0 h-full">
            {img ? <div tw="lg:w-[440px] inline-block align-top mb-10 lg:mb-0">{img}</div> : ""}
            <div tw="lg:min-w-max lg:flex-1 lg:py-20 lg:px-16 lg:mx-8 text-center lg:text-left">
                {title ? <div tw="font-bold text-px18 lg:text-px32 mb-6">{title}</div> : ""}
                {caption ? <div tw="lg:max-w-md text-px16 lg:text-px18 mb-10 lg:mb-12 font-circular-regular">{caption}</div> : ""}
                {action ? <div>{action}</div> : ""}
            </div>
        </div>
    );
}

export default ProductCardLandscape;
