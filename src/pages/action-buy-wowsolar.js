import * as React from "react";
import "twin.macro";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Banner from "../components/heroes/buy-wowsolar";
import BuyWowSolar from "../components/sections/buy-wowsolar";
import { SubHeader } from "../components/_/header";
import BuyWowSolarCountries from "../components/buy-wowsolar-countries/buy-wowsolar-countries";

const galleryImages = [
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-1.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-2.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-3.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-4.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-5.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-6.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-7.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-8.jpg"
  />,
];

export default function AmpedStory() {

  return (
    <Layout pageTitle="Buy WowSolar">
      <Banner />
      <div tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="lg:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-5">
          <SubHeader tw="col-span-2 mb-8 lg:mb-0 leading-normal">
            Supporting African Business
          </SubHeader>
          <div tw="col-span-3 text-px21">
            Amped currently does not sell products directly through this
            website. However, Amped works with dozens of distributors in 23
            countries globally. Feel free to reach out to us directly if you
            would like to purchase a WOWsolar product, and our sales team can
            connect you to one or more distributors that service your region.
            They will be able to sell you WOWsolar products.
          </div>
        </div>
      </div>

      <BuyWowSolarCountries />

      <div tw="bg-sitegray">
        <BuyWowSolar />
      </div>

      <div tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="text-px54 text-center mb-16 lg:mb-32">
          <div>
            <a href="#/" tw="break-all">
              #AmpedInnovationRedefiningSolar
            </a>
          </div>
        </div>
        <div tw="gap-2 lg:gap-8 grid grid-cols-1 lg:grid-cols-4 lg:w-9/12 mx-auto">
          {galleryImages.map((image, idx) => (
            <div key={idx}>{image}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
