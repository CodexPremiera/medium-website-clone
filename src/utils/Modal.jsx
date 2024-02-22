import React from "react";

const Modal = ({ children, modal, setModal, hidden }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className={`bg-white/80 backdrop-blur-sm fixed inset-0 z-10 ${hidden} transition-all duration-500`}/>
      {children}
    </>
  );
};

export default Modal;