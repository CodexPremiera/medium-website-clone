import React, { useState } from "react";
import { CiSearch as SearchIcon } from "react-icons/ci";
import Modal from "../../../utils/Modal";


const Search = ({ modal, setModal }) => {
  const style = {
    modal_container: `absolute sm:relative right-4 left-4 top-[4rem] sm:left-0 sm:top-0
                      ${modal ? "visible opacity-100" : "invisible sm:visible sm:opacity-100 opacity-0"} 
                      transition-all duration-100`,
    search_bar: `flex items-center gap-1 bg-gray-100 px-4 rounded-full relative z-10`,
    search_icon: `text-2xl text-gray-400`,
    search_field: `bg-transparent outline-none py-[0.7rem] text-sm w-full`
  }

  return (
    <>
      <Modal modal={modal} setModal={setModal} >
        <div className={style.modal_container}>

          <div className={style.search_bar}>
            <span className={style.search_icon}>
              <SearchIcon />
            </span>

            <input className={style.search_field}
                   type="text"
                   placeholder="Search Medium" />
          </div>

        </div>
      </Modal>
    </>
  );
};

export default Search;