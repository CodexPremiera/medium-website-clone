import React, { useState } from "react";

import { BsMedium as MediumLogo } from "react-icons/bs";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { LiaEditSolid as WriteIcon } from "react-icons/lia";
import { IoMdNotificationsOutline as NotificationIcon } from "react-icons/io";
import { MdKeyboardArrowDown as ArrowDownIcon } from "react-icons/md";

import { Link } from "react-router-dom";
import Search from "./Search";
import Modal from "../../../utils/Modal";
import UserModal from "./UserModal";

const HomeHeader = () => {
  const [modal, setModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const style = {
    left_container: `flex items-center gap-3`,
    medium_logo: `text-5xl`,

    right_container: `flex items-center gap-3 sm:gap-7`,
    search: `flex sm:hidden text-3xl text-gray-300 cursor-pointer`,

    write: `hidden md:flex items-center gap-1 text-gray-500`,
    write_icon: `text-3xl`,
    write_text: `text-sm mt-2`,

    notification: `text-3xl text-gray-500 cursor-pointer`,

    profile: `flex items-center relative`,
    profile_pic: `w-[2.3rem] hr-[2.3rem] object-cover rounded-full cursor-pointer`,
    profile_dropdown: `text-gray-500 cursor-pointer`,
    profile_modal: `${modal ? "visible opacity-100%" : "invisible opacity-0"} transition-all duration-100`,
  }

  return (
    <header className="border-b border-gray-200">
      <div className="size h-[60px] flex items-center justify-between">

        {/* left side  */}
        <div className={style.left_container}>
          <Link to={"/"}>
            <span className={style.medium_logo}>
              <MediumLogo />
            </span>
          </Link>
          <Search modal={searchModal} setModal={setSearchModal} />
        </div>

        {/* right side  */}
        <div className={style.right_container}>
          <span className={style.search}
                onClick={() => setSearchModal(true)} >
            <SearchIcon />
          </span>

          <Link to="/write"
                className={style.write}>
            <span className={style.write_icon}>
              <WriteIcon/>
            </span>
            <span className={style.write_text}>Write</span>
          </Link>

          <span className={style.notification}>
            <NotificationIcon/>
          </span>

          <div className={style.profile}>
            <img
              onClick={() => setModal(true)}
              className={style.profile_pic}
              src="/profile.jpg"
              alt="profile-img"
            />
            <span className={style.profile_dropdown}>
              <ArrowDownIcon/>
            </span>

            <Modal modal={modal} setModal={setModal}>
              <div className={style.profile_modal}>
                <UserModal/>
              </div>
            </Modal>
          </div>

        </div>
      </div>
    </header>
  );
};

export default HomeHeader;