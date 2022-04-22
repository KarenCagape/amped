import * as React from "react";
import tw, { theme } from "twin.macro";
import SliderArrow from "./icons/slider-arrow";

export default function Minus({ onClick, flipX = false, ...rest }) {
  const [toggleArrow, setToggleArrow] = React.useState(false);

  function handleArrowMouseEnter() {
    setToggleArrow(true);
  }

  function handleArrowMouseLeave() {
    setToggleArrow(false);
  }

  function handleArrowClick(e) {
    if (onClick) onClick(e);
  }
  return (
    <button
      onClick={handleArrowClick}
      onMouseEnter={handleArrowMouseEnter}
      onMouseLeave={handleArrowMouseLeave}
      {...rest}
    >
      <span
        tw="ease-in duration-100 inline-block scale-95"
        css={[
          !flipX && tw`origin-left hover:scale-100`,
          flipX && tw`rotate-180 hover:scale-100`,
        ]}
      >
        {toggleArrow && <SliderArrow stroke={theme`colors[solar-100]`} />}
        {!toggleArrow && <SliderArrow />}
      </span>
    </button>
  );
}
