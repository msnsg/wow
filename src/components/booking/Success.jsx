import React from "react";
import "./Booking.css";
import TitleHeader from "../TitleHeader";

const Success = () => {
  return (
      
    <div className="booking__container">
      <div className="booking__left-column">
        <div className="booking__header">
          <div className="booking__header_items">
          <TitleHeader isback={true} title={"Thank You"}/>
          </div>
        </div>

        <div className="left__container">

          <div>
              <div style={{marginTop:"189px", marginLeft:"0px"}}>
                  <img src="images/booking-img/success.png" className="img-fluid" alt="" />
              </div>
              <div>
                  <p style={{marginLeft:"-12px", fontSize:"15px", fontWeight:"bold", color:"darkgreen"}}>Success</p>
                  <p style={{fontSize:"14px", fontWeight:"bold"}}>We acknowledge receipt of your <br /> message and will respond shortly</p>
              </div>
          </div>
          <div>
              <div style={{marginTop:"186px"}}></div>
          </div>
        </div>

      </div>
      <div className="booking__right-column"></div>
    </div>
  );
};

export default Success;
