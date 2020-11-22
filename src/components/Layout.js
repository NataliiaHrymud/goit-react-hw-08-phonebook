import React from "react";
import Navigation from "./Navigation/Navigation";

const Layout = ({ children }) => (
  <>
    <Navigation />
    <main>{children}</main>
  </>
);

export default Layout;
