import React from "react";
import { useNavigate } from "react-router-dom";

const TitleHeader = ({ title, isback }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {isback && (
          <button
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "#ffffff",
              margin: "0px 10px ",
              fontWeight: "bold",
            }}
            onClick={() => navigate(-1)}
          >
            {"<-"}
          </button>
        )}
        <span style={{ margin: "0px 15px", fontWeight: "bold", fontSize:"12px" }}>{title}</span>
        <div></div>
      </div>
    </div>
  );
};

export default TitleHeader;
