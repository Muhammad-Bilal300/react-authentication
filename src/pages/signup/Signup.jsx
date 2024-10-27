import React, { useState } from "react";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import SocialButton from "../../components/button/SocialButton";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  return (
    <div className="bg-white px-3 py-5 rounded-md w-[33%] mx-auto">
      <h2 className="text-[22px] font-bold text-black text-center">Sign Up</h2>
      <div className="flex flex-col gap-y-3 mt-6">
        <InputField type="text" placeholder="Username" />
        <InputField type="email" placeholder="Email" />
        <InputField
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Passowrd"
          setIsVisible={setIsPasswordVisible}
          isVisible={isPasswordVisible}
        />
        <InputField
          type={isConfirmPasswordVisible ? "text" : "password"}
          placeholder="Confirm Passowrd"
          setIsVisible={setIsConfirmPasswordVisible}
          isVisible={isConfirmPasswordVisible}
        />
        <Button buttonText="Sign Up" />
        <h6 className="text-center">
          <span>Already have an account ? </span>
          <span
            onClick={() => {
              navigate("/login");
            }}
            className="font-semibold text-primary cursor-pointer"
          >
            Login
          </span>
        </h6>
        <h4 className="text-gray-500 font-bold text-center">OR</h4>
        <div className="flex flex-col gap-y-3">
          <SocialButton buttonText="Login With Facebook" icon={SiFacebook} />
          <SocialButton buttonText="Login With Google" icon={FcGoogle} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
