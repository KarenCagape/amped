import * as React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';

export function SubMenuAction({ ...rest }) {
  return (
    <div tw="absolute z-20 w-full left-0 top-full bg-white" {...rest}>
      <div tw="font-circular-book w-10/12 mx-auto py-16 flex items-center justify-between text-px21">
        <Link
          tw="hover:text-solar-100 active:text-solar-80"
          to="/experience-become-distributor"
        >
          Become a Distributor
        </Link>
        <div>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </div>
        <Link
          tw="hover:text-solar-100 active:text-solar-80"
          to="/action-become-customer"
        >
          Become a Customer
        </Link>
        <div>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </div>
        <Link
          tw="hover:text-solar-100 active:text-solar-80"
          to="/action-buy-wowsolar"
        >
          Buy WowSOLAR™
        </Link>
        <div>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </div>
        <Link
          tw="hover:text-solar-100 active:text-solar-80"
          to="/action-invest"
        >
          Invest
        </Link>
      </div>
    </div>
  );
}

export default SubMenuAction;
