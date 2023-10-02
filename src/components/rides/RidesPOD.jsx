import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callCommunication } from "../../features/communicationupdateFeature";
import { RidesContext } from "./RidesAccordion";

const RidesPOD = ({ clist }) => {
  const dispatch = useDispatch();
  const { updates, error, isLoading, status } = useSelector(
    (state) => state.getHistoryCommunication
  );

  const { state, setState } = useContext(RidesContext);

  const dotFormat = (content, format = ".", type) => {
    if (type != 2) {
      let lines = content.split(format).filter((item) => item != "");
      if (lines.length > 1) {
        const newLine = lines.map((line, index) => {
          return <p key={index}>{`${line}`}</p>;
        });
        return newLine;
      } else {
        return null;
      }
    } else {
      return <p>{`${content}`}</p>;
    }
  };

  const handleCommunication = (id, communication_id, customer_confirm) => {
    const data = {
      communication_id: communication_id,
      customer_confirm: customer_confirm,
    };

    dispatch(callCommunication(data));
    setTimeout(() => {
      setState({ ...state, ["hideState_" + id]: true });
    }, 1000);
  };

  return (
    <React.Fragment>
      {((clist.type == 1 &&
        state["hideState_" + clist.communication_id] == undefined) ||
        (clist.type == 2 &&
          state["hideState_" + clist.communication_id] == undefined) ||
        (clist.type == 5 &&
          state["hideState_" + clist.communication_id] == undefined)) && (
        <>
          <div>
            <h3 className="md__pod-qus">
              {dotFormat(clist.message, "?", clist.type)}
            </h3>
          </div>
          <div className="md__pod-cfm">
            <button
              type="button"
              className="md__pod-yes"
              onClick={(e) => {
                e.stopPropagation();
                handleCommunication(
                  clist.communication_id,
                  clist.communication_id,
                  1
                );
              }}
            >
              YES
            </button>
            <button
              type="button"
              className="md__pod-no"
              onClick={(e) => {
                e.stopPropagation();
                handleCommunication(
                  clist.communication_id,
                  clist.communication_id,
                  2
                );
              }}
            >
              NO
            </button>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default RidesPOD;
