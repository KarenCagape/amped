import * as React from "react";
import { Link } from "gatsby";

import SvgLogo from "../../assets/logo.svg";
import SvgLogoWhite from "../../assets/logo-landscape.svg";
import SvgIcoLogo from "../../assets/ico-logo.svg";
import SvgLogoInnovation from "../../assets/logo-innovation.svg";

export function WhiteLogo({ path = "/" }) {
  return (
    <Link to={path}>
      <SvgLogoWhite />
    </Link>
  );
}

export function Logo({ path = "/" }) {
  return (
    <Link to={path}>
      <SvgLogo />
    </Link>
  );
}

export function IconLogo({ path = "/" }) {
  return (
    <Link to={path}>
      <SvgIcoLogo />
    </Link>
  );
}

export function LogoInnovation({ path = "/" }) {
  return (
    <Link to={path}>
      <SvgLogoInnovation></SvgLogoInnovation>
    </Link>
  );
}

export default Logo;
