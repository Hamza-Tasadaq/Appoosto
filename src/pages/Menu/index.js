import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  LanguageModal,
  Menu as PhoneMenu,
  NotificationModal,
  PhoneFooter,
} from "../../components";
import BackModal from "../../components/BackModal";
import ModalWrapper from "../../components/ModalWrapper";

const Menu = () => {
  const { state } = useLocation();
  const { selectedLanguage } = useSelector((state) => state.language);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showBackModal, setShowBackModal] = useState(false);

  useEffect(() => {
    if (state) {
      document.getElementById(state).style.scrollMarginTop = "120px";
      document.getElementById(state).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showNotificationModal, showLanguageModal, showBackModal, state]);

  return (
    <div className="relative">
      <PhoneMenu
        setShowNotificationModal={setShowNotificationModal}
        setShowLanguageModal={setShowLanguageModal}
        setShowBackModal={setShowBackModal}
      />
      <PhoneFooter />

      {showLanguageModal && (
        <ModalWrapper>
          <LanguageModal
            setShowLanguageModal={setShowLanguageModal}
            selectedLanguage={selectedLanguage}
          />
        </ModalWrapper>
      )}

      {showBackModal && <BackModal setShowBackModal={setShowBackModal} />}

      {showNotificationModal && (
        <NotificationModal
          setShowNotificationModal={setShowNotificationModal}
        />
      )}
    </div>
  );
};

export default Menu;
