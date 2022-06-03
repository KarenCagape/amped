import * as React from "react";
import "twin.macro";
import { Link } from "gatsby";

export function SubMenuAction({ submenu, ...rest }) {
    return (
        <div tw="absolute z-20 w-full left-0 top-full bg-white" {...rest}>
            <div tw="font-circular-book w-10/12 mx-auto py-16 flex items-center justify-between lg:text-px18 2xl:text-px21">
                {submenu?.map(({ label, url }, idx) => (
                    <React.Fragment key={idx}>
                        <Link tw="hover:text-solar-100 active:text-solar-80" to={url}>
                            <span dangerouslySetInnerHTML={{ __html: label?.childMarkdownRemark?.html }} />
                        </Link>
                        {submenu?.length > idx + 1 ? (
                            <div>
                                <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
                            </div>
                        ) : (
                            ""
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SubMenuAction;
