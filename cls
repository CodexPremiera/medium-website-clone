warning: in the working copy of 'src/index.css', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/src/components/demo/DemoHeader.jsx b/src/components/demo/DemoHeader.jsx[m
[1mindex 27f613b..5d99d18 100644[m
[1m--- a/src/components/demo/DemoHeader.jsx[m
[1m+++ b/src/components/demo/DemoHeader.jsx[m
[36m@@ -26,7 +26,7 @@[m [mconst DemoHeader = () => {[m
     nav_menu: `flex items-center gap-5`,[m
     nav_list: `hidden text-sm sm:flex items-center gap-5`,[m
     btn_sign_in: `hidden text-sm sm:flex items-center gap-5`,[m
[31m-    btn_get_started: `text-white rounded-full px-3 py-2 text-sm font-medium ${isActive ? "bg-green-700" : "bg-black"}`[m
[32m+[m[32m    btn_get_started: `btn-black ${isActive ? "bg-green-700" : "bg-black"}`[m
   }[m
 [m
   return ([m
[1mdiff --git a/src/components/demo/auth/Auth.jsx b/src/components/demo/auth/Auth.jsx[m
[1mindex a354c58..f37bace 100644[m
[1m--- a/src/components/demo/auth/Auth.jsx[m
[1m+++ b/src/components/demo/auth/Auth.jsx[m
[36m@@ -17,9 +17,9 @@[m [mconst Auth = ({modal, setModal}) => {[m
   const hidden = modal ? "visible opacity-100" : "invisible opacity-0";[m
 [m
   const style = {[m
[31m-    wrapper: `z-50 fixed overflow-auto grid place-items-center mx-auto w-fit h-full top-0 left-0 bg-transparent[m
[31m-             ${hidden} transition-all duration-500`,[m
[31m-    container: `z-100 relative bg-white py-[4rem] px-[3rem] max-sm:w-full max-sm:h-full sm:flex-1 `,[m
[32m+[m[32m    container: `z-50 fixed overflow-auto bg-white py-[4rem] px-[3rem] sm:rounded-xl shadows[m[41m [m
[32m+[m[32m                w-full h-full md:w-[640px] md:h-fit top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%][m[41m [m
[32m+[m[32m                ${hidden} transition-all duration-500`,[m
     btn_exit: `absolute top-[2rem] right-[2rem] text-2xl hover:opacity-50`,[m
     content: `flex flex-col justify-center items-center gap-[3rem]`,[m
     h2: `text-2xl font-title`,[m
[36m@@ -31,10 +31,7 @@[m [mconst Auth = ({modal, setModal}) => {[m
 [m
   return ([m
     <Modal modal={modal} setModal={setModal} hidden={hidden}>[m
[31m-      <div className={`z-50 fixed overflow-auto w-full h-full md:w-[640px] md:h-fit [m
[31m-                    top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] [m
[31m-                    bg-white py-[4rem] px-[3rem] sm:rounded-xl shadows[m
[31m-                    ${hidden} transition-all duration-500`}>[m
[32m+[m[32m      <div className={style.container}>[m
         <button[m
           onClick={() => setModal(false)}[m
           className={style.btn_exit}>[m
[1mdiff --git a/src/index.css b/src/index.css[m
[1mindex 4a97e5a..44499de 100644[m
[1m--- a/src/index.css[m
[1m+++ b/src/index.css[m
[36m@@ -11,5 +11,9 @@[m
 }[m
 [m
 .shadows {[m
[31m-  box-shadow: 0 0 3px 0 rgb(182, 182, 182);[m
[32m+[m[32m  box-shadow: 0 0 4px 1px rgb(182, 182, 182);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.btn-black {[m
[32m+[m[32m  @apply text-white rounded-full px-6 py-2 text-sm font-medium bg-black;[m
 }[m
\ No newline at end of file[m
