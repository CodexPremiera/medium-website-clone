import React from 'react';

import {MdKeyboardArrowLeft as GoBackArrow} from "react-icons/md";
import Input from "../../utils/Input";


const SignUp = ({setSignReq}) => {
  const style = {
    container: `size text-center`,
    h2: `text-3xl`,
    subtitle: `max-w-[54ch] mx-auto py-[3rem]`,
    form: `flex flex-col gap-4`,
    btn_sign_up: `px-6 py-2 mt-1 text-sm rounded-full bg-green-700 hover:bg-green-800 text-white w-fit mx-auto`,
    btn_go_back: `mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto`
  }

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Sign up with email</h2>
      <p className={style.subtitle}>
        Enter the email address associated with your account, and we’ll send a magic link to your inbox.
      </p>

      <form className={style.form}>
        <Input type="username" title="username"/>
        <Input type="email" title="email"/>
        <Input type="password" title="password"/>

        <button className={style.btn_sign_up}>
          Sign Up
        </button>
      </form>

      <button
        onClick={() => setSignReq("")}
        className={style.btn_go_back}>
        <GoBackArrow/>
        All Sign-up Options
      </button>
    </div>
  );
}

export default SignUp;