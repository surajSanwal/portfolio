import Link from "next/link";
import { useEffect } from "react";

const LinkedIn = () => {
  useEffect(() => {
    // Ensure the LinkedIn script is loaded
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="badge">
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="ssanwal"
        data-version="v1"
      >
        <Link
          href="https://in.linkedin.com/in/ssanwal?trk=profile-badge"
          passHref
          className="badge-base__link LI-simple-link">Suraj Sanwal
        </Link>
      </div>
    </div>
  );
};

export default LinkedIn;
