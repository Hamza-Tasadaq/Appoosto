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

  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);

  return (
    <div>
      <div className="relative bg-Flash-White h-screen ">
        <DashboardHeaderDesktop />
        <div className="mt-3 px-2 flex max-h-dashboard ">
          <div
            onMouseEnter={() => {
              setIsCartHovered(!isCartHovered);
            }}
            onMouseLeave={() => {
              setIsCartHovered(!isCartHovered);
            }}
            className={`w-4/12 lg:w-1/4 h-full overflow-auto  ${
              isCartHovered ? " scrollBar " : " scrollBarHideCart "
            } ml-2`}
          >
            <Cart />
          </div>
          <div className="w-[46.50%] lg:w-1/2 mx-1  bg-White rounded-t-lg p-4">
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
            setShowPinModal={setShowPinModal}
          />
        </ModalWrapper>
      )}
    </div>
  );
};

export default Dashboard;
