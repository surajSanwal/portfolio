import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Head>
        <title>Suraj Sanwal | Software developer | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="https://surajsanwal.vercel.app" hreflang="en-US" />
        <meta name="google-site-verification" content="VRWdGoAOWfzHPuWv86oI6DVOeoUr6eBFaMiOczlSikk" />
        <meta
          name="description"
          content="I'm a software developer having experience in frontend and backend technologies. My portfolio is a representation of all that I've learned and accomplished as a  developer."
        />
        <meta
          name="og:title"
          content="Suraj Sanwal | Software developer | Portfolio"
        />
        <meta
          name="og:description"
          content="I'm a software developer having experience in frontend and backend technologies. My portfolio is a representation of all that I've learned and accomplished as a  developer."
        />
        <meta name="og:image" content="/logo.png" />
        <meta
          name="keywords"
          content="Software Developer, Backend Developer, Frontend, Backend, Frontend developer, Portfolio, Developer, web developer, web design, web design solutions, react developer, angular developer, JS developer, Javascript developer, Designer, MERN stack developer, mean stack developer, bootstrap, html, css, Suraj Sanwal"
        />
        <meta
          name="subject"
          content="Suraj Sanwal | Software Developer | Portfolio"
        />
        <meta name="copyright" content="Suraj Sanwal" />
        <meta name="language" content="ES" />
        <meta name="hostname" content="https://surajsanwal.vercel.app//" />
        <meta name="expected-hostname" content="https://surajsanwal.vercel.app/" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Cache-Control" content="no-cache" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemProp="name"
          content="Suraj Sanwal | Software developer | Portfolio"
        />
        <meta
          itemProp="description"
          content="I'm a software developer having experience in frontend and backend technologies. My portfolio is a representation of all that I've learned and accomplished as a  developer."
        />
        <meta itemProp="image" content="/logo.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://portfolio-coral-one.now.sh" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Suraj Sanwal | Software developer | Portfolio"
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
          content="Suraj Sanwal | Software developer | Portfolio"
        />
        <meta
          name="twitter:description"
          content="I'm a software developer having experience in frontend and backend technologies. My portfolio is a representation of all that I've learned and accomplished as a  developer."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Meta Tags Generated via http://heymeta.com  */}
      </Head>
      <h1 className="brand open-sans-font"> Suraj Sanwal </h1>
      <ul className="links">
        <li>
          <Link href="/">
            <a className="prata-font">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#services">
            <a className="prata-font">Services</a>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <a className="prata-font">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact-us">
            <a className="prata-font">Contact Us</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
