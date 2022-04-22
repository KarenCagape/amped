import * as React from 'react';
import tw from 'twin.macro';
import Localization from './localization';
import NavLink from './nav-link';
import { Link } from 'gatsby';
import Logo from '../_/logo';
import SubMenu from './sub-menu';
import SubMenuStory from './sub-menu-story';
import SubMenuAction from './sub-menu-action';
import Hamburger from '../hamburger';
import Toggler from '../toggler';
import WowSolarLink from './wowsolar-link';

function ToggleButton({ open, onClick }) {
  return (
    <button tw="text-secondary p-2 text-2xl" onClick={onClick}>
      {!open && '+'}
      {open && '-'}
    </button>
  );
}

export function Nav() {
  const [showProductSubmenu, setShowProductSubmenu] = React.useState(false);
  const [showExperienceSubmenu, setShowExperienceSubmenu] =
    React.useState(false);
  const [showSubmenAction, setShowSubmenuAction] = React.useState(false);

  return (
    <>
      <div
        role="presentation"
        onMouseLeave={() => {
          setShowProductSubmenu(false);
          setShowExperienceSubmenu(false);
          setShowSubmenuAction(false);
        }}
        tw="sticky top-0 z-20 bg-white hidden lg:block"
      >
        <div tw="w-11/12 mx-auto flex justify-between items-center">
          <Logo />
          <div tw="flex justify-between w-6/12">
            <div className="group">
              <NavLink
                opened={showProductSubmenu}
                text="PRODUCTS"
                path="/"
                onClick={(e) => e.preventDefault()}
                onMouseOver={() => {
                  setShowProductSubmenu(true);
                  setShowExperienceSubmenu(false);
                  setShowSubmenuAction(false);
                }}
              />
              <SubMenu
                tw="duration-500 ease-in-out"
                css={[
                  showProductSubmenu && tw`opacity-100 pointer-events-auto`,
                  !showProductSubmenu && tw`opacity-0 pointer-events-none`,
                ]}
              />
            </div>
            <div>
              <Link
                to="/innovations"
                tw="text-lg flex items-center lg:py-7 border-b-4 border-transparent hover:border-primary"
                onMouseOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowExperienceSubmenu(false);
                  setShowProductSubmenu(false);
                  setShowSubmenuAction(false);
                }}
              >
                INNOVATION
              </Link>
            </div>
            <div className="group">
              <NavLink
                opened={showSubmenAction}
                text="ACTION"
                path="#/"
                onClick={(e) => e.preventDefault()}
                onMouseOver={() => {
                  setShowSubmenuAction(true);
                  setShowProductSubmenu(false);
                  setShowExperienceSubmenu(false);
                }}
              />
              <SubMenuAction
                tw="duration-500 ease-in-out"
                css={[
                  showSubmenAction && tw`opacity-100 pointer-events-auto`,
                  !showSubmenAction && tw`opacity-0 pointer-events-none`,
                ]}
              />
            </div>
            <div className="group">
              <NavLink
                opened={showExperienceSubmenu}
                text="ABOUT"
                onClick={(e) => e.preventDefault()}
                onMouseOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowExperienceSubmenu(true);
                  setShowProductSubmenu(false);
                  setShowSubmenuAction(false);
                }}
              />
              <SubMenuStory
                tw="duration-500 ease-in-out"
                css={[
                  showExperienceSubmenu && tw`opacity-100 pointer-events-auto`,
                  !showExperienceSubmenu && tw`opacity-0 pointer-events-none`,
                ]}
              />
            </div>
            <div>
              <Localization
                onMouseEnter={() => {
                  setShowExperienceSubmenu(false);
                  setShowProductSubmenu(false);
                  setShowSubmenuAction(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Toggler>
        {({ enabled: menuOpen, toggle: toggleMenuOpen }) => (
          <div tw="lg:hidden bg-white sticky top-0 z-20">
            <div tw="flex justify-between items-center px-4 py-4 ">
              <Hamburger open={menuOpen} onClick={toggleMenuOpen} />
              <Logo />
              <Localization />
            </div>
            {menuOpen && (
              <div tw="grid grid-cols-1 gap-y-2 mt-4">
                <div tw="px-4 py-1">
                  <Toggler>
                    {({ enabled: productsOpen, toggle: toggleProducts }) => (
                      <div>
                        <div tw="flex items-center justify-between ">
                          <NavLink text="PRODUCTS" path="/" showIcon={false} />
                          <ToggleButton
                            open={productsOpen}
                            onClick={toggleProducts}
                          />
                        </div>
                        {productsOpen && (
                          <div tw="flex flex-col pl-4">
                            <div>
                              <Toggler>
                                {({
                                  enabled: lightingAndPhoneChargingOpen,
                                  toggle: toggleLightingAndPhoneCharging,
                                }) => (
                                  <>
                                    <div tw="flex justify-between items-center">
                                      <Link to="/product-lighting-and-phone-charging">
                                        Lighting and Phone Charging
                                      </Link>
                                      <ToggleButton
                                        open={lightingAndPhoneChargingOpen}
                                        onClick={toggleLightingAndPhoneCharging}
                                      />
                                    </div>
                                    {lightingAndPhoneChargingOpen && (
                                      <div tw="pl-4 flex flex-col justify-between">
                                        <WowSolarLink
                                          path="/product-wowsolar60"
                                          number={60}
                                        />
                                        <WowSolarLink
                                          path="/product-wowsolar100"
                                          number={100}
                                        />
                                        <WowSolarLink
                                          path="/product-wowsolar400"
                                          number={400}
                                        />
                                      </div>
                                    )}
                                  </>
                                )}
                              </Toggler>
                            </div>
                            <div>
                              <Toggler>
                                {({
                                  enabled: televisionOpen,
                                  toggle: toggleTelevisionOpen,
                                }) => (
                                  <>
                                    <div tw="flex justify-between items-center">
                                      <Link to="/product-television">
                                        Television
                                      </Link>
                                      <ToggleButton
                                        open={televisionOpen}
                                        onClick={toggleTelevisionOpen}
                                      />
                                    </div>
                                    {televisionOpen && (
                                      <div tw="pl-4">
                                        <WowSolarLink
                                          path="/product-wowsolartv24100"
                                          number="TV24100"
                                        />
                                        <WowSolarLink
                                          path="/product-wowsolartv32120"
                                          number="TV32120"
                                        />
                                      </div>
                                    )}
                                  </>
                                )}
                              </Toggler>
                            </div>
                            <div tw="mb-2">
                              <Toggler>
                                {({
                                  enabled: fanOpen,
                                  toggle: togglePanOpen,
                                }) => (
                                  <>
                                    <div tw="flex justify-between items-center">
                                      <Link
                                        to="/product-fan"
                                        text="Solar Generator"
                                      >
                                        Fan
                                      </Link>
                                      <ToggleButton
                                        open={fanOpen}
                                        onClick={() => {
                                          togglePanOpen();
                                        }}
                                      />
                                    </div>
                                    {fanOpen && (
                                      <div tw="flex flex-col justify-between pl-4">
                                        <WowSolarLink
                                          path="/product-wowsolarfan16100"
                                          number="FAN16100"
                                        />
                                        <WowSolarLink
                                          path="/product-wowsolarfan16120"
                                          number="FAN16120"
                                        />
                                      </div>
                                    )}
                                  </>
                                )}
                              </Toggler>
                            </div>
                            <Link>Grid Backup</Link>
                          </div>
                        )}
                      </div>
                    )}
                  </Toggler>
                </div>
                <div tw="flex items-center justify-between px-4 py-1">
                  <NavLink
                    text="INNOVATIONS"
                    path="/innovations"
                    showIcon={false}
                  />
                </div>
                <div tw="px-4 py-1">
                  <Toggler>
                    {({
                      enabled: experienceOpen,
                      toggle: toggleExperienceOpen,
                    }) => (
                      <>
                        <div tw="flex items-center justify-between ">
                          <NavLink
                            text="EXPERIENCE"
                            path="/#"
                            showIcon={false}
                          />
                          <ToggleButton
                            open={experienceOpen}
                            onClick={toggleExperienceOpen}
                          />
                        </div>
                        {experienceOpen && (
                          <div tw="pl-4 flex flex-col justify-between">
                            <Link tw="mb-4" to="/experience-amped-story">
                              Amped Story
                            </Link>
                            <Link
                              tw="mb-4"
                              to="/experience-customer-experience"
                            >
                              Customer Experience
                            </Link>
                            <Link tw="mb-4" to="/experience-team">
                              Team
                            </Link>
                            <Link tw="mb-4" to="/experience-become-distributor">
                              Become a Distributor
                            </Link>
                            <Link tw="mb-4" to="/experience-contact-us">
                              Contact us
                            </Link>
                          </div>
                        )}
                      </>
                    )}
                  </Toggler>
                </div>
              </div>
            )}
          </div>
        )}
      </Toggler>
    </>
  );
}

export default Nav;
