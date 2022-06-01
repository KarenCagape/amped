import * as React from "react";
import "twin.macro";
import Section from "../section";
import Button from "../button";
import { GatsbyImage } from "gatsby-plugin-image";

const { Content } = Section;

export function ImageCopy({ heading, image, cta }) {
    return (
        <Section>
            <Content>
                <div tw="text-center lg:text-left pb-8 lg:pb-0">
                    {heading?.childMarkdownRemark?.html ? (
                        <Content.Title tw="lg:mb-16 leading-[1.3]">
                            <div dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }} />
                        </Content.Title>
                    ) : (
                        ""
                    )}
                    {cta?.url ? <Button tw="uppercase" path={cta?.url} text={cta?.title} /> : ""}
                </div>
                <div tw="lg:order-last order-first mb-4 lg:mb-0 pt-8 lg:pt-0">
                    {image?.gatsbyImageData ? <GatsbyImage tw="w-full" image={image?.gatsbyImageData} alt={image?.title} /> : ""}
                </div>
            </Content>
        </Section>
    );
}

export default ImageCopy;
