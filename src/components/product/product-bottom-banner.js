import * as React from "react";
import "twin.macro";
import Section from "../section";
import Button from "../button";
import { GatsbyImage } from "gatsby-plugin-image";

const { Content } = Section;

export function ProductBottomBanner({ heading, image, cta }) {
    return (
        <Section>
            <Content>
                <div tw="lg:order-last mb-10 lg:mb-0">
                    {image?.gatsbyImageData ? <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} /> : ""}
                </div>
                <div tw="text-center lg:text-left w-10/12 mx-auto lg:w-full mb-10 lg:mb-0">
                    <Content.Title tw="mb-8 lg:mb-16 font-sf-regular text-px24 lg:text-px48 2xl:text-px54 leading-tight">
                        <div dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }} />
                    </Content.Title>
                    {cta?.url ? <Button path={cta?.url} text={cta?.title} /> : ""}
                </div>
            </Content>
        </Section>
    );
}

export default ProductBottomBanner;
