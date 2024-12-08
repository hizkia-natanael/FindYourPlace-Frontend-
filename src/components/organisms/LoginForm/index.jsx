import { Form } from "../../molekules";
import { Button, Logo } from "../../atoms";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../config/authStore";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Validasi input
    if (!email || !password) {
        toast.error("Email dan password harus diisi!"); 
        return;
    }

    try {
        const data = await login(email, password);
        console.log("Login berhasil:", data);
        toast.success("Login berhasil!");
        navigate("/"); 
    } catch (err) {
        console.error("Login gagal:", err);
        const errorMessage = err.response?.data?.message || "Login gagal"; 
        setError(errorMessage);
        toast.error("Login gagal: " + errorMessage); 
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 font-poppins">
        <div className="flex flex-col items-center">
          <div className="mb-10">
            <Logo />
          </div>
          <h2 className="text-xl text-center font-bold text-coklate">Login</h2>
        </div>
        {error && (
          <div className="text-red-500 text-center font-medium">{error}</div>
        )}
        <Form
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Masukkan Email Anda"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Masukkan Password Anda"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center">
          <Button type="submit" className="bg-coklate mt-4 shadow-md shadow-gray-700">
            Login
          </Button>
        </div>
        <div className="text-end">
          <Link className="text-black text-base">Lupa Password?</Link>
        </div>
        <div className="text-black text-center font-bold">
          Belum Punya Akun?{" "}
          <Link to={"/register"} className="text-coklate">
            Daftar Di sini
          </Link>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
