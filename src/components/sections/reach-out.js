import * as React from "react";
import "twin.macro";
import Section from "../section";
import Button from "../button";
import { StaticImage } from "gatsby-plugin-image";

const { Content } = Section;

export function Distributor2() {
  return (
    <Section>
      <Content>
        <div>
          <Content.Title tw="mb-16">
            For investment interest or oppurtunities, please reach out.
          </Content.Title>
          <Button path="/experience-contact-us" text="CONTACT US" />
        </div>
        <div tw="lg:order-last order-first mb-4 lg:mb-0">
          <StaticImage
            alt=""
            loading="eager"
            placeholder="none"
            src="../../images/grow_business.jpg"
          />
        </div>
      </Content>
    </Section>
  );
}

export default Distributor2;
