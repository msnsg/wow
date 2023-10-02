import React, { useContext } from "react";
import { callCommunication } from "../../features/communicationupdateFeature";
import { useDispatch } from "react-redux";
import { RidesContext } from "./RidesAccordion";
import Swal from "sweetalert2";

const RidesConfirm = ({ clist }) => {
  const dispatch = useDispatch();

  const { state, setState } = useContext(RidesContext);

  const handleCommunication = (communication_id, customer_confirm, amount) => {
    const data = {
      communication_id: communication_id,
      customer_confirm: customer_confirm,
    };

    if (customer_confirm == 4) {
      data.customer_booking_amount = amount;
    }

    dispatch(callCommunication(data));
    setState({ ...state, ["hideState_" + communication_id]: true });
  };

  const handleInputAmount = async (communication_id) => {
    let position = "top-start";
    if (window.screen.availWidth <= 412) {
      position = "top";
    }

    const { value: amount } = await Swal.fire({
      position: position,
      inputLabel: "Please enter wrong amount.",
      input: "number",
      inputPlaceholder: "Enter amount",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0032a0",
      cancelButtonColor: "#d0112b",
      inputValidator: (value) => {
        if (!value) {
          return "Please enter a amount";
        }

        if (value <= 0) {
          return "Please enter a amount";
        }

        if (/[^0-9]/g.test(value)) {
          return "Please enter the correct amount";
        }
        handleCommunication(communication_id, 4, value);
      },
    });

    if (amount) {
      console.log(`Entered amount: ${amount}`);
    }
  };

  return (
    <React.Fragment>
      {clist.type == 3 &&
        state["hideState_" + clist.communication_id] == undefined && (
          <>
            <div>
              <p className="md__trip-cfm-qus">{clist.message}</p>
            </div>
            <div>
              <button
                type="button"
                className="md__trip-cfm-btn"
                onClick={() =>
                  handleCommunication(
                    clist.communication_id,
                    clist.communication_id,
                    1
                  )
                }
              >
                CONFIRM
              </button>
            </div>
            <div>
              <button
                type="button"
                className="md__trip-notcfm-btn"
                onClick={() =>
                  handleCommunication(
                    clist.communication_id,
                    clist.communication_id,
                    3
                  )
                }
              >
                NOT DELIVERED
              </button>
            </div>
            <div>
              <button
                type="button"
                className="md__trip-wrongcfm-btn"
                onClick={() => {
                  handleInputAmount(clist.communication_id);
                }}
              >
                WRONG AMOUNT
              </button>
            </div>
          </>
        )}
    </React.Fragment>
  );
};

export default RidesConfirm;
