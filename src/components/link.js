import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

export default function Link({ href, children, activeStyle, getProps, ...rest }) {
    const internal = /^\/(?!\/)/.test(href);
    return internal ? (
        <GatsbyLink to={href} activeStyle={activeStyle} getProps={getProps} {...rest}>
            {children}
        </GatsbyLink>
    ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
            {children}
        </a>
    );
}

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    activeStyle: PropTypes.object,
};
