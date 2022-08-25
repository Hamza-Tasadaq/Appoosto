import { useState } from "react";
import {
  Cart,
  Category,
  Checkout,
  DashboardHeaderDesktop,
  Menu,
  PinModal,
} from "../../components";
import ModalWrapper from "../../components/ModalWrapper";

const Dashboard = () => {
  const [showPinModal, setShowPinModal] = useState(true);
  const [selectedType, setSelectedType] = useState(undefined);

  const [isMenuHovered, setIsMenuHovered] = useState(false);

  return (
    <div>
      <div className="relative bg-Flash-White h-screen ">
        <DashboardHeaderDesktop />
        <div className="mt-3 px-2 flex max-h-dashboard ">
          <div className="w-4/12 lg:w-1/4 h-full overflow-auto  scrollBar mx-2">
            <Cart selectedType={selectedType} />
          </div>
          <div className="w-[46.50%] lg:w-1/2 mx-2 bg-White rounded-t-lg p-4">
            <div className="h-2/5">
              <Category />
            </div>
            <div
              onMouseEnter={() => {
                setIsMenuHovered(!isMenuHovered);
              }}
              onMouseLeave={() => {
                setIsMenuHovered(!isMenuHovered);
              }}
              className={`h-3/5  overflow-auto ${
                isMenuHovered ? " scrollBar " : " scrollBarHide "
              } `}
            >
              <Menu />
            </div>
          </div>
          <div className="w-1/5 overflow-auto  scrollBar lg:w-1/4 mx-2">
            <Checkout />
          </div>
        </div>
      </div>
      {showPinModal && (
        <ModalWrapper>
          <PinModal
            setSelectedType={setSelectedType}
            setShowPinModal={setShowPinModal}
          />
        </ModalWrapper>
      )}
    </div>
  );
};

export default Dashboard;
