import { Form } from "../../components/molekules";
import { Logo, Button } from "../../components/atoms";
import { Link, useNavigate } from "react-router-dom";
import useAuthAdminStrore from "../../config/authAdminStore.js";
import { useState } from "react";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const { login } = useAuthAdminStrore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    setError(""); // Reset error state

    try {
      const loginResponse = await login(email, password);
      if (loginResponse) {
        navigate("/admin");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 hidden sm:block flex-col items-center justify-center bg-coklate text-white px-6 py-12">
        <div className="w-full max-w-sm">
          <img
            src="/images/Data privacy and security on laptop.png"
            alt="Laptop Illustration"
            className="w-full h-auto mx-auto"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-6 py-12 shadow-lg">
        <div className="w-full max-w-sm">
          <form className="space-y-6 font-poppins" onSubmit={handleLogin}>
            <div className="flex flex-col items-center">
              <div className="mb-10">
                <Logo />
              </div>
              <h2 className="text-xl text-center font-bold text-coklate">
                Login
              </h2>
            </div>
            {error && (
              <div className="text-red-500 text-center font-medium">
                {error}
              </div>
            )}
            <Form
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan Email Anda"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="Tambahkan Password Anda"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="text-center">
              <Button
                type="submit"
                className="bg-coklate mt-4 shadow-md shadow-gray-700"
              >
                Login
              </Button>
            </div>
            <div className="text-black text-center font-bold">
              Belum Punya Akun?{" "}
              <Link to={"/register-admin"} className="text-coklate">
                Register Di sini
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginAdmin;
