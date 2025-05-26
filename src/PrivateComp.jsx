import { Navigate, Outlet } from "react-router-dom";

const PrivateComp = () => {
  const auth = localStorage.getItem("userData");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComp;
