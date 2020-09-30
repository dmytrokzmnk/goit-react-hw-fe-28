/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "../../Components/Modal/Modal";
const ModalContainer = ({ modalWindow, closeModal, isModal }) => {
  const exitKey = (e) => {
    if (e.code === "Escape") {
      closeModal(isModal);
    }
  };
  const clickClose = (e) => {
    if (e.target.tagName === "IMG") {
      return;
    }
    closeModal(isModal);
  };
  useEffect(() => {
    window.addEventListener("keydown", exitKey);
    return () => {
      window.removeEventListener("keydown", exitKey);
    };
  }, []);
  return <Modal modalWindow={modalWindow} closeModal={clickClose} />;
};

ModalContainer.propTypes = {
  modalWindow: PropTypes.shape({}),
  closeModal: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
};

export default ModalContainer;
