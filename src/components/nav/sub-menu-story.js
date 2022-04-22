import * as React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';

export function SubMenuStory({ ...rest }) {
  return (
    <div tw="absolute z-20 w-full left-0 top-full bg-white" {...rest}>
      <div tw="w-10/12 mx-auto py-16 text-px21 flex items-center justify-between font-circular-book">
        <Link
          tw="hover:text-solar-100 active:text-solar-80 "
          to="/experience-amped-story"
        >
          Amped Story
        </Link>
        <div>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </div>
        <Link
          tw="hover:text-solar-100 active:text-solar-80 "
          to="/experience-team"
        >
          Team
        </Link>
        <div>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </div>
        <Link tw="hover:text-solar-100 active:text-solar-80 " to="/about-news">
          News
        </Link>
        <div>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </div>
        <Link
          tw="hover:text-solar-100 active:text-solar-80"
          to="/experience-contact-us"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default SubMenuStory;
