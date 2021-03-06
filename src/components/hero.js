import * as React from "react";
import "twin.macro";

export function Hero({ bgImage, bgColor, children, ...rest }) {
    return (
        <div tw="lg:flex lg:flex-col lg:justify-center lg:items-center h-screen" {...rest}>
            <div tw="min-h-full w-full flex lg:justify-center lg:items-center ">
                <div tw="container mx-auto pt-24 px-4 lg:pt-12 text-center block lg:text-left lg:flex lg:justify-between lg:items-center">
                    {children}
                </div>
            </div>
        </div>
    );
}

Hero.Caption = function Caption({ children, ...rest }) {
    return (
        <div tw="sm:w-full lg:w-2/5 flex-none" {...rest}>
            {children}
        </div>
    );
};

Hero.Caption.Header = function Header({ children, ...rest }) {
    return (
        <div tw="mb-4 text-px36 lg:text-[56px] 2xl:text-px72 leading-none font-circular-book" {...rest}>
            {children}
        </div>
    );
};

Hero.Caption.Text = function Text({ children, ...rest }) {
    return (
        <div tw="text-px18 lg:text-px28 2xl:text-px36 font-circular-book" {...rest}>
            <div tw="leading-normal">{children}</div>
        </div>
    );
};

export default Hero;
