import React from 'react';

import {MdKeyboardArrowLeft as GoBackArrow} from "react-icons/md";
import Input from "../../utils/Input";

const SignIn = ({setSignReq}) => {
  const style = {
    container: `size text-center`,
    h2: `text-3xl font-title`,
    subtitle: `max-w-[54ch] mx-auto py-[3rem]`,
    form: `flex flex-col gap-4`,
    btn_continue: `flex grow w-[10rem] justify-center px-6 py-2 mt-4 text-sm rounded-full bg-gray-900 hover:bg-gray-950 text-white mx-auto`,
    btn_go_back: `mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto`
  }

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Sign in with email</h2>
      <p className={style.subtitle}>
        Enter the email address associated with your account, and we’ll send a magic link to your inbox.
      </p>

      <form className={style.form}>
        <Input type="email" title="email"/>
        <Input type="password" title="password"/>

        <button className={style.btn_continue}>
          Continue
        </button>
      </form>

      <button
        onClick={() => setSignReq("")}
        className={style.btn_go_back}>
        <GoBackArrow/>
        All Sign-in Options
      </button>
    </div>
  );
}

export default SignIn;