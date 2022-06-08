import * as React from "react";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import SubMenuGroup from "./sub-menu-group";
import HeaderLink from "./header-link";
import { Link } from "gatsby";

export function SubMenu({ submenu, ...rest }) {
    return (
        <div tw="absolute z-20 w-full left-0 top-full bg-white" {...rest}>
            <div tw="container px-4 mx-auto">
                <div tw="py-16 2xl:py-20 grid grid-cols-4 gap-4 2xl:gap-8">
                    {submenu?.length
                        ? submenu?.map(({ name, url, icon, subLinks }, idx) => (
                              <div tw="flex gap-4" key={idx}>
                                  <SubMenuGroup
                                      image={icon?.gatsbyImageData ? <GatsbyImage tw="w-full" image={icon?.gatsbyImageData} alt={icon?.title} /> : ""}
                                      links={
                                          <>
                                              <HeaderLink path={url} text={name} />
                                              {subLinks?.map((item, i) =>
                                                  item?.url === "coming-soon" ? (
                                                      <div tw="flex gap-2 mb-6" key={i}>
                                                          <span
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
                                                              dangerouslySetInnerHTML={{ __html: item?.label?.childMarkdownRemark?.html }}
                                                          />
                                                          <span tw="font-kallisto font-bold text-px12 rounded bg-sky-gray px-4 py-1 text-white text-center">
                                                              Coming Soon
                                                          </span>
                                                      </div>
                                                  ) : (
                                                      <Link
                                                          key={i}
                                                          to={item?.url}
                                                          tw="text-px16 mb-6 inline-block hover:text-solar-100 active:text-solar-80 font-circular-regular"
                                                      >
                                                          {item?.label ? (
                                                              <span
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
                                                                  dangerouslySetInnerHTML={{ __html: item?.label?.childMarkdownRemark?.html }}
                                                              />
                                                          ) : (
                                                              ""
                                                          )}
                                                      </Link>
                                                  )
                                              )}
                                          </>
                                      }
                                  />
                                  {submenu?.length > idx + 1 ? <div tw="border-r-2 border-sitegray h-full" /> : ""}
                              </div>
                          ))
                        : ""}
                </div>
            </div>
        </div>
    );
}

export default SubMenu;
