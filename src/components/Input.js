const Input = ({ placeholder = "", type = "" }) => {
  return (
    <input
      type={type}
      className="w-full p-3 md:p-5 my-1 md:my-2 flex-1 bg-Platinum outline-none rounded-lg"
      placeholder={placeholder}
    />
  );
};

export default Input;
