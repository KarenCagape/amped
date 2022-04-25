import * as React from "react";
import "twin.macro";
import { SubHeader } from "./_/header";

export function InFieldGallery({ images }) {
    return (
        <div>
            <SubHeader tw="mb-12 lg:mb-24 font-sf-light">In the field</SubHeader>
            <div tw="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {images?.map((image, idx) => (
                    <div tw="rounded-md" key={idx}>
                        {image}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InFieldGallery;
