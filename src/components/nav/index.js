import * as React from "react";
import tw, { css } from "twin.macro";
// import Localization from "./localization";
import NavLink from "./nav-link";
import { Link, graphql, useStaticQuery } from "gatsby";
import SubMenu from "./sub-menu";
import SubMenuAction from "./sub-menu-action";
import Hamburger from "../hamburger";
import Toggler from "../toggler";
import { GatsbyImage } from "gatsby-plugin-image";

function ToggleButton({ open, onClick }) {
    return (
        <button tw="text-secondary p-2 text-2xl" onClick={onClick}>
            {!open && "+"}
            {open && "-"}
        </button>
    );
}

function ToggleButtonSub({ open, onClick }) {
    return (
        <button tw="text-secondary p-2 text-2xl" onClick={onClick}>
            {!open && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                </svg>
            )}
            {open && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path
                        fill-rule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                </svg>
            )}
        </button>
    );
}

export function Nav() {
    const data = useStaticQuery(graphql`
        query {
            contentfulGlobalSettings(name: { eq: "Amped" }) {
                logo {
                    ...Image
                }
                headerNav {
                    name
                    url
                    icon {
                        ...Image
                    }
                    subLinks {
                        ... on ContentfulNavLink {
                            label {
                                childMarkdownRemark {
                                    html
                                }
                            }
                            url
                            icon {
                                ...Image
                            }
                        }
                        ... on ContentfulNavGroup {
                            name
                            url
                            icon {
                                ...Image
                            }
                            subLinks {
                                ... on ContentfulNavLink {
                                    label {
                                        childMarkdownRemark {
                                            html
                                        }
                                    }
                                    url
                                    icon {
                                        ...Image
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const { contentfulGlobalSettings } = data;
    const { logo, headerNav } = contentfulGlobalSettings;
    const [showSubmenu, setShowSubmenu] = React.useState(headerNav.map(() => false));

    return (
        <>
            <div
                role="presentation"
                onMouseLeave={() => {
                    setShowSubmenu(headerNav.map(() => false));
                }}
                tw="sticky top-0 z-20 bg-white hidden lg:block"
            >
                <div tw="container px-4 mx-auto">
                    <div tw="flex justify-between items-center">
                        <Link to="/">
                            {logo?.gatsbyImageData ? (
                                <GatsbyImage tw="w-full" image={logo?.gatsbyImageData} alt={logo?.title} />
                            ) : (
                                <img src={logo?.file?.url} alt={logo?.title} width={logo?.width} height={logo?.height} />
                            )}
                        </Link>
                        <div tw="flex justify-between w-6/12">
                            {headerNav?.length
                                ? headerNav?.map(({ name, url, subLinks }, idx) => (
                                      <div key={idx}>
                                          <NavLink
                                              opened={false}
                                              text={name}
                                              path={url}
                                              onClick={!url ? (e) => e.preventDefault() : ""}
                                              onMouseOver={() => {
                                                  setShowSubmenu(headerNav.map((node, i) => i === idx));
                                              }}
                                              hasSubmenu={subLinks?.length ? true : false}
                                          />
                                          {subLinks?.length ? (
                                              name === "Products" ? (
                                                  <SubMenu
                                                      submenu={subLinks}
                                                      tw="duration-500 ease-in-out"
                                                      css={[
                                                          showSubmenu[idx] ? tw`opacity-100 pointer-events-auto` : tw`opacity-0 pointer-events-none`,
                                                      ]}
                                                  />
                                              ) : (
                                                  <SubMenuAction
                                                      submenu={subLinks}
                                                      tw="duration-500 ease-in-out"
                                                      css={[
                                                          showSubmenu[idx] ? tw`opacity-100 pointer-events-auto` : tw`opacity-0 pointer-events-none`,
                                                      ]}
                                                  />
                                              )
                                          ) : (
                                              ""
                                          )}
                                      </div>
                                  ))
                                : ""}

                            {/* <div>
                            <Localization
                                onMouseEnter={() => {
                                    setShowExperienceSubmenu(false);
                                    setShowProductSubmenu(false);
                                    setShowSubmenuAction(false);
                                }}
                            />
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Toggler>
                {({ enabled: menuOpen, toggle: toggleMenuOpen }) => (
                    <div tw="lg:hidden bg-white sticky top-0 z-20">
                        <div tw="container px-4 mx-auto">
                            <div tw="flex justify-between items-center px-4 py-4 ">
                                <Link to="/">
                                    {logo?.gatsbyImageData ? (
                                        <GatsbyImage tw="w-full" image={logo?.gatsbyImageData} alt={logo?.title} />
                                    ) : (
                                        <img src={logo?.file?.url} alt={logo?.title} width={logo?.width} height={logo?.height} />
                                    )}
                                </Link>
                                <Hamburger open={menuOpen} onClick={toggleMenuOpen} />
                                {/* <Localization /> */}
                            </div>
                            {menuOpen && (
                                <div tw="h-[92vh] overflow-auto">
                                    <div tw="grid grid-cols-1 gap-y-2 mt-4">
                                        {headerNav?.map(({ name, url, subLinks }, idx) => (
                                            <div tw="px-4 py-4 border-b-2 border-sitegray" key={idx}>
                                                <Toggler>
                                                    {({ enabled: isOpen, toggle: toggleParent }) => (
                                                        <div>
                                                            <div tw="flex items-center justify-between ">
                                                                <NavLink
                                                                    tw="uppercase text-px18 font-circular-book"
                                                                    text={name}
                                                                    path={url !== "coming-soon" ? url : ""}
                                                                    showIcon={false}
                                                                />
                                                                {subLinks?.length ? <ToggleButton open={isOpen} onClick={toggleParent} /> : ""}
                                                            </div>
                                                            {isOpen && (
                                                                <div tw="flex flex-col pl-4">
                                                                    {subLinks?.map((subgroup, idx2) => (
                                                                        <div key={idx2}>
                                                                            <Toggler>
                                                                                {({ enabled: isOpenSub, toggle: toggleSub }) => (
                                                                                    <>
                                                                                        <div tw="flex justify-between items-center py-2">
                                                                                            <Link
                                                                                                to={
                                                                                                    subgroup?.url !== "coming-soon"
                                                                                                        ? subgroup?.url
                                                                                                        : ""
                                                                                                }
                                                                                                tw="text-px16 font-circular-book"
                                                                                            >
                                                                                                {subgroup?.label ? (
                                                                                                    <span
                                                                                                        dangerouslySetInnerHTML={{
                                                                                                            __html: subgroup?.label
                                                                                                                ?.childMarkdownRemark?.html,
                                                                                                        }}
                                                                                                    />
                                                                                                ) : (
                                                                                                    subgroup?.name
                                                                                                )}
                                                                                            </Link>
                                                                                            {subgroup?.subLinks?.length ? (
                                                                                                <ToggleButtonSub
                                                                                                    open={isOpenSub}
                                                                                                    onClick={toggleSub}
                                                                                                />
                                                                                            ) : (
                                                                                                ""
                                                                                            )}
                                                                                        </div>
                                                                                        {isOpenSub && subgroup?.subLinks?.length && (
                                                                                            <div tw="flex flex-col justify-between">
                                                                                                {subgroup?.subLinks?.map((subSubGroup, idx3) => (
                                                                                                    <Link
                                                                                                        tw="mb-4 items-center flex gap-4"
                                                                                                        to={
                                                                                                            subSubGroup?.url !== "coming-soon"
                                                                                                                ? subSubGroup?.url
                                                                                                                : ""
                                                                                                        }
                                                                                                        key={idx3}
                                                                                                    >
                                                                                                        {subSubGroup?.icon?.gatsbyImageData ? (
                                                                                                            <GatsbyImage
                                                                                                                tw="w-[44px] rounded-full bg-sitegray"
                                                                                                                image={
                                                                                                                    subSubGroup?.icon?.gatsbyImageData
                                                                                                                }
                                                                                                                alt={subSubGroup?.icon?.title}
                                                                                                            />
                                                                                                        ) : (
                                                                                                            ""
                                                                                                        )}
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
                                                                                                            dangerouslySetInnerHTML={{
                                                                                                                __html: subSubGroup?.label
                                                                                                                    ?.childMarkdownRemark?.html,
                                                                                                            }}
                                                                                                        />
                                                                                                        {subSubGroup?.url === "coming-soon" ? (
                                                                                                            <span tw="font-kallisto font-bold ml-4 text-px12 rounded bg-sky-gray px-4 py-1 text-white">
                                                                                                                Coming Soon
                                                                                                            </span>
                                                                                                        ) : (
                                                                                                            ""
                                                                                                        )}
                                                                                                    </Link>
                                                                                                ))}
                                                                                            </div>
                                                                                        )}
                                                                                    </>
                                                                                )}
                                                                            </Toggler>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </Toggler>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Toggler>
        </>
    );
}

export default Nav;
