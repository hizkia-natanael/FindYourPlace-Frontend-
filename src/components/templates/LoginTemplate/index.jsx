import React from "react";
import { LoginForm } from "../../organisms";

const LoginTemplate = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1  hidden sm:block flex-col items-center justify-center bg-coklate text-white px-6 py-12">
        <div className="w-full max-w-sm ">
          <img
            src="/images/Data privacy and security on laptop.png"
            alt="Laptop Illustration"
            className="w-full h-auto mx-auto"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-6 py-12 shadow-lg">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
