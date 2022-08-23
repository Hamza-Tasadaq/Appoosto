import { Link } from "react-router-dom";

const NotForYou = () => {
  return (
    <div className="h-screen w-screen bg-Black flex flex-col items-center justify-around">
      <div>
        <img className="mx-auto" src="./assets/404.png" alt="404" />

        <p className="text-White max-w-[255px] text-center font-semibold text-base">
          Ops! Something went wrong, this path doesn’t exist or it’s not for you
        </p>
      </div>

      <Link
        to={"/"}
        className="bg-Vivid-Red-Tangelo rounded-lg py-5 px-20 font-bold text-White text-lg"
      >
        Go to home
      </Link>
    </div>
  );
};

export default NotForYou;
