import * as React from "react";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import { cellBorderStyle } from "../../helpers/table-style";

export function ComparisonTable({ headers, rows }) {
    return (
        <div
            style={{
                border: cellBorderStyle,
                borderRadius: "5px",
                overflow: "auto",
            }}
        >
            <table tw="table-auto text-px16 w-full">
                <thead tw="text-px14 lg:text-px16 text-left text-primary font-circular-bold">
                    <tr>
                        {headers?.map(({ label, icon }, idx) => (
                            <th css={[idx !== headers?.length - 1 ? tw`border-r border-[#B5C4CA]` : ""]} key={idx} tw="p-3.5 font-normal">
                                {icon ? (
                                    <div tw="mb-4">
                                        {icon?.gatsbyImageData && icon?.gatsbyImageData ? (
                                            <GatsbyImage image={icon?.gatsbyImageData} alt={icon?.title} tw="max-w-[40px]" />
                                        ) : (
                                            <img src={icon?.file?.url} alt={icon?.title} tw="max-w-[40px]" />
                                        )}
                                    </div>
                                ) : (
                                    ""
                                )}
                                {label ? <div dangerouslySetInnerHTML={{ __html: label }} /> : ""}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody tw="bg-white text-px14 lg:text-px18 font-circular-book" css={[{ color: "#1C212B" }]}>
                    {rows?.map(({ content }, idx) => (
                        <tr key={idx}>
                            {content.map(({ title, secondContent }, idx2) => (
                                <td
                                    key={idx2}
                                    css={[
                                        idx2 !== content?.length - 1 ? tw`border-r border-[#B5C4CA]` : "",
                                        idx !== rows?.length - 1 ? tw`border-b border-[#B5C4CA]` : "",
                                    ]}
                                >
                                    {title ? (
                                        <div
                                            tw="p-3.5 whitespace-nowrap"
                                            css={[
                                                css`
                                                    strong {
                                                        ${tw`font-circular-bold`}
                                                    }
                                                    em {
                                                        font-style: normal;
                                                        ${tw`font-circular-light`}
                                                    }
                                                    del {
                                                        text-decoration: none;
                                                        ${tw`font-kallisto font-bold`}
                                                    }
                                                `,
                                            ]}
                                            dangerouslySetInnerHTML={{ __html: title?.childMarkdownRemark?.html }}
                                        />
                                    ) : (
                                        ""
                                    )}
                                    {secondContent ? (
                                        <div
                                            tw="border-t border-[#B5C4CA] p-3.5"
                                            css={[
                                                css`
                                                    strong {
                                                        ${tw`font-circular-bold`}
                                                    }
                                                    em {
                                                        font-style: normal;
                                                        ${tw`font-circular-light`}
                                                    }
                                                `,
                                            ]}
                                            dangerouslySetInnerHTML={{ __html: secondContent?.childMarkdownRemark?.html }}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ComparisonTable;
