import { Container } from "../../components";

const FeaturesData = [
  {
    title: "Fast Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend leo vitae justo volutpat, non facilisis augue vulputate. Pellentesque at viverra sem.",
    iconName: "motorbike",
  },
  {
    title: "Amazing Taste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend leo vitae justo volutpat, non facilisis augue vulputate. Pellentesque at viverra sem.",
    iconName: "cutlery",
  },
  {
    title: "Highest Ratings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend leo vitae justo volutpat, non facilisis augue vulputate. Pellentesque at viverra sem.",
    iconName: "stars",
  },
];

const Features = () => {
  return (
    <div className="bg-Vivid-Red-Tangelo">
      <div
        className="bg-repeat bg-center bg-contain bg-opacity-40"
        style={{
          backgroundImage: "url('./assets/features-bg.png')",
        }}
      >
        <Container
          classes={
            "grid grid-cols-1 md:grid-cols-2asas md:grid-cols-3 gap-10 justify-center px-4 md:px-0 py-16"
          }
        >
          {FeaturesData.map(({ iconName, title, description }) => (
            <div className="flex group  flex-col justify-center items-center text-center text-White">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-White flex items-center justify-center">
                <img
                  className="group-hover:scale-110 md:group-hover:scale-125 duration-300"
                  src={`./assets/${iconName}.svg`}
                  alt={iconName}
                />
              </div>
              <h1 className="font-bold text-xl mt-6 mb-4 md:mt-10 md:mb-4">
                {title}
              </h1>
              <p className="max-w-[342px]	text-sm	font-medium">{description}</p>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Features;
