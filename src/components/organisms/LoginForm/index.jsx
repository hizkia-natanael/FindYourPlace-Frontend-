import { Form } from "../../molekules";
import { Button, Logo } from "../../atoms";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-poppins">
      <div className="flex flex-col  items-center">
        <div className="mb-10">
          <Logo />
        </div>
        <h2 className="text-xl text-center font-bold text-coklate">Login</h2>
      </div>
      <Form
        label="Email"
        type="email"
        id="email"
        name="email"
        placeholder="Masukkan Email Anda"
      />
      <Form
        label="Password"
        type="password"
        id="password"
        name="password"
        placeholder="Masukkan Password Anda"
      />
      <div className="text-center">
        <Button className="bg-coklate mt-4 shadow-md shadow-gray-700">
          Login
        </Button>
      </div>
      <div className="text-end">
        <Link className="text-black text-base">Lupa Password?</Link>
      </div>
      <div className="text-black text-center font-bold">
        Belum Punya Akun ?{" "}
        <Link to={"/register"} className="text-coklate">
          Daftar Di sini
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
