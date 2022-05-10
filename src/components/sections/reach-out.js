import * as React from "react";
import "twin.macro";
import Section from "../section";
import Button from "../button";
import { GatsbyImage } from "gatsby-plugin-image";

const { Content } = Section;

export function ReachOut({ heading, image, cta }) {
    return (
        <Section>
            <Content>
                <div tw="lg:order-last mb-8 lg:mb-0">
                    {image?.gatsbyImageData ? <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} /> : ""}
                </div>
                <div tw="text-center lg:text-left">
                    {heading?.childMarkdownRemark?.html ? (
                        <Content.Title tw="lg:mb-16">
                            <div dangerouslySetInnerHTML={{ __html: heading?.childMarkdownRemark?.html }} />
                        </Content.Title>
                    ) : (
                        ""
                    )}
                    {cta?.url ? <Button path={cta.url} text={cta.title} /> : ""}
                </div>
            </Content>
        </Section>
    );
}

export default ReachOut;
