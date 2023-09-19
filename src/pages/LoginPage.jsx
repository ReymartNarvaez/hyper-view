import background from "../assets/hyperviewbg.png";
import { LoginForm } from "../components/LoginForm";
import { LoginLogo } from "../components/LoginLogo";

export const LoginPage = () => {
  return (
    <div
      className="flex justify-center md:items-center h-screen bg-black"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LoginLogo />
      <LoginForm />
    </div>
  );
};
