import * as React from "react";
import "twin.macro";
import LinkCategory from "./link-category";
import { Link } from "gatsby";
import Copyright from "./copyright";
import { WhiteLogo } from "../_/logo";
import WowSolar from "../wowsolar";

function CategorizedLink({ name = "", links = [] }) {
  if (!links.length) {
    return null;
  }

  return (
    <div tw="mb-12">
      <div tw="mb-8 lg:mb-16">
        <LinkCategory text={name} />
      </div>
      {links.map((link, idx) => {
        return (
          <div tw="mb-4 lg:mb-9" key={idx}>
            <Link tw="text-px16 text-white font-circular-book" to={link.path}>
              {link.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export function Footer() {
  return (
    <div tw="p-4 lg:p-0 bg-default">
      <div tw="lg:flex justify-between pt-12 lg:pt-40 lg:w-9/12 mx-auto">
        <div tw="lg:text-left lg:mb-0 text-center mb-8">
          <WhiteLogo />
        </div>
        <div tw="lg:flex justify-between lg:w-8/12">
          <div>
            <CategorizedLink
              name="PRODUCTS"
              links={[
                {
                  text: "Lighting and Phone Charging",
                  path: "/product-lighting-and-phone-charging",
                },
                { text: "Television", path: "/product-television" },
                { text: "Fan", path: "/product-fan" },
                { text: "Grid Backup", path: "/product-grid-backup" },
              ]}
            />
          </div>
          <div>
            <CategorizedLink
              name="INNOVATION"
              links={[
                { text: "World Class Design", path: "/innovations#" },
                {
                  text: "City-like Performance",
                  path: "/innovations#city-like-performance",
                },
                {
                  text: "Smart Affordability",
                  path: "/innovations#smart-affordability",
                },
                {
                  text: "Premium Materials",
                  path: "/innovations#premium-materials",
                },
                {
                  text: "Advanced Manufacturing",
                  path: "/innovations#advanced-manufacturing",
                },
                { text: "Africa Tough", path: "/innovations#africa-tough" },
                {
                  text: "Designed in the USA",
                  path: "/innovations#designed-in-the-usa",
                },
              ]}
            />
          </div>
          <div>
            <CategorizedLink
              name="ACTION"
              links={[
                {
                  text: "Become a Distributor",
                  path: "/experience-become-distributor/",
                },
                {
                  text: "Become a customer",
                  path: "/action-become-customer",
                },
                {
                  text: (
                    <span>
                      Buy <b>WOW</b>SOLAR&trade;
                    </span>
                  ),
                  path: "/action-buy-wowsolar",
                },
                { text: "Invest", path: "/action-invest" },
              ]}
            />
          </div>
          <div>
            <CategorizedLink
              name="ABOUT"
              links={[
                { text: "Amped Story", path: "/experience-amped-story" },
                { text: "Team", path: "/experience-team" },
                { text: "News", path: "/about-news" },
                { text: "Contact Us", path: "/experience-contact-us" },
              ]}
            />
          </div>
          <div>
            <CategorizedLink
              name="SOCIAL"
              links={[
                { text: "Facebook", path: "/" },
                { text: "Twitter", path: "/" },
              ]}
            />
          </div>
        </div>
      </div>
      <div>
        <div tw="py-12 flex flex-col lg:flex-row justify-between lg:w-10/12 mx-auto">
          <Copyright tw="text-center lg:text-left" />
          <div tw="flex order-first lg:order-last justify-between items-center mb-12 lg:mb-0">
            <div tw="mr-16">
              <Link tw="text-px16 text-white font-circular-regular" to="/">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link tw="text-px16 text-white font-circular-regular" to="/">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
