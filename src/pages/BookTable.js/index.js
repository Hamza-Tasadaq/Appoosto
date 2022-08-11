import { BookTableForm } from "../../components";

const BookTable = () => {
  return (
    <div>
      <div className="rounded-b-lg shadow-lg p-4 flex items-center">
        <img src="./assets/vegmet-small.png" alt="vegmet-small" />
        <h3 className="font-semibold text-sm ml-3">Pan Asian Restaurant</h3>
      </div>
      <BookTableForm />
    </div>
  );
};

export default BookTable;
