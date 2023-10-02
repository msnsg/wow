import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const RidesLoader = () => {
  return (
    <div className="rides__loader">
      <ClipLoader color={"#0032a0"} size={25} loading={true} />
    </div>
  );
};

export default RidesLoader;
