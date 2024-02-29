import React from "react";

const Modal = ({ children, modal, setModal, isBlurBg = false }) => {
  return (
    <>
      <div onClick={() => setModal(false)}
           className={`bg-white/40 fixed inset-0 z-10 transition-all duration-500
                      ${modal ? "visible opacity-100" : "invisible" + " opacity-0"} 
                      ${isBlurBg ? "backdrop-blur bg-white/90" : "backdrop-blur-none"}`} />
      {children}
    </>
  );
};

export default Modal;
