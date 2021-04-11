import React from "react";

interface SemiCurvedCardProps {
  src?: string,
  srcset?: string,
  title?: string,
  description?: string,
}


const SemiCurvedCard: React.FC<SemiCurvedCardProps> = ({
  title = "",
  description = "",
}) => {
  return (
    <div className="semi-curved">
      <div className="image">
        <div className="detail">
          <p>{title}</p>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default SemiCurvedCard;