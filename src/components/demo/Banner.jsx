import React from "react";

const Banner = () => {
  const style = {
    wrapper: `bg-banner border-b border-black`,
    container: `size py-[5rem] flex flex-col items-start gap-[1rem]`,
    h1: `font-title text-[3rem] sm:text-[4rem] md:text-[6rem] font-normal`,
    subtitle: `w-full md:w-[31rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7`,
    btn_start: `btn-black mt-[2.5rem]`
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1 className={style.h1}>
          Stay curious.
        </h1>
        <p className={style.subtitle}>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className={style.btn_start}>
          Start reading
        </button>
      </div>
    </div>
  );
};

export default Banner;