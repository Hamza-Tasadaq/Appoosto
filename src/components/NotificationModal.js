import ModalWrapper from "./ModalWrapper";

const NotificationModal = ({ setShowNotificationModal = () => {} }) => {
  return (
    <ModalWrapper>
      <div className="bg-White border border-Medium-Electric-Blue w-full md:w-auto rounded-lg p-5 relative">
        <div
          onClick={() => {
            setShowNotificationModal(false);
          }}
          className="bg-Vivid-Red-Tangelo p-2 rounded-lg inline-block absolute top-4 right-4 cursor-pointer"
        >
          <img src="./assets/close-white.svg" alt="close-white" />
        </div>
        <div className="text-center my-8">
          <div className="flex items-center justify-between">
            <div>
              <img
                src="./assets/notification-bell.svg"
                alt="notification-bell"
              />
            </div>
            <h1 className="text-Vivid-Red-Tangelo font-bold text-lg">
              Call a waiter
            </h1>
            <div></div>
            <div></div>
          </div>
          <p className="font-light text-sm mt-2">do you need a waiter?</p>
        </div>

        <div className="flex items-center justify-between md:justify-center space-x-3 mt-5">
          <button
            onClick={() => {
              setShowNotificationModal(false);
            }}
            className="rounded-lg border border-Vivid-Red-Tangelo flex-1 md:flex-auto px-2 md:px-6 py-3 font-bold"
          >
            No, I don’t need
          </button>
          <button
            onClick={() => {
              setShowNotificationModal(false);
            }}
            className="rounded-lg bg-Vivid-Red-Tangelo text-White border flex-1 md:flex-auto border-Vivid-Red-Tangelo px-2 md:px-6 py-3 font-bold"
          >
            Yes, I need
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default NotificationModal;
