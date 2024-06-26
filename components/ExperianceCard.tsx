"use-client"
import Link from "next/link";
import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  from: string;
  to: string;
  description: string;
  location: string;
  logo: string;
  parentCls: string;
  url: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title = "",
  company = "",
  from = "",
  to = "",
  description = "",
  location = "",
  logo = "",
  parentCls = "",
  url = "",
}) => {
  return (
    <div className={`experience-card ${parentCls}`}>
      <img className={`image`} alt={title} src={logo} width="200" />
      <div className="experience-details-cover">
        <div>
          <p className="title">{title}</p>
          <Link href={url} target="_blank">
            <p className="company">
              {company}, {location}
            </p>
          </Link>
          <p className="date">
            {from}-{to}
          </p>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
