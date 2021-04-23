import React from "react";

interface ExperienceCardProps {
  title: string,
  company: string,
  from: Date | string,
  to: Date | string,
  description: string,
  location: string,
  logo: string,
  parentCls: string,
}


const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title = "",
  company = "",
  from = "",
  to = "",
  description = "",
  location = "",
  logo = "",
  parentCls = ""
}) => {
  return (
    <div className={`experience-card ${parentCls}`}>
      <img className={`image`} alt={title} src={logo} width="200" />
      <div className="experience-details-cover">

        <div>
          <p className="title">{title}</p>
          <p className="company">{company}, {location}</p>
          <p className="date">
            {from}-{to}
          </p>
        </div>
        <p className="description">
          {description}
        </p>

      </div>
    </div >
  );
}


export default ExperienceCard