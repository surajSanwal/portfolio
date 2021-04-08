import React, { useCallback } from "react";
import { urlViewTracking } from "../firebase/logger";

export default function CircleCard({
  src = "",
  title = "",
  link = "",
  cls = "",
  parentCls = "",
}) {
  const onClick = useCallback(
    () => {
      urlViewTracking(link);
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
