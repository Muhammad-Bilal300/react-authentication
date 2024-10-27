import React from "react";

const SocialButton = ({buttonText,icon:Icon}) => {
  return (
    <button className="h-[40px] bg-transparent  border-2 border-black font-semibold px-4 rounded-md">
      <div className="flex justify-start items-center">
        <Icon className="text-blue-600 text-[20px]" />
        <h3 className="w-full text-center">{buttonText}</h3>
      </div>
    </button>
  );
};

export default SocialButton;
