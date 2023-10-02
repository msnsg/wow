import React from "react";
import TitleHeader from "../TitleHeader";
import { CustomButton, CustomeInput } from "./CustomeInput";
import { useNavigate } from "react-router-dom";

const Insurance = () => {
  const navigate = useNavigate();
  return (
    <div className="booking__container">
      <div className="booking__left-column">
        <TitleHeader isback={true} title={"Enter Your Product Price Value"} />
        <div style={{ margin: "10px" }}>
          <span style={{ margin: "7px 1px", fontSize: "11px", color:"#0032a0" }}>
            Enter the total cost of the product
          </span>
          <div style={{ margin: "0px 1px", fontSize:"13px" }}>
            <CustomeInput buttonImage={">"} name="Amount" />
          </div>
        </div>
        <div style={{textAlign:"center",  margin: "10px"}}>

        <button
          name={"Submit"}
          onClick={() => navigate("/booking_now",{state: "OutStation"})}
          style={{
            color: "#ffffff",
            background: "#0032a0",
            padding: "5px 20px",
            border: "none",
            width:"100%"
          }}
        >
          SUBMIT
        </button>
        </div>

        <div style={{ margin: "1px" }}>
          <p className="insurance_desc">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg> Rs.40 Per 1 Lakh + GST.</p>
          <p className="insurance_desc">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg> Maximum sum insured Rs.50 Lakhs per policy.</p>
              <p className="insurance_desc">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg> 10% additionally to be added based on IDV calculated &nbsp;&nbsp;&nbsp;&nbsp;under the policy of over 100% total invoice cost.
          </p>
        </div>

        <div style={{ margin: "1px" }}>
        <p className="insurance_tc_title">OTHER TERMS AND CONDITIONS</p>
        </div>
        <div className="insurance_desc">
        <p>
          1. M&DP Clause: - Refund unutilized premium balance at the end of policy period is subject to following conditions:
        </p>
        <p>
          2. Open policies are subject to a minimum retention premium of Rs.5, 000/- or premium collected where actual premium is less than Rs.5000.
        </p>
        <p>
          3. Refund of premium for unutilized balance shall be made only for policy where the incurred claims ratio in the policy is less than 70%.
        </p>
        <p>
          4. The Per Sending and Per Location Limit represent the maximum amount that the insurer shall pay in respect of any one accident or series of event. In circumstances where this policy extends to cover duty under Imports, per sending limit with respect to Imports shall include the amount of such duty.
        </p>
        <p>
          5. In respect of any Limit per sending and / or Limit per location exceeding the above mentioned limits the insurer should be informed prior to inception of the risk and written agreement taken as to rate and terms, otherwise insured will be the self insurer and condition of average will be applicable at the time of claim.
        </p>
        <p>
          6. Any declaration made to the company which does not fall within the terms and conditions of the policy would be considered to be null & void ab initio and the company would in no way be held liable for any consequence arising out of the declaration.
        </p>
        </div>


      </div>
      <div className="booking__right-column"></div>
    </div>
  );
};

export default Insurance;
