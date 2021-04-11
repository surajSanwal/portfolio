import React, { Fragment, ReactNode } from "react";
import Header from "./header";

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="container">{children}</div>
    </Fragment>
  );
}

export default Layout;
