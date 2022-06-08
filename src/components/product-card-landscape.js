import * as React from "react";
import "twin.macro";

export function ProductCardLandscape({ img, title, caption, action }) {
    return (
        <div className="product-card" tw="block bg-sitegray lg:flex lg:items-center rounded py-10 px-8 lg:p-0 h-full">
            {img ? <div tw="lg:w-[33.333%] inline-block align-top mb-10 lg:mb-0">{img}</div> : ""}
            <div tw="lg:flex-1 lg:py-14 2xl:py-20 lg:px-10 2xl:px-16 lg:mx-8 text-center lg:text-left">
                {title ? <div tw="font-bold text-px18 lg:text-px32 mb-6">{title}</div> : ""}
                {caption ? <div tw="text-px16 lg:text-px18 mb-10 lg:mb-12 font-circular-regular">{caption}</div> : ""}
                {action ? <div>{action}</div> : ""}
            </div>
        </div>
    );
}

export default ProductCardLandscape;
