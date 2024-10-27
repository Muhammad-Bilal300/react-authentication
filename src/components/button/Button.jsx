import React from "react";

const Button = ({buttonText}) => {
  return (
    <button className="h-[40px] bg-primary text-white font-semibold flex justify-center items-center rounded-md mt-4">
      {buttonText}
    </button>
  );
};

export default Button;
