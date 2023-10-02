import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [state, setState] = useState(false);
  const { user_details, otp_status } = useSelector(
    (state) => state.user_details
  );

  useEffect(() => {
    if (otp_status === "1") {
      setState(true);
    }
  }, [otp_status]);

  return state ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
