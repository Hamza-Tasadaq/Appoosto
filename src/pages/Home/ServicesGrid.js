import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ServicesData from "../../data/Services.json";
import { changeOption } from "../../app/Slices/SelectedGrid";

const ServicesGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div id="services" className="pt-5">
      <div
        className="bg-cover bg-no-repeat flex items-center justify-center	 md:hidden py-16 bg-center"
        style={{ backgroundImage: "url('./assets/services-bg.png')" }}
      >
        <div className="grid grid-cols-2 gap-3">
          {ServicesData.map(({ title, imgSrc, href = "/intro" }, index) => (
            <div
              onClick={() => {
                dispatch(changeOption(title));
                navigate(href);
              }}
              key={index}
              className="bg-White rounded-lg w-36 sm:w-40 h-24 duration-300 border-transparent flex items-center justify-center hover:scale-105 flex-col"
            >
              <img src={`./assets/${imgSrc}.png`} alt={imgSrc} />
              <h3 className="font-bold text-sm mt-3">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
