import { Container, SectionHeading } from "../../components";

const SocialIcons = [
  {
    src: "Twitter-black",
  },
  {
    src: "Facebook-black",
  },
  {
    src: "Tumblr-black",
  },
  {
    src: "Vimeo-black",
  },
];

const MeetTeam = () => {
  return (
    <Container classes="my-5">
      <SectionHeading text="MEET OUR TEAM" />

      <div className="flex items-center justify-center my-5 flex-wrap">
        <div className="flex flex-col justify-center items-center rounded-lg box-shadow  m-5 max-w-[345px] px-5 py-8">
          <img src="./assets/richard.png" alt="richard" />
          <h1 className="font-semibold text-Black text-2xl mt-4">Richard Miller</h1>
          <p className="font-semibold text-Black text-base opacity-50 mt-1">
            HR Head
          </p>
          <div className="bg-Spanish-Gray max-w-[272px] w-full my-4 bg-opacity-25 mx-auto h-px " />

          <h4 className="opacity-60 text-center max-w-[299px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            risus mi, portitor vel rutrum ut, sodales eu odio. Cras mollis
            turpis et faucibus tempor. Nullam pha sit amet metus vitae
            imperdiet.
          </h4>
          <div className="flex items-center space-x-4 mt-4">
            {SocialIcons.map(({ src }) => (
              <img src={`./assets/${src}.svg`} alt={src} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg box-shadow  m-5 max-w-[345px] px-5 py-8">
          <img src="./assets/Ashley.png" alt="Ashley" />
          <h1 className="font-semibold text-Black text-2xl mt-4">Ashley Wills</h1>
          <p className="font-semibold text-Black text-base opacity-50 mt-1">
            CEO
          </p>
          <div className="bg-Spanish-Gray max-w-[272px] w-full my-4 bg-opacity-25 mx-auto h-px " />

          <h4 className="opacity-60 text-center max-w-[299px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            risus mi, portitor vel rutrum ut, sodales eu odio. Cras mollis
            turpis et faucibus tempor. Nullam pha sit amet metus vitae
            imperdiet.
          </h4>
          <div className="flex items-center space-x-4 mt-4">
            {SocialIcons.map(({ src }) => (
              <img src={`./assets/${src}.svg`} alt={src} />
            ))}
          </div>
        </div>{" "}
        <div className="flex flex-col justify-center items-center rounded-lg box-shadow  m-5 max-w-[345px] px-5 py-8">
          <img src="./assets/Dan.png" alt="Dan" />
          <h1 className="font-semibold text-Black text-2xl mt-4">Mark Dan</h1>
          <p className="font-semibold text-Black text-base opacity-50 mt-1">
            Head Chef
          </p>
          <div className="bg-Spanish-Gray max-w-[272px] w-full my-4 bg-opacity-25 mx-auto h-px " ></div>

          <h4 className="opacity-60 text-center max-w-[299px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            risus mi, portitor vel rutrum ut, sodales eu odio. Cras mollis
            turpis et faucibus tempor. Nullam pha sit amet metus vitae
            imperdiet.
          </h4>
          <div className="flex items-center space-x-4 mt-4">
            {SocialIcons.map(({ src }) => (
              <img src={`./assets/${src}.svg`} alt={src} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MeetTeam;
