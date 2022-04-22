import * as React from "react";
import tw, { styled } from "twin.macro";

export const Link = tw.a`text-default text-px16 font-book`;
export const WhiteLink = styled(Link)(() => [tw`text-white`]);

export default Link;
