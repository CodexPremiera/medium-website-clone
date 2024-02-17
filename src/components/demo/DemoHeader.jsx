import React, {useEffect, useState} from 'react';
import { nav } from "../../data.js";
import Logo from '../../assets/medium-logo.png'
import { Link } from "react-router-dom";

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

  return (
    <header className={`border-b border-black sticky top-0 z-50 ${isActive ? "bg-white" : "bg-banner"} transition-all duration-500`}>
      <div className={`size h-[70px] flex items-center justify-between`}>
        <Link to={"/"}>
          <img
            className={`h-[2.5rem]`}
            src={`${Logo}`}
            alt={"logo"}
          />
        </Link>

        <nav className={`flex items-center gap-5`}>
          <div className={`hidden text-sm sm:flex items-center gap-5`}>
            {nav.map((link, index) => (
              <Link key={index} to={link.path}>{link.title}</Link>
            ))}
          </div>
          <button className={`hidden text-sm sm:flex items-center gap-5`}>Sign In</button>
          <button className={`text-white rounded-full px-3 py-2 text-sm font-medium ${isActive ? "bg-green-700" : "bg-black"}`}>
              Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default DemoHeader;