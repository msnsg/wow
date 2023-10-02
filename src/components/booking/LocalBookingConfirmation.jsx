import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TitleHeader from "../../components/TitleHeader";
import { CustomeInput } from "./CustomeInput";

const LocalBookingConfirmation = () => {
  const location = useLocation();

  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(location?.state);
  }, [location]);

  return (
    <div className="row">
      <div className="col-lg-3"   style={{ marginLeft: "0px", padding: "10px 0px" , height:"100vh"}}><br />
        <TitleHeader isback={true} title={title} /><br />
        <div style={{marginLeft:"20px", marginTop:"2px", fontSize:"12px"}}>
          <div>
            <p style={{ color: "#1644a9"}}>Pick up</p>
            <p>
              # 9-1-83 $ 84 , Amarchand sharma complex, Sarojini Devi Road ,
              SecunderaBoad
            </p>
          </div>
          <div>
            <p style={{ color: "#1644a9", fontSize:"12px" }}>Drop</p>
            <p>
              # 9-1-83 $ 84 , Amarchand sharma complex, Sarojini Devi Road ,
              SecunderaBoad
            </p>
          </div>
          <div>
            <p style={{ color: "#1644a9" }}>Approx Distance</p>
            <p>3.2 Km</p>
          </div>
          <div>
            <p style={{ color: "#1644a9" }}>Trip Fare</p>
            <h3>₹ 860</h3><br />
            <input type="checkbox" id="driver as helper" />
            <label for={"driver as helper"}  style={{marginLeft:"10px", marginBottom:"10px"}}> Driver as hepler</label>
          </div>
          <div>
            <p style={{ color: "#1644a9" }}>Helper Fare</p>
            <p>₹ 500</p>
          </div>
          <div>
            <p style={{ color: "#1644a9" }}>coupon Code</p>
            <CustomeInput
              buttonImage={" >"}
              name={"Enter Coupen Code (optional)"}
            />
          </div>

          <div>
            <h3 style={{ color: "red", fontSize:"13px" }}>BILL DETAILS</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Trip Fare</span>
              <span>$ 860</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Helper Fare</span>
              <span>$ 500</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Total Fare</span>
              <span>$ 1360</span>
            </div>
          </div>

          <div>
            <p style={{ color: "#1644a9", marginTop:"10px" }}>Select Payment Method</p>
            <div style={{display:"flex" }}>

            {[
              { label: "WOW Wallet", value: 1 },
              { label: "Cash", value: 2 },
            ].map((item) => (
              <div style={{margin:"10px 10px"}}>
                <img src="" alt="" />
                <label htmlFor={item?.label} style={{margin:"0px 10px"}}>{item.label}</label>
                <input id={item?.label} type="radio" checked={(item.value = 2)} />
              </div>
            ))}
            </div>
          </div>
          <div>
            <input type="checkbox" id="confirm" />
            <label htmlFor="confirm" style={{marginLeft:"10px"}}>
              I have read{" "}
              <button
                style={{
                  color: "red",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ffffff",
                  margin: "0px 2px ",
                }}
              >
                {" "}
                Terms and Conditions
              </button>
            </label>
          </div>
        </div>
        <div style={{marginLeft:"90px"}}>
          <button
            className="btn-blue"
            name="contact_form"
            id="contact_form"
            style={{ marginTop: "25px" }}
            // onClick={()=>navigator("")}
          >
          Confirm & Book
          </button>
        </div>
      </div>

      <div className="col-lg-9">
        <img
          src="images/booking-img/booking-01.png"
          className="img-fluid"
          alt=""
        />
      </div>
    </div>
  );
};

export default LocalBookingConfirmation;
