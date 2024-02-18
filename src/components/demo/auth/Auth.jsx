import React, {useState} from 'react';

import { LiaTimesSolid as ExitIcon } from "react-icons/lia";
import { FcGoogle as GoogleLogo } from "react-icons/fc";
import { MdFacebook as FaceBookLogo } from "react-icons/md";
import { AiOutlineMail as EmailLogo } from "react-icons/ai";

import Modal from "../../utils/Modal.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";

const Auth = () => {
  const [createUser, setCreateUser] = useState(false);
  const [signReq, setSignReq] = useState("");
  const [modal, setModal] = useState(true);

  const hidden = modal ? "visible opacity-100" : "invisible opacity-0";

  const style = {
    wrapper: `grid place-items-center w-full h-full top-0 left-0 z-50 fixed overflow-auto bg-white/40 backdrop-blur-sm 
             ${hidden} transition-all duration-500`,
    container: `relative bg-white py-[4rem] px-[3rem] max-sm:w-full max-sm:h-full sm:flex-1 sm:rounded-xl shadows`,
    btn_exit: `absolute top-[2rem] right-[2rem] text-2xl hover:opacity-50`,
    content: `flex flex-col justify-center items-center gap-[3rem]`,
    h2: `text-2xl`,
    list_accounts: `flex flex-col gap-3 w-fit`,
    btn_account: `text-xl`,
    btn_alternate: `text-green-600 hover:text-green-700 font-bold ml-1`,
    disclaimer: `md:w-[30-rem] auto text-center text-sm max-w-[54ch]`
  };

  return (
    <Modal modal={modal} setModal={setModal} hidden={hidden}>
      <div className={style.wrapper}>
        <section className={style.container}>

          <button
            className={style.btn_exit}>
            onClick={() => setModal(false)}
            <ExitIcon/>
          </button>

          <div className={style.content}>
            {signReq === "" ? (
              <>
                <h2 className={style.h2}>
                  {createUser ? `Join Medium` : `Welcome Back`}
                </h2>
                <div className={style.list_accounts}>
                  <Button
                    icon={<GoogleLogo className={style.btn_account}/>}
                    text={`${createUser ? "Sign up" : "Sign in"} with Google`}
                  />
                  <Button
                    icon={<FaceBookLogo className={style.btn_account + ` text-blue-600`}/>}
                    text={`${createUser ? "Sign up" : "Sign in"} with Facebook`}
                  />
                  <Button
                    click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                    icon={<EmailLogo className={style.btn_account}/>}
                    text={`${createUser ? "Sign up" : "Sign in"} with Email`}
                  />
                </div>
                <p>
                  {createUser ? `Already a Member? ` : `No Account? `}
                  <button
                    className={style.btn_alternate}
                    onClick={() => setCreateUser(!createUser)}>
                    {createUser ? `Sign In` : `Create one`}
                  </button>
                </p>
              </>

            ) : signReq === "sign-in" ? (
              <SignIn setModal={setModal} setSignReq={setSignReq}/>

            ) : signReq === "sign-up" ? (
              <SignUp setModal={setModal} setSignReq={setSignReq}/>

            ) : null}

            <p className={style.disclaimer}>
              By signing in, you agree with Medium's Terms of Service and Medium's Privacy Policy.
            </p>

          </div>

        </section>
      </div>
    </Modal>
  );
};

export default Auth;

const Button = ({icon, text, click}) => {
  return (
    <button
      onClick={click}
      className={`flex flex-1 w-full items-center gap-10 border border-black pl-8 pr-12 py-3 rounded-full`}>
      {icon} {text}
    </button>
  );
};