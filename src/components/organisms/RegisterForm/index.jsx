import { Form } from "../../molekules";
import { Button, Logo } from "../../atoms";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../config/authStore";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tambahkan console.log untuk debugging
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Validasi input
    if (!username || !email || !password) {
      toast.error("Semua field harus diisi!"); // Notifikasi jika input tidak valid
      return;
    }

    try {
      const data = await register(username, email, password);
      console.log("Registrasi berhasil:", data);
      toast.success("Registrasi berhasil!"); // Notifikasi sukses
      navigate("/login"); // Arahkan ke halaman login setelah registrasi
    } catch (err) {
      console.error("Registrasi gagal:", err);
      const errorMessage = err.response?.data?.message || "Registrasi gagal";
      setError(errorMessage); // Tampilkan pesan error di UI
      toast.error("Registrasi gagal: " + errorMessage); // Notifikasi dengan pesan kesalahan
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 font-poppins">
        <div className="flex flex-col items-center">
          <div className="mb-10">
            <Logo />
          </div>
          <h2 className="text-xl text-center font-bold text-coklate">Register</h2>
        </div>
        {error && (
          <div className="text-red-500 text-center font-medium">{error}</div>
        )}
        <Form
          label="Username"
          type="text"
          id="username"
          name="username"
          placeholder="Masukkan Username Anda"
          required
          value={username}
          onChange={(e) => {
            console.log("Username input:", e.target.value);
            setUsername(e.target.value);
          }}
        />
        <Form
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Masukkan Email Anda"
          required
          value={email}
          onChange={(e) => {
            console.log("Email input:", e.target.value);
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
            console.log("Password input:", e.target.value);
            setPassword(e.target.value);
          }}
        />
        <div className="text-center">
          <Button type="submit" className="bg-coklate mt-4 shadow-md shadow-gray-700">
            Register
          </Button>
        </div>
        <div className="text-black text-center font-bold">
          Sudah Punya Akun?{" "}
          <Link to={"/login"} className="text-coklate">
            Login Di sini
          </Link>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default RegisterForm;