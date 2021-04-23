import { Fragment } from "react";
import CircleCard from "../components/circleCard";
import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";
import { projects, services } from "../data";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {


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
          <div className="project-list mt-3">
            {projects.map((x, i) => (
              <ProjectCard {...x} parentCls="pt-30" key={i} />
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
            <li>
              <a href="https://wa.me/919760843156?text=Hi%20Suraj,%20I%20want%20to%20connect%20with%20you%20on%20WhatsApp!" target="_blank"
                rel="noopener noreferrer">
                <img src="/whatsapp.png" />
                <span>WhatsApp</span>
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
