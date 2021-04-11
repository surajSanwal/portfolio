import { Fragment } from "react";
import CircleCard from "../components/circleCard";
import Layout from "../components/layout";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  const services = [
    {
      src: "/typescript.png",
      srcset: "/typescript.png",
      title: "TypeScript",
      link: " https://www.typescriptlang.org/",
    },
    {
      src: "/javascript.png",
      srcset: "/javascript.png",
      title: "JavaScript",
      link: "https://www.javascript.com/",
    },
    {
      src: "/react.png",
      srcset: "/react.png",
      title: "ReactJs",
      link: "https://reactjs.org/",
    },
    {
      src: "/react.png",
      srcset: "/react.png",
      title: "React Native",
      link: "https://reactnative.dev/",
    },
    {
      src: "/angular.png",
      srcset: "/angular.png",
      title: "Angular",
      link: "https://angular.io/",
    },
    {
      src: "/docker.png",
      srcset: "/docker.png",
      title: "Docker",
      link: "https://www.docker.com/",
    },
    {
      src: "/graphql.png",
      srcset: "/graphql.png",
      title: "GraphQl",
      link: "https://graphql.org/",
    },
    {
      src: "/node.png",
      srcset: "/node.png",
      title: "Node",
      link: "https://nodejs.org/en/",
    },
    {
      src: "/nextjs-lg.png",
      srcset: "/nextjs-lg.png",
      title: "NextJs",
      link: "https://nextjs.org/",
    },
    // {
    //   src: "/frontity.svg",
    //   srcset: "/frontity.svg",
    //   title: "Frontity",
    //   link: "https://frontity.org/",
    // },
  ];

  const projects = [
    {
      src: "/liviausa.png",
      title: "Livia USA",
      link: "https://liviausa.com/",
    },
    {
      src: "/liviaConnect.png",
      title: "Livia Connect",
      link: "https://liviaconnect.com/",
    },
    {
      src: "/liviaRx.png",
      title: "Livia Rx",
      link: "https://liviarx.com/",
    },
    {
      src: "/adidas.png",
      title: "Adidas iOS",
      link: "https://apps.apple.com/us/app/adidas/id1266591536",
    },
    {
      src: "/adidas.png",
      title: "Adidas Android",
      link: "https://play.google.com/store/apps/details?id=com.adidas.app",
    },
    {
      src: "/cidr.png",
      title: "Circular Drive(CIDR) iOS",
      link: "https://apps.apple.com/us/app/circulardrive/id1438519496?ls=1",
    },
    {
      src: "/cidr.png",
      title: "Circular Drive(CIDR) Android",
      link: "https://play.google.com/store/apps/details?id=com.cidr",
    },
    {
      src: "/act.png",
      title: "ACT Nurses Portal",
      link: "http://acthomehealthservices.com/nurse-portal/",
    },
    {
      src: "/ajivar.png",
      title: "Ajivar (iOS)-The Resiliency App",
      link: "https://apps.apple.com/us/app/u-ajivar-resiliency-app/id1469213798",
    },
    {
      src: "/ajivar.png",
      title: "Ajivar (Android)-The Resiliency App",
      link: "https://play.google.com/store/apps/details?id=com.ajivar.utajivar&hl=en",
    },
    {
      src: "/ohc.png",
      title: "Overture Health Care (iOS)",
      link: "https://apps.apple.com/in/app/overture-health-care/id1469870955",
    },
    {
      src: "/ohc.png",
      title: "Overture Health Care (Android)",
      link: "https://play.google.com/store/apps/details?id=com.overture.health&hl=en",
    },
    {
      src: "/qvik.png",
      title: "Qvik Task",
      link: "http://54.71.18.74:4601/",
    },
    {
      src: "/procure.png",
      title: "Procure Network Core",
      link: "https://core.procurenetworks.com/",
    },
    {
      src: "/procure.png",
      title: "Procure Network Order",
      link: "https://order.procurenetworks.com/",
    },
    {
      src: "/project-reachlive.png",
      title: "ReachLive",
      link: "http://reachlive.com/",
    },
    {
      src: "/project-reachlive.png",
      title: "ReachLive Admin",
      link: "http://admin.reachlive.com/",
    },
  ];

  return (
    <Layout>
      <main>
        <section>
          <div className="intro">
            <div className="intro-image">
              <img src="/profile.png" alt="Suraj Sanwal | profile image" />
            </div>
            <span className="intro-desc">
              I'm a software developer having experience in frontend and backend technologies. My portfolio is a representation of all that I've learned and accomplished as a  developer. I am seeking a position in which I can increase my knowledge, skill set and inter-personal skills, while fully utilizing my experience and abilities working with team members who support and teach each other to achieve goals above and beyond expectations.
            </span>
          </div>
        </section>
        <section id="services" className="mb-50">
          <span className="section-question">What do you need help With?</span>
          <h4 className="section-title">Services</h4>
          <div className="card-list">
            {services.map((x, i) => (
              <Fragment key={i}>
                <CircleCard {...x} />
              </Fragment>
            ))}
          </div>
        </section>
        <section id="projects" className="mb-50">
          <h4 className="section-title">Projects</h4>
          <div className="card-list mt-3">
            {projects.map((x, i) => (
              <Fragment key={i}>
                <CircleCard {...x} parentCls="pt-30" />
              </Fragment>
            ))}
          </div>
        </section>
        <section className="mb-20">
          <div className="card">
            <div className="card-body">
              Download My{" "}
              <a
                href="https://docs.google.com/document/d/1p1hxJlQ6pNpVkRtIBWvV-GwwDqGvWk4OYd_srl7jV_M/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Curriculum vitae
              </a>
            </div>
          </div>
        </section>
        <br />
        <section className="mb-50" id="contact-me">
          <h4 className="section-title">Connect with Me</h4>
          <ul className="connect-with-me">
            <li>
              <a
                href="https://www.instagram.com/swraporians/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram.png" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/im_sanwal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/twitter.png" />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:sonusanwal65@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/mail.png" />
                <span>Email</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/surajSanwal" target="_blank"
                rel="noopener noreferrer">
                <img src="/github.png" />
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ssanwal" target="_blank"
                rel="noopener noreferrer">
                <img src="/linkedIn.png" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="skype:live:sonusanwal65" target="_blank"
                rel="noopener noreferrer">
                <img src="/skype.png" />
                <span>Skype</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <span>
          Developed by Me. Developed in
          <img src="/nextjs-sm.png" alt="nextjs" />
        </span>
      </footer>
    </Layout>
  );
}

export default Home;
