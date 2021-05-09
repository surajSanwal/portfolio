import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [toggle, setToggle] = useState<string>("");
  const { asPath } = useRouter();
  const handleToggle = useCallback(() => {
    setToggle(toggle.length ? "" : "show");
  }, [toggle]);

  const hideMenu = useCallback(() => {
    setToggle("");
  }, [toggle]);

  return (
    <header>
      <Head>
        <title lang="en">Suraj Sanwal | Software Developer | Portfolio</title>
        <link rel="icon" href="/favicon.ico" hrefLang="en-US" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
        <link
          rel="alternate"
          href="https://surajsanwal.vercel.app"
          hrefLang="en-US"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="VRWdGoAOWfzHPuWv86oI6DVOeoUr6eBFaMiOczlSikk"
        />
        <meta
          name="description"
          content="I'm a software developer having experience in frontend and backend technologies. My portfolio is a representation of all that I've learned and accomplished as a  developer."
        />
        <meta
          name="og:title"
          content="Suraj Sanwal | Software Developer | Portfolio"
        />
        <meta
          name="og:description"
          content="I'm a software developer having experience in frontend and backend technologies. My portfolio is a representation of all that I've learned and accomplished as a  developer."
        />
        <meta name="og:image" content="/logo.png" />
        <meta
          name="keywords"
          content="Software Developer, Backend Developer, Frontend, Backend, Frontend developer, Portfolio, Developer, web developer, web design, web design solutions, react developer, angular developer, JS developer, Javascript developer, Designer, MERN stack developer, mean stack developer, bootstrap, html, css, Suraj Sanwal, Suraj, Amrapali, Amrapali Group of institutes"
        />
        <meta
          name="subject"
          content="Suraj Sanwal | Software Developer | Portfolio"
        />
        <meta name="copyright" content="Suraj Sanwal" />
        <meta name="language" content="EN" />
        <meta name="hostname" content="https://surajsanwal.vercel.app//" />
        <meta
          name="expected-hostname"
          content="https://surajsanwal.vercel.app/"
        />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Cache-Control" content="no-cache" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemProp="name"
          content="Suraj Sanwal | Software Developer | Portfolio"
        />
        <meta
          itemProp="description"
          content="I'm a software developer having experience in frontend and backend technologies. My portfolio is a representation of all that I've learned and accomplished as a  developer."
        />
        <meta itemProp="image" content="/logo.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://surajsanwal.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Suraj Sanwal | Software Developer | Portfolio"
        />
        <meta
          property="og:description"
          content="I'm a software developer having experience in frontend and backend technologies. My portfolio is a representation of all that I've learned and accomplished as a  developer."
        />
        <meta property="og:image" content="/logo.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Suraj Sanwal | Software Developer | Portfolio"
        />
        <meta
          name="twitter:description"
          content="I'm a software developer having experience in frontend and backend technologies. My portfolio is a representation of all that I've learned and accomplished as a  developer."
        />
        <meta name="twitter:image" content="/logo.png" />
        {/* monetization */}
        <meta name="monetization" content="$ilp.uphold.com/admHxDij9kPN"></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
          crossOrigin="anonymous"
        />

        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>
      </Head>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
        crossOrigin="anonymous"
      ></script>
      <h1 className="brand open-sans-font"> Suraj Sanwal </h1>
      <div className="pos-f-t">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${toggle}`}>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className={`nav-item ${asPath === "/" ? "active" : ""}`}>
                <Link href="/" locale="en-US">
                  <a
                    href="/"
                    className="nav-link prata-font"
                    onClick={hideMenu}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  asPath === "/#experience" ? "active" : ""
                }`}
              >
                <Link href="/#experience" locale="en-US">
                  <a className="nav-link prata-font" onClick={hideMenu}>
                    Experience
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  asPath === "/#services" ? "active" : ""
                }`}
              >
                <Link href="/#services" locale="en-US">
                  <a className="nav-link prata-font" onClick={hideMenu}>
                    Services
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  asPath === "/#projects" ? "active" : ""
                }`}
              >
                <Link href="/#projects" locale="en-US">
                  <a className="nav-link prata-font" onClick={hideMenu}>
                    Projects
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  asPath === "/#contact-me" ? "active" : ""
                }`}
              >
                <Link href="/#contact-me" locale="en-US">
                  <a className="nav-link prata-font" onClick={hideMenu}>
                    Contact me
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
