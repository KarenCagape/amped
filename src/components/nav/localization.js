import * as React from 'react';
import tw, { theme } from 'twin.macro';

import ChevronDown from '../icons/chevron-down';
import Globe from '../icons/globe';

export function Localization({ onMouseEnter, onMouseLeave }) {
  const [opened, setOpened] = React.useState(false);

  function handleMouseEnter(e) {
    setOpened(true);

    if (onMouseEnter) {
      onMouseEnter(e);
    }
  }

  function handleMouseLeave(e) {
    setOpened(false);

    if (onMouseLeave) {
      onMouseEnter(e);
    }
  }

  return (
    <div
      role="presentation"
      tw="relative cursor-pointer text-px18 font-sf-light "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="#/"
        tw="lg:py-7 grid grid-cols-3 justify-between items-center gap-2"
      >
        {/* <StaticImage src="../../images/ico-globe.png" layout="fixed" /> */}
        <Globe />
        <span tw="text-px18 font-sf-light">EN</span>
        {/* <span tw="lg:hidden inline-block w-2" /> */}
        {/* <StaticImage
          src="../../images/ico-arrow-down-line.png"
          layout="fixed"
        /> */}
        {!opened && <ChevronDown />}
        {opened && <ChevronDown stroke={theme`colors[solar-100]`} />}
      </a>
      {/* {opened && (

      )} */}
      <ul
        tw="duration-500 ease-in-out mt-1 rounded-md absolute top-full right-0 bg-white"
        style={{
          boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.05)',
        }}
        css={[
          opened && tw`opacity-100 pointer-events-auto`,
          !opened && tw`opacity-0 pointer-events-none`,
        ]}
      >
        <li>
          <a
            href="#/"
            tw="inline-block py-4 px-6 hover:text-solar-100 active:text-solar-80"
          >
            English
          </a>
        </li>
        <li>
          <a
            href="#/"
            tw="inline-block py-4 px-6 hover:text-solar-100 active:text-solar-80"
          >
            Africa
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Localization;
