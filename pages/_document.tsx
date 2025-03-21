import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Suraj Sanwal | Experienced Software Developer | Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="alternate" href="https://surajsanwal.vercel.app" hrefLang="en" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" content="VRWdGoAOWfzHPuWv86oI6DVOeoUr6eBFaMiOczlSikk" />

          <meta
            name="description"
            content="Suraj Sanwal is a versatile software developer with extensive experience in both frontend and backend technologies. Explore my portfolio to see my projects and accomplishments."
          />
          <meta
            name="og:title"
            content="Suraj Sanwal | Experienced Software Developer | Portfolio"
          />
          <meta
            name="og:description"
            content="Suraj Sanwal is a versatile software developer with extensive experience in both frontend and backend technologies. Explore my portfolio to see my projects and accomplishments."
          />
          <meta property="og:image" content="/public/logo.png" />
          <meta
            name="keywords"
            content="Suraj Sanwal, Software Developer, Full Stack Developer, Frontend Developer, Backend Developer, Portfolio, Web Developer, React Developer, Angular Developer, JavaScript Developer, MERN Stack Developer, Web Design, Amrapali University, Publicis Sapient, Python, AI assisted software developer, GCP, Cloud Native, Next Developer, Hight Rated Software Developer, Top Contributer, Linkedin, Github, Stackoverflow, Leetcode, Twitter, Facebook, Instagram, Nainital, Haldwani, Uttarakhand, India, smartData Enterprises, Software Engineer, Senior Software Developer, Jest, Cypress, Testing Library, React Testing Library, RTL, Jest, Cypress, Testing, Testing Framework"
          />
          <meta name="subject" content="Suraj Sanwal | Software Developer | Portfolio" />
          <meta name="author" content="Suraj Sanwal" />
          <meta name="copyright" content="Suraj Sanwal" />
          <meta name="language" content="EN" />
          <meta name="hostname" content="https://surajsanwal.vercel.app/" />
          <meta name="robots" content="index, follow" />
          <meta name="revisit-after" content="7 days" />
          <meta name="rating" content="General" />
          <meta httpEquiv="Expires" content="0" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Cache-Control" content="no-cache" />

          {/* Google / Search Engine Tags */}
          <meta itemProp="name" content="Suraj Sanwal | Experienced Software Developer | Portfolio" />
          <meta
            itemProp="description"
            content="Suraj Sanwal is a versatile software developer with extensive experience in both frontend and backend technologies. Explore my portfolio to see my projects and accomplishments."
          />
          <meta itemProp="image" content="/public/logo.png" />

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://surajsanwal.vercel.app" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Suraj Sanwal | Experienced Software Developer | Portfolio"
          />
          <meta
            property="og:description"
            content="Suraj Sanwal is a versatile software developer with extensive experience in both frontend and backend technologies. Explore my portfolio to see my projects and accomplishments."
          />
          <meta property="og:image" content="/public/logo.png" />
          <meta property="og:site_name" content="Suraj Sanwal Portfolio" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Suraj Sanwal | Experienced Software Developer | Portfolio"
          />
          <meta
            name="twitter:description"
            content="Suraj Sanwal is a versatile software developer with extensive experience in both frontend and backend technologies. Explore my portfolio to see my projects and accomplishments."
          />
          <meta name="twitter:image" content="/public/logo.png" />

          {/* Monetization */}
          <meta name="monetization" content="$ilp.uphold.com/admHxDij9kPN" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* LinkedIn Profile Badge */}
          <script
            src="https://platform.linkedin.com/badges/js/profile.js"
            async
            defer
            type="text/javascript"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;