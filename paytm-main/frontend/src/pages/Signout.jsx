import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Signout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/signin");
  }, [navigate]);

  return (
    <div className="h-screen flex justify-center items-center bg-slate-300">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold">Signing you out...</h2>
      </div>
    </div>
  );
};
