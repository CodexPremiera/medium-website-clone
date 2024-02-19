import React, {useState} from 'react';

import { LiaTimesSolid as ExitIcon } from "react-icons/lia";
import { FcGoogle as GoogleLogo } from "react-icons/fc";
import { MdFacebook as FacebookLogo } from "react-icons/md";
import { AiOutlineMail as EmailLogo } from "react-icons/ai";

import Modal from "../../utils/Modal.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";


const Auth = ({modal, setModal}) => {
  const [createUser, setCreateUser] = useState(false);
  const [signReq, setSignReq] = useState("");

  const hidden = modal ? "visible opacity-100" : "invisible opacity-0";

  const style = {
    wrapper: `z-50 fixed overflow-auto grid place-items-center mx-auto w-fit h-full top-0 left-0 bg-transparent
             ${hidden} transition-all duration-500`,
    container: `z-100 relative bg-white py-[4rem] px-[3rem] max-sm:w-full max-sm:h-full sm:flex-1 `,
    btn_exit: `absolute top-[2rem] right-[2rem] text-2xl hover:opacity-50`,
    content: `flex flex-col justify-center items-center gap-[3rem]`,
    h2: `text-2xl font-title`,
    list_accounts: `flex flex-col gap-3 w-fit`,
    btn_account: `text-xl`,
    btn_alternate: `text-green-600 hover:text-green-700 font-bold ml-1`,
    disclaimer: `md:w-[30-rem] auto text-center text-xs text-gray-800 max-w-[64ch]`
  };

  return (
    <Modal modal={modal} setModal={setModal} hidden={hidden}>
      <div className={`z-50 fixed overflow-auto w-full h-full md:w-[640px] md:h-fit 
                    top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] 
                    bg-white py-[4rem] px-[3rem] sm:rounded-xl shadows
                    ${hidden} transition-all duration-500`}>
        <button
          onClick={() => setModal(false)}
          className={style.btn_exit}>
          <ExitIcon/>
        </button>

        <div className={style.content}>
          {signReq === "" ? (
            <>
              <h2 className={style.h2}>
                {createUser ? "Join Medium." : "Welcome Back."}
              </h2>
              <div className={style.list_accounts}>
                <Button
                  icon={<GoogleLogo className={style.btn_account}/>}
                  text={`${createUser ? "Sign Up" : "Sign In"} With Google`}
                />
                <Button
                  icon={<FacebookLogo className={`${style.btn_account} + text-blue-600`}/>}
                  text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`}
                />
                <Button
                  click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                  icon={<EmailLogo className={style.btn_account}/>}
                  text={`${createUser ? "Sign Up" : "Sign In"} With Email`}
                />
              </div>
              <p>
                {createUser ? "Already have an account" : "No Account"}
                <button
                  onClick={() => setCreateUser(!createUser)}
                  className={style.btn_alternate}>
                  {createUser ? "Sign In" : "Create one"}
                </button>
              </p>
            </>

          ) : signReq === "sign-in" ? (
            <SignIn setSignReq={setSignReq}/>

          ) : signReq === "sign-up" ? (
            <SignUp setSignReq={setSignReq}/>

          ) : null}
          <p className={style.disclaimer}>
            Click “Sign In” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies
            to you.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default Auth;

const Button = ({icon, text, click}) => {
  return (
    <button
      onClick={click}
      className={`flex grow w-full items-center gap-10 border border-black pl-8 pr-12 py-3 rounded-full`}>
      {icon} {text}
    </button>
  );
};