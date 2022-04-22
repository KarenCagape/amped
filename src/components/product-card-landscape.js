import * as React from "react";
import "twin.macro";

export function ProductCardLandscape({ img, title, caption, action }) {
  return (
    <div class="lg:w-1050" tw="block bg-sitegray rounded">
      <div class="lg:w-440 lg:h-440" tw="inline-block align-top">{img}</div>
      <div tw="min-w-max inline-block pt-28 pr-32 ml-16">
        <div tw="font-bold text-px18 lg:text-px32 mb-6">{title}</div>
        <div tw="max-w-md text-px16 lg:text-px18 mb-16 font-circular-regular">
          {caption}
        </div>
        <div>{action}</div>
      </div>
    </div>
  );
}

export default ProductCardLandscape;
