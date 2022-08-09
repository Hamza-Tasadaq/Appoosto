import { BookTableForm } from "../../components";

const BookTable = () => {
  return (
    <div className="hidden md:block relative h-[856px]">
      <div
        className="pt-10 pb-32 font-semibold text-center text-White text-3xl"
        style={{
          backgroundImage: "url('./assets/tables-bg.png')",
        }}
      >
        BOOK A TABLE
      </div>
      <div className="absolute top-32 left-0 right-0 px-10 ">
        <div className="max-w-[1158px] mb-16  bg-White shadow-lg mx-auto rounded-lg overflow-hidden flex">
          <div className="bg-Electric-Brown shrink  flex-1 rounded-lg">
            <img
              className="opacity-80 h-full	"
              src="./assets/features-bg.png"
              alt="book table"
            />
          </div>
          <BookTableForm />
        </div>
      </div>
    </div>
  );
};

export default BookTable;
