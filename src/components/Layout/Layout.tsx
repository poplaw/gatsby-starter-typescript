/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react";

const Layout: FC = ({ children }) => {
    return (
        <>
            <main>{children}</main>
        </>
    );
};

export default Layout;
