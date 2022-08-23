import ModalWrapper from "./ModalWrapper";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../app/Slices/Cart";

const BackModal = ({ setShowBackModal = () => {} }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ModalWrapper>
      <div className="bg-White border border-Medium-Electric-Blue rounded-lg p-5 relative">
        <div
          onClick={() => {
            setShowBackModal(false);
          }}
          className="bg-Vivid-Red-Tangelo p-2 rounded-lg inline-block absolute top-4 right-4 cursor-pointer"
        >
          <img src="./assets/close-white.svg" alt="close-white" />
        </div>
        <div className="text-center my-8">
          <h1 className="text-Vivid-Red-Tangelo font-bold text-lg">
            Are you sure?
          </h1>
          <p className="font-light text-sm mt-2">
            If you go back your cart will be reset!
          </p>
        </div>

        <div className="flex items-center space-x-3 mt-5">
          <button
            onClick={() => {
              navigate("/");
              dispatch(emptyCart());
            }}
            className="rounded-lg border border-Vivid-Red-Tangelo px-6 py-3 font-bold"
          >
            Yes, go back
          </button>
          <button
            onClick={() => {
              setShowBackModal(false);
            }}
            className="rounded-lg bg-Vivid-Red-Tangelo text-White border border-Vivid-Red-Tangelo px-6 py-3 font-bold"
          >
            No, stay here
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BackModal;
