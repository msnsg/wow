import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const RegisterProtected = () => {
  const { isLoggedInReg } = useSelector((state) => state.user_details);
  return isLoggedInReg ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export const RegisterSuccessProtected = () => {
  const { isRegUserStatus } = useSelector((state) => state.registerFeatures);
  const { isLoggedInReg } = useSelector((state) => state.user_details);

  return isLoggedInReg && isRegUserStatus ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
