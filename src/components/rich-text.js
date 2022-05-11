import React from "react";
import { css } from "twin.macro";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Strong = (props) => <strong tw="font-bold">{props.children}</strong>;

const P = (props) => <p tw="overflow-hidden mb-6">{props.children}</p>;

const H1 = (props) => <h1 tw="text-4xl md:text-5xl my-4">{props.children}</h1>;

const H2 = (props) => <h2 tw="text-3xl md:text-4xl my-4">{props.children}</h2>;

const H3 = (props) => <h3 tw="text-2xl md:text-3xl my-4">{props.children}</h3>;

const H4 = (props) => <h4 tw="text-xl md:text-2xl my-4">{props.children}</h4>;

const H5 = (props) => <h5 tw="text-lg md:text-xl my-4 font-bold">{props.children}</h5>;

const H6 = (props) => <h6 tw="text-base md:text-lg my-4 font-bold">{props.children}</h6>;

const List = (props) => (
    <ul
        tw="pl-5 list-disc my-5"
        css={[
            css`
                li > p {
                    margin-bottom: 0 !important;
                }
            `,
        ]}
    >
        {props.children}
    </ul>
);

const OlList = (props) => (
    <ul
        tw="pl-5 list-decimal my-5"
        css={[
            css`
                li > p {
                    margin-bottom: 0 !important;
                }
            `,
        ]}
    >
        {props.children}
    </ul>
);

const Blockquote = (props) => (
    <div
        tw="italic text-xl md:text-2xl border-l-2 border-primary my-8 md:my-12"
        css={[
            css`
                padding-left: 7%;
            `,
        ]}
    >
        {props.children}
    </div>
);

const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <Strong>{text}</Strong>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
        [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
        [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
        [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
        [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
        [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
        [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
        [BLOCKS.UL_LIST]: (node, children) => <List>{children}</List>,
        [BLOCKS.OL_LIST]: (node, children) => <OlList>{children}</OlList>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
        [BLOCKS.QUOTE]: (node, children) => <Blockquote>{children}</Blockquote>,
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { target } = node?.data;
            return target?.gatsbyImageData ? (
                <div tw="my-8 md:my-12">
                    <GatsbyImage tw="w-full" image={target?.gatsbyImageData} alt={target?.title} />
                </div>
            ) : (
                <img src={target?.file?.url} alt={target?.title} />
            );
        },
        [INLINES.HYPERLINK]: (node, children) => (
            <Link tw="text-primary" to={node.data.uri}>
                {children}
            </Link>
        ),
    },
    renderText: (text) => text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text]),
};

const RichText = ({ content, ...rest }) => {
    return (
        <div tw="" {...rest}>
            {renderRichText(content, options)}
        </div>
    );
};

export default RichText;
