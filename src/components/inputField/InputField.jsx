import React from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const InputField = ({ type, placeholder, isVisible, setIsVisible }) => {
  return (
    <div className="rounded-md h-[40px] border-[1px] border-gray-400 flex justify-between items-center px-3 w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none border-none bg-transparent w-full"
      />
      {isVisible !== undefined && (
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? (
            <IoEyeOff className="cursor-pointer text-primary text-xl" />
          ) : (
            <IoEye className="cursor-pointer text-primary text-xl" />
          )}
        </button>
      )}
    </div>
  );
};

export default InputField;
