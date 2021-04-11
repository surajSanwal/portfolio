import React, { useCallback, useContext } from "react";
import { FirebaseContext } from "../firebase/FirebaseProvider";
// import { urlViewTracking } from "../firebase/logger";

interface CircleCardProps {
  src?: string,
  title?: string,
  link?: string,
  cls?: string,
  parentCls?: string,
}


const CircleCard: React.FC<CircleCardProps> = ({
  src = "",
  title = "",
  link = "",
  cls = "",
  parentCls = "",
}) => {

  const { tracking } = useContext(FirebaseContext);
  const onClick = useCallback(
    () => {
      tracking.logEvent('page_view', {
        url_location: src,
        url_title: title,
      });
      window.open(link, "_blank")
    },
    [],
  )
  return (
    <div className={`circle-card ${parentCls}`}>
      <button type="button" className="btn btn-link" onClick={onClick}>
        <img className={`image ${cls}`} alt={src} src={src} width="200" />
        <p className="title">{title}</p>
      </button>
    </div>
  );
}


export default CircleCard