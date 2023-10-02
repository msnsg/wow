import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import "./LoginPage.css";
import truck from "../../../public/images/side-banners/slide-03.png";
import logo from "../../../public/images/wowtruck-logo.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaArrowLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { login } from "../../features/loginFeature";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const createUser = async (event) => {
    event.preventDefault();
    if (phone === "") {
      toast.error("Please enter your phone number", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    const phoneNumberWithoutPrefix = phone.startsWith("91")
      ? phone.replace("91", "")
      : phone;

    dispatch(login({ phone: phoneNumberWithoutPrefix, page: 1 })).then(
      (response) => {
        console.log(response);

        const { payload, meta } = response;
        if (payload) {
          if (payload.error !== undefined) {
            console.log("error");
          } else {
            const { data, status } = payload;
            if (status === "1") {
              navigate("/login-otp");
            }
          }
        }
      }
    );
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (phone === "") {
      toast.error("Please enter your phone number", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const phoneNumberWithoutPrefix = phone.startsWith("91")
      ? phone.replace("91", "")
      : phone;

    dispatch(login({ phone: phoneNumberWithoutPrefix, page: 2 })).then(
      (response) => {
        const { payload, meta } = response;
        if (payload) {
          if (payload.error !== undefined) {
            console.log("error");
          } else {
            const { data, status } = payload;
            if (status === "1") {
              navigate("/login-otp");
            }
          }
        }
      }
    );
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <Container fluid>
      <Row className="login-container">
        <Col xs={12} md={4} className="left-column">
          <div className="background-login-card">
            <div className="cancel-icon">
              <FaArrowLeft onClick={handleBackClick} />
            </div>
            <img
              src={logo}
              alt="head-logo"
              width={50}
              height={50}
              className="mb-3"
            />
            <Form.Label className="small-text text-center login-label">
              <strong>Enter your mobile number</strong> <br />
              <strong>A 4-digit OTP will be sent via SMS</strong>
            </Form.Label>
            <div className="centered-container">
              <div className="d-flex justify-content-center">
                <PhoneInput
                  country={"in"}
                  disableDropdown={true}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                />
              </div>
              <Button
                // variant="primary"
                type="submit"
                onClick={createUser}
                className="form-btn login__btn"
              >
                Next
              </Button>
              <Button
                // variant="danger"
                onClick={handleRegister}
                className="form-btn register__btn"
              >
                Register
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
  );
};

export default LoginPage;
