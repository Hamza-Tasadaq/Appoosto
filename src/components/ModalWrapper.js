const ModalWrapper = ({ children }) => {
  return (
    <div className="h-screen bg-Black  bg-opacity-20	 absolute top-0  left-0  right-0 z-50 flex items-center justify-center ">
      {children}
    </div>
  );
};

export default ModalWrapper;
