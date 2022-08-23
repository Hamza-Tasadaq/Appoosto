import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BookTableForm, LanguageModal } from "../../components";
import ModalWrapper from "../../components/ModalWrapper";

const BookTable = () => {
  const { selectedLanguage } = useSelector((state) => state.language);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  return (
    <div>
      <div className="rounded-b-lg shadow-lg p-4 flex items-center sticky top-0 left-0 right-0 z-50 bg-White justify-between">
        <Link to={"/"}>
          <img src="./assets/headers-logo-gray.png" alt="headers-logo-gray" />
        </Link>
        <img
          onClick={() => {
            setShowLanguageModal(true);
          }}
          className="w-8 h-8"
          src={`./assets/${selectedLanguage.flagSrc}.png`}
          alt={selectedLanguage.flagSrc}
        />
      </div>
      <BookTableForm />

      {showLanguageModal && (
        <ModalWrapper>
          <LanguageModal
            setShowLanguageModal={setShowLanguageModal}
            selectedLanguage={selectedLanguage}
          />
        </ModalWrapper>
      )}
    </div>
  );
};

export default BookTable;
