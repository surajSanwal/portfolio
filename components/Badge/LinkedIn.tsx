import Link from "next/link";

const LinkedIn = () => {
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
          className="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/ssanwal?trk=profile-badge"
        >
          Suraj Sanwal
        </Link>
      </div>
    </div>
  );
};

export default LinkedIn;
