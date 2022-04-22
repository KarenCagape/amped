import * as React from 'react';
import 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Banner from '../components/heroes/team';
import Button from '../components/button';
import Brands from '../components/brands';
import TeamMap from '../assets/team-map.svg';

function EmployeeCard({ avatar, name, position }) {
  return (
    <div tw="flex flex-col items-center justify-center">
      <div tw="mb-2 w-32 h-32 mx-auto">{avatar}</div>
      <div tw="text-center text-px21 mb-4">{name}</div>
      <div tw="text-secondary text-px16 text-center">{position}</div>
    </div>
  );
}

function EmptyAvatar() {
  return (
    <div tw="rounded-full bg-sitegray w-32 h-32 mx-auto">
      <StaticImage
        alt=""
        loading="eager"
        placeholder="none"
        src="../images/team-default.png"
      />
    </div>
  );
}

export default function AmpedStory() {
  return (
    <Layout pageTitle="Team">
      <Banner />
      <div tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="lg:w-9/12 grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-64 mx-auto">
          <div tw="col-span-2 text-px54 mb-8 lg:mb-0">Meet the Team</div>
          <div tw="col-span-3 text-px21">
            Amped Innovation is team of experienced product designers and sales
            professionals. We specialize in solar power electronics and design
            for extreme affordability. Over the past three years, we’ve sold
            over 90,000 solar lighting and solar television kits to customers
            living off grid in Sub-Saharan Africa and Southeast Asia.
          </div>
        </div>
        <div tw="lg:w-9/12 grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-48 mx-auto">
          <div tw="col-span-2 text-px32 font-circular-bold mb-8 lg:mb-0">
            Management
          </div>
          <div tw="col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16">
            <EmployeeCard
              avatar={
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/team-andi.png"
                />
              }
              name="Andi Kleissner"
              position="Co-CEO"
            />
            <EmployeeCard
              avatar={
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/team-kurt.png"
                />
              }
              name="Kurt Kuhmann"
              position="Co-CEO"
            />

            <EmployeeCard
              avatar={
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/team-dan.png"
                />
              }
              name="Dan Matthews"
              position="Chief Operations Officer"
            />
            <EmployeeCard
              avatar={
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/team-kathy.png"
                />
              }
              name="Kathy Kyne"
              position="Financial Controller"
            />
            <EmployeeCard
              avatar={
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/team-nicholas.png"
                />
              }
              name="Nicholas Maina"
              position="Sales Manager"
            />
          </div>
        </div>
        <div tw="lg:w-9/12 grid grid-cols-1 lg:grid-cols-5 mx-auto">
          <div tw="col-span-2 text-px32 font-circular-bold mb-4 lg:mb-0">
            Sales
          </div>
          <div tw="col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16">
            <EmployeeCard
              avatar={
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/team-marmour.png"
                />
              }
              name="Marmour Seck"
              position="Technical Support Engineer West Africa"
            />
            <EmployeeCard
              avatar={
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/team-andrew.png"
                />
              }
              name="Andrew Abacha"
              position="Technical Support Engineer East Africa"
            />

            <EmployeeCard
              avatar={
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/team-jeff.png"
                />
              }
              name="Jeff Bennett"
              position="Sales Operations"
            />
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 py-16 lg:py-48 bg-sitegray">
        <div tw="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-9/12 mx-auto items-center">
          <div tw="lg:pr-32">
            <TeamMap />
          </div>
          <div>
            <div tw="text-2xl lg:text-px54 mb-8">
              <span tw="leading-tight">
                California Innovation with a Global Presence
              </span>
            </div>
            <div tw="text-px21 mb-16">
              Interested in joining us? Reach out to careers@ampedinnovation.com
            </div>
            <Button path="/experience-contact-us" text="CONTACT US"></Button>
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="text-px28 w-9/12 mx-auto text-center mb-8 lg:mb-0">
          Strategic Partnerships and Key Collaborators
        </div>
        <div>
          <Brands />
        </div>
      </div>
    </Layout>
  );
}
