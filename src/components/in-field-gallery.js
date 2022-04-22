import * as React from 'react';
import 'twin.macro';
import { SubHeader } from './_/header';
import { StaticImage } from 'gatsby-plugin-image';

const staticImages = [
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/in_the_field-01.png"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/in_the_field-02.png"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/in_the_field-03.png"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/in_the_field-04.png"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/in_the_field-05.png"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/in_the_field-06.png"
  />,
];

export function InFieldGallery({ images = staticImages }) {
  return (
    <div>
      <SubHeader tw="mb-12 lg:mb-24 font-sf-light">In the field</SubHeader>
      <div tw="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {images.map((image, idx) => (
          <div tw="rounded-md" key={idx}>
            {image}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InFieldGallery;
