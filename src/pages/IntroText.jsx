import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const IntroText = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-black text-red-500">
      <div className="text-center">
        <p id="hyper-view" className="text-5xl font-bold tracking-wider">
          HYPER-VIEW
        </p>
      </div>
    </div>
  );
};

export default IntroText;
