import * as React from "react";
import tw, { theme } from "twin.macro";
import PlusIcon from "../icons/plus";
import MinusIcon from "../icons/minus";

export function NavLink({ showIcon = true, text, onClick, opened, onMouseLeave, onMouseOver, path, hasSubmenu, ...rest }) {
    function handleClick(e) {
        if (onClick) {
            onClick(e);
        }
    }

    function handleMouseOver(e) {
        if (onMouseOver) {
            onMouseOver(e);
        }
    }

    function handleMouseLeave(e) {
        if (onMouseLeave) {
            onMouseLeave(e);
        }
    }

    return (
        <a
            onFocus={() => {}}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            href={path}
            className="group"
            tw="text-px18 font-sf-regular flex items-center lg:py-7 border-b-4 uppercase"
            css={[!opened && tw`border-transparent`, opened && tw`border-solar-100`]}
            {...rest}
        >
            <span>{text}</span>
            {hasSubmenu && showIcon ? (
                <>
                    <div tw="ml-4 relative w-4 h-4 flex items-center justify-center">
                        {!opened && <PlusIcon stroke={theme`colors.charcoal-30`} />}
                        {opened && <MinusIcon stroke={theme`colors.solar-100`} />}
                    </div>
                </>
            ) : (
                ""
            )}
        </a>
    );
}

export default NavLink;
