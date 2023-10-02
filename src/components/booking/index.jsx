import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookingLocal from "./BookingLocal";
import BookingOutStation from "./BookingOutStation";
import { MenuHeader } from "./CustomeInput";
import "./Booking.css";

const index = () => {

  const location = useLocation()  
  const [bookingType, setBookingType] = useState("local");
  const activeButton  = {
    color:"#ffffff" , background:"#0032a0", padding:"5px 10px" ,  border:"none"
  }
  const unActiveButton = {
    color:"#383838" , background:"#ffffff" ,  padding:"5px" , border:"none" 
  }

  useEffect(()=>{
    setBookingType(location?.state?location?.state :"local")
  },[location])
  return (
    // <div style={{display:"flex", height:"100vh"}}>
    //   <div style={{flex:"0.28"}}>
    //     <div className="row" style={{height:"24vh"}}>

    //     <div className="row">
    //       <div className="bookingtitle">Track your current Rides</div>
    //     </div>
       
    //     <MenuHeader/>
    //     <div className="row" style={{marginBottom:"10px"}}>
            
    //         <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                
    //           <button className="" style={ bookingType =="local"? activeButton:unActiveButton } onClick={()=> setBookingType("local")}>Intracity</button>
    //         </div>
    //         <div className="col-lg-2 col-md-2 col-sm-2 text-center">

    //         </div>
    //         <div className="col-lg-3 col-md-3 col-sm-3 text-left">

    //           <button className="" style={ bookingType == "OutStation"?activeButton:unActiveButton } onClick={()=>setBookingType("OutStation")}>Intercity</button>
    //         </div>
    //         <div className="col-lg-1 col-md-1 col-sm-1 text-center">

    //         </div>
    //     </div>
    //     </div>
    //     <div  className="row"style={{padding:"0px 10px", height:"76vh", overflow:"scroll"}}>
    //     {
    //         bookingType =="local"? <BookingLocal/>: <BookingOutStation/>
    //     }
    //     </div>

    //   </div>

    //   <div style={{flex:"0.72"}}>
    //     <img
    //       src="images/booking-img/booking-01.png"
    //       //className="img-fluid"
    //       style={{width:"100%", height:"100vh"}}
    //       alt=""
    //     />
    //   </div>
    // </div>

    <div className="booking__container">
      <div className="booking__left-column">
          <div className="bookingtitle">Track your current Rides</div>

          <div className="left__container">
          <MenuHeader/>
            <div className="row" style={{marginBottom:"3px"}}>
            <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                
                <button className="" style={ bookingType =="local"? activeButton:unActiveButton } onClick={()=> setBookingType("local")}>Intracity</button>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 text-center">
            
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-left">
            
                <button className="" style={ bookingType == "OutStation"?activeButton:unActiveButton } onClick={()=>setBookingType("OutStation")}>Intercity</button>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 text-center">
            
                </div>
            </div>
          </div>
          <div  className="row"style={{padding:"0px 10px", height:"69vh", overflow:"scroll"}}>
          {
              bookingType =="local"? <BookingLocal/>: <BookingOutStation/>
          }
          </div>

      </div>
      <div className="booking__right-column"></div>
    </div>
  );
};

export default index;
