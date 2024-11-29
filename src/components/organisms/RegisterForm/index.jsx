import { Form } from "../../molekules";
import { Button, Logo } from "../../atoms";
import { Link } from "react-router-dom";

const RegisterForm = () => {
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
        <h2 className="text-xl text-center font-bold text-coklate">Register</h2>
      </div>
      <Form
        label="Username"
        type="text"
        id="username"
        name="username"
        placeholder="Tambahkan Username  Anda"
      />
      <Form
        label="Email"
        type="email"
        id="email"
        name="email"
        placeholder="Tambahkan Email Anda"
      />
      <Form
        label="Password"
        type="password"
        id="password"
        name="password"
        placeholder="Tambahkan Password Anda"
      />
      <div className="text-center">
        <Button className="bg-coklate mt-4 shadow-md shadow-gray-700">
          Register
        </Button>
      </div>
      <div className="text-black text-center font-bold">
        Sudah Punya Akun ?{" "}
        <Link to={"/login"} className="text-coklate">
          Login Di sini
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
