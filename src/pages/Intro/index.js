import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="bg-Black min-screen w-screen text-White p-5 flex flex-col items-center justify-between">
      <div>
        <img src="./assets/computer.png" alt="computer" />
        <h1 className="max-w-[255px] text-center mx-auto my-4 text-base leading-6">
          Hello, I’m <span className="font-bold"> Appoo</span>, your private
          assistant. Let I explain you something before your order
        </h1>
      </div>
      <div className="flex items-center justify-between  w-full">
        <Link to={"/menu"} className="font-medium">
          Skip
        </Link>

        <Link to={"/tutorial"} className="flex items-center">
          <h2 className="font-bold">Sure, tell me</h2>
          <img className="ml-2" src="./assets/arrownext.svg" alt="arrow-next" />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
