import React from "react";
import PropTypes from "prop-types";

const Modal = ({ modalWindow, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={modalWindow.url} alt={modalWindow.alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalWindow: PropTypes.shape({}),
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
