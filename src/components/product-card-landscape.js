import * as React from "react";
import "twin.macro";

export function ProductCardLandscape({ img, title, caption, action }) {
  return (
    <div className="lg:w-1050" tw="block bg-sitegray rounded py-10 px-8 lg:p-0">
      <div className="lg:w-440 lg:h-440" tw="inline-block align-top mb-10 lg:mb-0">{img}</div>
      <div tw="lg:min-w-max lg:inline-block lg:pt-28 lg:pr-32 lg:ml-16 text-center lg:text-left">
        <div tw="font-bold text-px18 lg:text-px32 mb-6">{title}</div>
        <div tw="lg:max-w-md text-px16 lg:text-px18 mb-10 lg:mb-16 font-circular-regular">
          {caption}
        </div>
        <div>{action}</div>
      </div>
    </div>
  );
}

export default ProductCardLandscape;
