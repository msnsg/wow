import React from "react";

const RidesNavBar = ({ stateDispatch, activeTab }) => {
  return (
    <>
      <div
        className={
          activeTab == 2 ? "rides__tab-item active" : "rides__tab-item"
        }
        tabIndex="1"
        onClick={() =>
          stateDispatch({ type: "ACTIVE_TAB", payload: { activeTab: 2 } })
        }
      >
        Active
      </div>
      <div
        className={
          activeTab == 1 ? "rides__tab-item active" : "rides__tab-item"
        }
        tabIndex="2"
        onClick={() =>
          stateDispatch({ type: "ACTIVE_TAB", payload: { activeTab: 1 } })
        }
      >
        Past
      </div>
    </>
  );
};

export default RidesNavBar;
