import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <Link
      to={"/"}
      className="rounded-b-lg shadow-lg p-4 flex items-center sticky top-0 left-0 right-0 z-50 bg-White"
    >
      <img src="./assets/booktable-logo.png" alt="booktable-logo" />
      <h3 className="font-semibold text-sm ml-3">Pan Asian Restaurant</h3>
    </Link>
  );
};

export default DashboardHeader;
