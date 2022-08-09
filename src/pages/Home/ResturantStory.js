const ResturantStory = () => {
  return (
    <div className="bg-Pastel-Violet">
      <div
        className="bg-left  bg-no-repeat relative flex justify-end pt-6 pb-4 px-4 md:pt-24 md:pb-20 md:px-10 lg:px-20"
        style={{
          backgroundImage: "url('./assets/story-bg.png')",
          backgroundSize: "60% 100%",
        }}
      >
        <div className=" bg-White rounded-lg p-4 md:px-10 md:pt-11 md:pb-12 max-w-[905px] ">
          <div className="">
            <h1 className="text-Pastel-Violet font-bold text-sm	md:text-4xl	pb-2 md:pb-6 mb-2 md:mb-6 border-b border-opacity-20 border-Black">
              Restaurant Story
            </h1>

            <p className="font-medium text-xs	md:text-xl opacity-60	">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eleifend leo vitae justo volutpat, non facilisis augue
              vulputate. Pellentesque at viverra sem, id scelerisque metus.
              Mauris ut mollis felis. Proin mi nisl, fermentum vitae hendrerit
              eget, fermentum eget turpis. Duis molestie dictum aliquet. Cras
              vitae hendrerit tortor. Sed sodales urna nisi, vel pharetra tellus
              euismod eget. Maecenas dui magna, condimentum laoreet dui at,
              ultricies feugiat lorem. Sed ipsum sem, euismod ac interdum in,
              tristique iaculis ex. Quisque ut justo eget dui vulputate suscipit
              sit amet at tortor. Vestibulum nec erat in tortor varius
              vestibulum. Vivamus pulvinar nec odio at imperdiet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantStory;
