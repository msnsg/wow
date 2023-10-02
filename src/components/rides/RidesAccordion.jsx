import React, { createContext, useEffect, useRef, useState } from "react";
import RidesPOD from "./RidesPOD";
import RidesConfirm from "./RidesConfirm";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export const RidesContext = createContext(null);

const RidesAccordion = ({ list }) => {
  const { updates, error, status } = useSelector(
    (state) => state.getHistoryCommunication
  );
  const [state, setState] = useState({});

  const accordionRef = useRef();
  const moreToggle = () => {
    const accordionId = accordionRef.current.id.split("__");
    const actualId = accordionId[0];
    const dynamicVale = `${actualId}__false`;

    if (
      accordionRef.current.id == dynamicVale &&
      accordionRef.current.ariaExpanded == "true"
    ) {
      accordionRef.current.id = `${actualId}__true`;
      accordionRef.current.innerHTML = "LESS DETAILS";
    } else {
      accordionRef.current.id = `${actualId}__false`;
      accordionRef.current.innerHTML = "MORE DETAILS";
    }
  };

  const showCommunication = () => {
    let isShow = false;
    if (
      list.all_communication != undefined &&
      list.all_communication.length > 0
    ) {
      list.all_communication.map((clist, index) => {
        if (
          (clist.type == 1 &&
            state["hideState_" + clist.communication_id] == undefined) ||
          (clist.type == 2 &&
            state["hideState_" + clist.communication_id] == undefined &&
            list.booking_status != 10 &&
            list.booking_status != 16 &&
            list.booking_status != 8 &&
            list.booking_status < 4) ||
          (clist.type == 3 &&
            state["hideState_" + clist.communication_id] == undefined) ||
          (clist.type == 5 &&
            state["hideState_" + clist.communication_id] == undefined)
        ) {
          isShow = true;
        }
      });
    }
    return isShow;
  };

  const handleResponseToast = (resMsg, resStatus, resErr) => {
    if (resMsg !== undefined) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      let response = resMsg;
      let icon = "success";

      if (resStatus != 1 && resErr != undefined) {
        response = resErr;
        icon = "error";
      }

      Toast.fire({
        icon: icon,
        title: response,
      });
    }
  };

  useEffect(() => {
    handleResponseToast(updates.communication_res, status, error);
  }, [updates]);

  return (
    <>
      {(list.pod_text.length > 0 ||
        (list.all_communication != undefined &&
          list.all_communication.length > 0)) &&
      showCommunication() ? (
        <div
          className="accordion accordion-flush"
          id={`accordionFlush-${list.booking_id}`}
        >
          <div className="accordion-item">
            <h2
              className="accordion-header"
              id={`flush-heading-${list.booking_id}`}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse-${list.booking_id}`}
                aria-expanded="false"
                aria-controls={`flush-collapseOne-${list.booking_id}`}
                onClick={() => moreToggle()}
                ref={accordionRef}
                id={`accordion-toggle${list.booking_id}__false`}
              >
                MORE DETAILS
              </button>
            </h2>
            <div
              id={`flush-collapse-${list.booking_id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`#flush-heading-${list.booking_id}`}
              data-bs-parent={`#accordionFlush-${list.booking_id}`}
            >
              <div className="accordion-body">
                <div className="row past_rides__item-md-conatiner">
                  <div className="col-12 col-sm-12 col-md-12">
                    {list.pod_text.length > 0 && (
                      <div>
                        <p className="md__note">{list.pod_text}</p>
                      </div>
                    )}

                    <RidesContext.Provider value={{ state, setState }}>
                      {list.all_communication.map((clist, index) => {
                        return (
                          <React.Fragment key={index}>
                            {clist.type == 1 ||
                            clist.type == 2 ||
                            clist.type == 5 ? (
                              <RidesPOD clist={clist} />
                            ) : (
                              clist.type == 3 && <RidesConfirm clist={clist} />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </RidesContext.Provider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RidesAccordion;
