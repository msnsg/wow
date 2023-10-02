import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./RegisterPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { back } from "../../features/loginFeature";
import { registerUserUpdate } from "../../features/registerFeatures";
import { useReducer } from "react";

const style = {
  height: 581,
  overflow: "auto",
};

export default function RegisterPage() {
  const initialState = {
    mobilenumber: "",
    username: "",
    password: "",
    city_id: "",
    referralCode: "",
    company_name: "",
    first_name: "",
    email: "",
    address: "",
    confirm_password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "MOBILEN_NUMBER":
        return { ...state, mobilenumber: action.payload.mobilenumber };
      case "USERNAME":
        return { ...state, username: action.payload.username };
      case "PASSWORD":
        return { ...state, password: action.payload.password };
      case "CITY":
        return { ...state, city_id: action.payload.city_id };
      case "REFERRAL_CODE":
        return { ...state, referralCode: action.payload.referralCode };
      case "COMPANY_NAME":
        return { ...state, company_name: action.payload.company_name };
      case "FULL_NAME":
        return { ...state, first_name: action.payload.first_name };
      case "EMAIL":
        return { ...state, email: action.payload.email };
      case "COFIRM_PASSWORD":
        return { ...state, confirm_password: action.payload.confirm_password };
      case "CLEAR_STATE":
        return { ...action.payload };
      default:
        return state;
    }
  };
  const [state, stateDispatch] = useReducer(reducer, initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      !state.mobilenumber ||
      !state.username
      // !state.password ||
      // !state.confirm_password ||
      // // !state.city_id ||
      // !state.referralCode ||
      // !state.companyName ||
      // !state.first_name ||
      // !state.email
    ) {
      toast.error("Please fill in all required fields", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (state.password !== state.confirm_password) {
      toast.error("Password and Confirm Password do not match", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    dispatch(registerUserUpdate({ ...state, lang_id: 1 })).then((response) => {
      const { payload, meta } = response;
      if (payload) {
        if (payload.error !== undefined) {
          console.log("error");
        } else {
          const { data, status } = payload;
          if (status === "1") {
            return navigate("/register_success", { replace: true });
          }
        }
      }
    });
  };

  const handleClear = () => {
    stateDispatch({
      payload: initialState,
      type: "CLEAR_STATE",
    });
  };

  const handleBackClick = () => {
    dispatch(back());
    navigate("/login");
  };

  return (
    <>
      <div className="register__container">
        <div className="register__left-column">
          <div className="register__header">
            <div className="register__header_items" onClick={handleBackClick}>
              <i className="bi-arrow-left"></i>
            </div>
            <div className="register__header_items">
              <h4>Register</h4>
            </div>
          </div>

          <div className="left__container" style={style}>
            <div className="row booking">
              <div className="col-md-12">
                <input
                  type="text"
                  name="fullName"
                  id="fullName1"
                  value={state.username}
                  placeholder="Username"
                  className="form-control reg__input"
                  onChange={(e) => {
                    stateDispatch({
                      payload: { username: e.target.value },
                      type: "USERNAME",
                    });
                  }}
                />
              </div>
            </div>
            <div className="row">
              <p></p>
            </div>
            <div className="row booking">
              <div className="col-md-12">
                <input
                  type="password"
                  name="fullName"
                  id="fullName2"
                  value={state.password}
                  placeholder="New Password"
                  className="form-control reg__input"
                  onChange={(e) => {
                    stateDispatch({
                      payload: { password: e.target.value },
                      type: "PASSWORD",
                    });
                  }}
                />
              </div>
            </div>
            <div className="row">
              <p></p>
            </div>
            <div className="row booking">
              <div className="col-md-12">
                <input
                  type="password"
                  name="fullName"
                  id="fullName3"
                  value={state.confirm_password}
                  placeholder="Confirm New Password"
                  className="form-control reg__input"
                  onChange={(e) => {
                    stateDispatch({
                      payload: { confirm_password: e.target.value },
                      type: "COFIRM_PASSWORD",
                    });
                  }}
                />
              </div>
            </div>
            <div className="row">
              <p></p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <select
                  id="experience1"
                  className="form-control reg__input"
                  style={{
                    height: "45px",
                    borderColor: "#000",
                    borderRadius: "0px",
                    fontSize: "14px",
                  }}
                >
                  <option>Select City</option>
                  <option value="4">Chennai</option>
                  <option value="4-6">Madurai</option>
                  <option value="7-9">Salem</option>
                  <option value="10-14">Trichy</option>
                  <option value="15">Coimbatore</option>
                </select>
              </div>
            </div>

            <div className="row">
              <p></p>
            </div>
            <div className="row booking">
              <div className="col-md-12">
                <input
                  type="text"
                  name="fullName"
                  id="fullName5"
                  value={state.referralCode}
                  placeholder="Referral Code"
                  className="form-control reg__input"
                  onChange={(e) => {
                    stateDispatch({
                      payload: { referralCode: e.target.value },
                      type: "REFERRAL_CODE",
                    });
                  }}
                />
              </div>
            </div>
            <div className="row">
              <p></p>
            </div>
            <div className="row booking">
              <div className="col-md-12">
                <input
                  type="text"
                  name="fullName"
                  id="fullName6"
                  value={state.company_name}
                  placeholder="Company Name"
                  className="form-control reg__input"
                  onChange={(e) => {
                    stateDispatch({
                      payload: { company_name: e.target.value },
                      type: "COMPANY_NAME",
                    });
                  }}
                />
              </div>
            </div>
            <div className="row">
              <p></p>
            </div>
            <div className="row booking">
              <div className="col-md-12">
                <input
                  type="text"
                  name="fullName"
                  id="fullName7"
                  value={state.first_name}
                  placeholder="Full Name"
                  className="form-control reg__input"
                  onChange={(e) => {
                    stateDispatch({
                      payload: { first_name: e.target.value },
                      type: "FULL_NAME",
                    });
                  }}
                />
              </div>
            </div>
            <div className="row">
              <p></p>
            </div>
            <div className="row booking">
              <div className="col-md-12">
                <input
                  type="text"
                  name="fullName"
                  id="fullName9"
                  value={state.email}
                  placeholder="Email Address"
                  className="form-control reg__input"
                  onChange={(e) => {
                    stateDispatch({
                      payload: { email: e.target.value },
                      type: "EMAIL",
                    });
                  }}
                />
              </div>
            </div>
            <div className="row">
              <p></p>
            </div>

            <div className="row booking">
              <div className="col-md-12">
                <input
                  type="text"
                  name="fullName"
                  id="fullName10"
                  value={state.mobilenumber}
                  placeholder="Mobile Number"
                  className="form-control reg__input"
                  onChange={(e) => {
                    stateDispatch({
                      payload: { mobilenumber: e.target.value },
                      type: "MOBILEN_NUMBER",
                    });
                  }}
                />
              </div>
            </div>
            <div className="row">
              <p></p>
            </div>

            <div className="row col-md-12">
              <div className="col-md-6 register__sub-btn">
                <button
                  className="re__submit_btn"
                  name="contact_form"
                  id="contact_form"
                  onClick={handleRegister}
                >
                  Submit
                </button>
              </div>
              <div className="col-md-6 register__sub-btn">
                <button
                  className="re__clr_btn"
                  name="contact_form"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="register__right-column"></div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
      />
    </>
  );
}
