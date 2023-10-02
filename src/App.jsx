import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AboutUsPage,
  BookNowPage,
  CareersPage,
  ContactUsPage,
  HomePage,
} from "./pages";
import { NavBar, Footer } from "./components";
import { Suspense, useEffect, useState } from "react";
import { Config } from "./constants/Config";
import { useDispatch } from "react-redux";
import Rides from "./components/rides/Rides";
import ShowCommon from "./components/ShowCommon";

// import Login from "./components/login/LoginPage";
import RegisterPage from "./components/login/RegisterPage";
import LoginOtp from "./components/login/LoginOtp";
import ProtectedRoute from "./components/protect/ProtectedRoute";
import { lazy } from "react";
import {
  RegisterProtected,
  RegisterSuccessProtected,
} from "./components/protect/RegisterProtected";

const Login = lazy(() => import("./components/login/LoginPage"));
const RegistrationSuccess = lazy(() =>
  import("./components/login/RegistrationSuccess")
);



// import Login from "./components/login/RegisterMobile";
// import RegisterPage from "./components/login/Register";
// import LoginOtp from "./components/login/ConfirmOtp";

import AddAddress from "./components/address/AddAddress";
import SavedAddress from "./components/address/SavedAddress";
import Bookingnow from "./components/booking/index";

import Success from "./components/booking/Success";
import LocalBookingConfirmation from "./components/booking/LocalBookingConfirmation";
import Insurance from "./components/booking/Insurance";

function App() {

  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const dispatch = useDispatch();

  const loadGoogleMaps = async () => {
    if (window.google && window.google.maps) {
      setGoogleMapsLoaded(true);
    } else {
      try {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${Config.GOOGLE_MAP_KEY}&libraries=places&region=in&callback=Function.prototype`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
          setGoogleMapsLoaded(true);
        };
        document.head.appendChild(script);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    loadGoogleMaps();
    // let loggedUser = JSON.parse(localStorage.getItem("users"));
    // let customerId = 0,
    //   authToken = 0;
    // if (loggedUser != undefined) {
    //   customerId = loggedUser.userid;
    //   authToken = loggedUser.auth_token;
    // } else {
    //   customerId = Config.CUSTOMER_ID;
    //   authToken = Config.CUSTOMER_TOKEN;
    // }
    // let data = {
    //   customer_id: customerId,
    //   auth_token: authToken,
    //   type: newloadConstants.GETADDRESSLIST,
    //   all_rows: 1,
    //   action: "listaddress_v1",
    // };
    // dispatch(serviceCall(data));
  }, []);

  return (
    <div className="container-fluid">
      <Router>
        <ShowCommon>
          <NavBar />
        </ShowCommon>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <Suspense fallback={"Loading..."}>
                <Login />
              </Suspense>
            }
          />
          <Route element={<RegisterSuccessProtected />}>
            <Route
              path="/register_success"
              element={
                <Suspense fallback={"Loading..."}>
                  <RegistrationSuccess />
                </Suspense>
              }
            />
          </Route>
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/book-now" element={<BookNowPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/login-otp" element={<LoginOtp />} />

          <Route element={<RegisterProtected />}>
            <Route path="/register" element={<RegisterPage />} />
          </Route>
         
          <Route path="/rides" element={<Rides />} />
          <Route path="/booking_now" element={<Bookingnow />} />
          <Route path="/booking_success" element={<Success />} />
          <Route path="/booking_confirm" element={<LocalBookingConfirmation />} />
          <Route path="/Insurance" element ={<Insurance/>} />

          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/saved-address" element={<SavedAddress />} />
          {/* </Route> */}
        </Routes>
        <ShowCommon>
          <Footer />
        </ShowCommon>
      </Router>
    </div>
  );
}

export default App;
