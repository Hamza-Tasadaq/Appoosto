const Input = ({
  placeholder = "",
  type = "",
  value = "",
  name = "",
  changeHandler = () => {},
}) => {
  return (
    <input
      onChange={changeHandler}
      value={value}
      type={type}
      name={name}
      className="w-full p-3 md:p-5 my-1 md:my-2 flex-1 bg-Platinum outline-none rounded-lg"
      placeholder={placeholder}
    />
  );
};

export default Input;
