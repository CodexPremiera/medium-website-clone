import React, {useEffect, useState} from 'react';
import { nav } from "../../data.js";
import Logo from '../../assets/medium-logo.png'
import { Link } from "react-router-dom";
import Auth from "./auth/Auth.jsx";

const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);

  /**
   * Listen to scrolling and activate when scrolled down enough. Apply color changes to `header wrapper`
   * and `get started button` when the page is scrolled down and vice versa
   * */
  useEffect(() => {
    const scrollTripwire = () => {
      window.scrollY > 240 ? setIsActive(true) : setIsActive(false);
    }
    window.addEventListener("scroll", scrollTripwire);
  }, []);

  const style = {
    header_bar: `border-b border-black sticky top-0 z-50 ${isActive ? "bg-white" : "bg-banner"} transition-all duration-500`,
    container: `size h-[70px] flex items-center justify-between`,
    logo: `h-[2.5rem]`,
    nav_menu: `flex items-center gap-5`,
    nav_list: `hidden text-sm sm:flex items-center gap-5`,
    btn_sign_in: `hidden text-sm sm:flex items-center gap-5`,
    btn_get_started: `text-white rounded-full px-3 py-2 text-sm font-medium ${isActive ? "bg-green-700" : "bg-black"}`
  }

  return (
    <header className={style.header_bar}>
      <div className={style.container}>

        <Link to={"/"}>
          <img
            className={style.logo} aria-label={`Logo`} title={`Logo`} src={`${Logo}`} alt={"logo"}
          />
        </Link>

        <nav className={style.nav_menu}>
          <div className={style.nav_list}>
            {nav.map((link, index) => (
              <Link key={index} to={link.path} aria-label={link.title}>{link.title}</Link>
            ))}
          </div>
          <button className={style.btn_sign_in} aria-label={`Sign In`}>Sign In</button>
          <Auth />
          <button className={style.btn_get_started} aria-label={`Get Started`}>Get Started</button>
        </nav>

      </div>
    </header>
  );
};

export default DemoHeader;