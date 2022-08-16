import { Link } from "react-router-dom";
import { BookTableForm } from "../../components";

const BookTable = () => {
  return (
    <div>
      <div className="rounded-b-lg shadow-lg p-4 flex items-center sticky top-0 left-0 right-0 z-50 bg-White justify-between">
        <Link to={"/"}>
          <img src="./assets/headers-logo-gray.png" alt="headers-logo-gray" />
        </Link>
        <img src="./assets/flag.png" alt="flag" />
      </div>
      <BookTableForm />
    </div>
  );
};

export default BookTable;
