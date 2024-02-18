import React from "react";

const Input = ({ type, title }) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        className=" border-b border-black outline-none w-full h-8 bg-transparent"
        type={type}
        name={title}
        placeholder={`Enter ${title}`}
      />
    </div>
  );
};

export default Input;