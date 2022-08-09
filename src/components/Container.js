const Container = ({ children = "", classes = "" }) => {
  return <div className={`max-w-[1480px] mx-auto ${classes} `}>{children}</div>;
};

export default Container;
