import * as React from "react";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import SubMenuGroup from "./sub-menu-group";
import HeaderLink from "./header-link";
import { Link } from "gatsby";

export function SubMenu({ submenu, ...rest }) {
    return (
        <div tw="absolute z-20 w-full left-0 top-full bg-white" {...rest}>
            <div tw="w-11/12 mx-auto py-24 grid grid-cols-4 gap-12">
                {submenu?.length
                    ? submenu?.map(({ name, url, icon, subLinks }, idx) => (
                          <div tw="flex gap-4" key={idx}>
                              <SubMenuGroup
                                  image={icon?.gatsbyImageData ? <GatsbyImage tw="w-full" image={icon?.gatsbyImageData} alt={icon?.title} /> : ""}
                                  links={
                                      <>
                                          <HeaderLink path={url} text={name} />
                                          {subLinks?.map((item, i) => (
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
                                          ))}
                                      </>
                                  }
                              />
                              {submenu?.length > idx + 1 ? <div tw="border-r-2 border-sitegray h-full" /> : ""}
                          </div>
                      ))
                    : ""}
            </div>
        </div>
    );
}

export default SubMenu;
