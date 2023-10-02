import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  InputGroup,
} from "react-bootstrap";
import "./LoginOtp.css";
import truck from "../../../public/images/side-banners/slide-01.png";
import logo from "../../../public/images/wowtruck-logo.png";
import { FaArrowLeft, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { login_otp, resend_otp } from "../../features/loginFeature";

export default function LoginOtp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_details, user_info_page } = useSelector(
    (state) => state.user_details
  );

  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (!user_info_page) {
      navigate("/login", { replace: true });
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (otp) {
      dispatch(login_otp({ phone: user_details.login_phone, otp: otp })).then(
        (response) => {
          const { payload, meta } = response;
          if (payload) {
            if (payload.error !== undefined) {
              console.log("error");
            } else {
              const { data, status } = payload;
              if (status === "1") {
                localStorage.setItem("users", JSON.stringify(data));

                if (user_info_page == 1 && otp != "") {
                  return navigate("/book-now", { replace: true });
                } else if (user_info_page == 2 && otp != "") {
                  return navigate("/register", { replace: true });
                }
              }
            }
          }
        }
      );
    }
  };

  const handleResendOTP = (e) => {
    e.preventDefault();
    // Logic
    dispatch(resend_otp({ phone: user_details.login_phone, resend_otp: 1 }));
    console.log("Resend OTP button clicked");
  };

  // const handleBackClick = () => {
  //     navigate('/login');
  // };

  return (
    <>
      <Card>
        <Container fluid>
          <Row className="login-container">
            <Col xs={12} md={4} className="left-column">
              <div className="background-login-card">
                <div className="cancel-icon">
                  <FaArrowLeft />
                </div>
                <img
                  src={logo}
                  alt="head-logo"
                  width={50}
                  height={50}
                  className="mb-3"
                />
                <Form.Label className="small-text text-center login-label">
                  <strong>{`Verify and ${
                    user_info_page == 2 ? "Register" : "Login"
                  }`}</strong>
                  <br />
                  <strong>
                    Enter the OTP sent to your mobile number
                    {user_details.login_phone}
                  </strong>
                </Form.Label>
                <div className="centered-container">
                  <div className="d-flex justify-content-center otp-input">
                    <InputGroup className="custom-input">
                      <InputGroup.Text>
                        <FaLock /> {/* OTP symbol icon */}
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Enter 4 digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        autoFocus
                        className="otp-input"
                      />
                    </InputGroup>
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => handleLogin(e)}
                    className="form-btn"
                  >
                    {user_info_page == 2 ? "Register" : "Login"}
                  </Button>
                  <Button
                    variant="link"
                    onClick={handleResendOTP}
                    className="form-btn resend-otp"
                  >
                    Resend OTP
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8} className="right-column">
              <div className="bg-secondary">
                <img src={truck} alt="" />
              </div>
            </Col>
          </Row>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
          />
        </Container>
      </Card>
    </>
  );
}
