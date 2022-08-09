const SectionHeading = ({ text = "" }) => {
  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-sm md:text-3xl py-5 md:px-14 md:border-b-4 border-Vivid-Red-Tangelo inline-block">
        {text}
      </h1>
    </div>
  );
};

export default SectionHeading;
