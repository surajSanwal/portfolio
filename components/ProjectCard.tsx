import React, { useCallback, useContext } from "react";
import { FirebaseContext } from "../firebase/FirebaseProvider";

interface ProjectCardProps {
  src?: string;
  title?: string;
  link?: any;
  cls?: string;
  parentCls?: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  src = "",
  title = "",
  link = "",
  cls = "",
  parentCls = "",
  description = "",
}) => {
  const { tracking } = useContext(FirebaseContext);
  const onClick = useCallback((url: string) => {
    tracking &&
      tracking.logEvent("url_visit", {
        url_location: url,
        url_title: title,
      });
    window.open(url, "_blank");
  }, []);
  return (
    <div className={`project-card ${parentCls}`}>
      <img className={`image ${cls}`} alt={src} src={src} width="200" />
      <div className="project-details-cover">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <div className="link-cover">
          {/* <p>Links</p> */}
          {Object.keys(link).map((item, i) => (
            <div key={i}>
              <span>{item}</span> :{" "}
              <button
                type="button"
                className="btn btn-link"
                onClick={() => onClick(link[item])}
              >
                {link[item]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
