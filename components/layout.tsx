import React, { Fragment, ReactNode } from "react";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  React.useEffect(() => {
    if (typeof window !== undefined) {
      const html = document.querySelector("html");
      if (html) html.setAttribute("lang", "en");
    }
  }, []);
  return (
    <Fragment>
      <Header />
      <div className="container">{children}</div>
    </Fragment>
  );
};

export default Layout;
