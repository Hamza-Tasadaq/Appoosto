const ModalWrapper = ({ children }) => {
  return (
    <div className="h-screen bg-Black  bg-opacity-20	 absolute top-0  left-0  right-0 flex py-0 px-3 md:px-0 md:mt-0 z-50 items-starts items-center justify-center ">
      {children}
    </div>
  );
};

export default ModalWrapper;
