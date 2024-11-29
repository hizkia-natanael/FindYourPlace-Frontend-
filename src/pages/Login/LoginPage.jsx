import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex w-11/12 max-w-4xl overflow-hidden">
        {/* Bagian Kiri */}
        <div className="w-1/2 bg-[#a04925] flex flex-col justify-center items-center text-white p-8">
          <img
            src="https://plus.unsplash.com/premium_vector-1721224450752-b0f014727713?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login Illustration"
            className="w-3/4 mb-6"
          />
        </div>

        {/* Bagian Kanan */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-[#a04925] mb-6 text-center">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan Email Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a04925]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Masukkan Password Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a04925]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#a04925] text-white font-medium rounded-lg hover:bg-[#81371a] transition"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Lupa Password?
            </a>
            <a href="#" className="text-[#a04925] hover:underline">
              Daftar Di Sini
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
