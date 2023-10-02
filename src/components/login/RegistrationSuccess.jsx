import { useSelector } from "react-redux";
import "./RegistrationSuccess.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
const RegistrationSuccess = () => {
  const navigate = useNavigate();

  const { isLoadingReg, isLoggedInReg } = useSelector(
    (state) => state.registerFeatures
  );

  const handleBackClick = () => {
    navigate("/login", { replace: true });
  };

  return (
    <>
      {/* {isLoggedInReg &&
      !isLoadingReg &&
      otp_status === "1" &&
      user_details.isVerifed ? ( */}
      <div className="regsuccess__container">
        <div className="regsuccess__left-column">
          <div className="reg_left__container">
            <div className="regsuccess__header">
              <div
                className="regsuccess__header_items"
                onClick={handleBackClick}
              >
                <i className="bi-arrow-left"></i>
              </div>
              <div className="regsuccess__header_items">
                <h4>Thank You</h4>
              </div>
            </div>

            <div className="row reg__success_logo">
              <div className="col-md-12">
                <img src="images/booking-img/success.png" alt="" />
              </div>
            </div>

            <div className="row reg__success">
              <div className="col-md-12">
                <p className="reg__success_box1">Register Successfully</p>
                <p className="reg__success_box2">
                  You have Successfully Registered with <br /> WOWTRUCK
                </p>
                <p className="reg__success_box3">
                  <NavLink to="/login" className="reg__success_box3-nav">
                    Click here to Login
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="regsuccess__right-column"></div>
      </div>
      {/* ) : (
        <Navigate to="/login" replace={true} />
      )} */}
    </>
  );
};

export default RegistrationSuccess;
