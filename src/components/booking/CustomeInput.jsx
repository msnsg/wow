import React, { useState, useCallback, setState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const CustomeInput = ({
  imagePath,
  value,
  name,
  buttonImage,
  onClick,
  onChange,
  disabled,
  onBlur,
  type,
  style,
}) => {
  return (
    <div
      style={{
        // margin: "2px 0px",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "40px",
        width: "100%",
        textAlign: "center",
        marginBottom: "5px",
        ...style,
      }}
    >
      <img scr={imagePath} alt="" style={{ width: "10%" }} />
      <input
        value={value}
        placeholder={name}
        name={name}
        style={{
          border: "none",
          outline: "none",
          width: buttonImage ? "80%" : "90%",
          marginRight: "5px",
          fontSize:"1.2rem", 
          color: "#827575",
        }}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        min={type == "date" && new Date().toISOString().split("T")[0]}
      />
      {buttonImage && (
        <button
          style={{
            width: "10%",
            border: "none",
            outline: "none",
            backgroundColor: "#ffffff",
          }}
          onClick={onClick}
          disabled={disabled}
        >
          {/* <img scr={buttonImage} alt="" /> */}
          {buttonImage}
        </button>
      )}
    </div>
  );
};

const CustomeSelect = ({
  name,
  menuItems,
  imagePath,
  value,
  onChange,
  disabled,
  style,
}) => {
  return (
    <div
      className="text-center"
      style={{
        margin: "2px 0px",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "40px",
        marginBottom: "5px",
        ...style,
      }}
    >
      <img scr={imagePath} alt="" style={{ width: "10%" }} />

      <select
        name={name}
        value={value}
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          height: "28px",
          padding: "0px",
          color: "#827575",
          fontSize: "1.2rem",
        }}
        onChange={onChange}
        disabled={disabled}
      >
        {menuItems?.map((item) => (
          <option
            value={item.id}
            style={{
              height: "30px",
            }}
          >
            {item.label}
          </option>
        ))}
      </select>
      <div
        style={{
          width: "3%",
          backgroundColor: "#ffffff",
        }}
      ></div>
    </div>
  );
};

const GroupRadioButton = ({ field, value, onChange, style }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px",
        ...style,
      }}
    >
      {field?.map((item) => (
        <div style={{ display: "flex" }}>
          <input
            type="radio"
            id={item?.name}
            name={item?.name}
            value={item?.value}
            checked={item?.value == value}
            style={{ marginRight: "7px" }}
            onChange={onChange}
          />
          <label for={item?.name}>{item?.name}</label>
        </div>
      ))}
    </div>
  );
};

const CustomAccortionList = ({ list }) => {
  const [display, setDisplay] = useState("flex");
  const [index, setIndex] = useState(0);

  const handleHideList = useCallback(
    (i) => () => {
      if (i == index) {
        setDisplay((prev) => (prev == "flex" ? "none" : "flex"));
      } else {
        setDisplay("flex");
      }
      setIndex(i);
    },
    [index]
  );
  return (
    <div>
      {list?.map((item, i) => (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 25px",
              fontSize: "13px",
              // border: "1px solid",
              // boxShadow: "1px 1px 1px black"
            }}
          >
            <img src={"images/booking-img/alldost.png"} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <span>{item?.name}</span>
              <span>{item?.type}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{`${item.dutarion} ${item?.unit}`}</span>
              <span>{item?.label}</span>
              <div></div>
            </div>

            <button
              onClick={handleHideList(i)}
              style={{
                height: "25px",
                width: "25px",
                background: "white",
                border: "none",
                outline: "none",
              }}
            >{`>`}</button>
          </div>

          {item?.MenuItem?.map((item1) => (
            <div
              style={{
                display: index == i ? display : "none",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid black",
                margin: "20px",
                padding: "10px",
                fontSize: "13px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img scr="" alt="" />
                <div>{`${item1?.hour} Hours`}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img scr="" alt="" />
                <div>{`${item1?.km} km`}</div>
              </div>
              <div>
                <div>{`$ ${item1?.amount}`}</div>
              </div>
              <input type="radio" />
            </div>
          ))}
          <hr
            style={{
              borderTop: "1px dashed ",
              display: index == i ? display : "none",
            }}
          />
        </>
      ))}
    </div>
  );
};

const MenuHeader = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1px 20px",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <div style={{ margin: "5px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-justify"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div style={{ textAlign: "center" }}>
        <a className="navbar-brand" href="index.html">
          <img
            src="images/wowtruck-logo.png"
            className="img-fluid"
            alt=""
            style={{ height: "50%", width: "50%" }}
          />
        </a>
      </div>
      <div style={{ margin: "5px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </div>
    </div>
  );
};

const PickUpPerson = ({ data, type }) => {
  const [open, setOpen] = useState(false);
  const handleVisibility = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  return (
    <>
      {(data?.length > 1 || data[0]?.address?.length>1)&& (
        <div
          style={{ margin: "10px 0px", border: "1px solid", padding: "5px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 15px",
              minHeight: "40px",
              alignItems: "center",
              borderBottom: open ? "1px solid" : "none",
            }}
            onClick={handleVisibility}
          >
            {/* <div> user </div> */}
            <div> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
            </svg>
           </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {data.map((item, index) => (
                <>
                   {index == 0 && data[0]?.address?.length > 1? (
                    <div
                      style={{
                        background: "rgb(0, 50, 160)",
                        padding: "0px 10px",
                        color: "#ffff",
                        borderRadius: "20px",
                        margin: "2px",
                        fontSize:"13px",
                      }}
                    >
                      {`${type =="Current Location"? "Pickup": "Drop"} ${index +1}`}
                    </div>
                  ):(
                    <div
                      style={{
                        background: "rgb(0, 50, 160)",
                        padding: "0px 10px",
                        color: "#ffff",
                        borderRadius: "20px",
                        margin: "2px",
                        fontSize:"13px",
                      }}
                    >
                      {`${type =="Current Location"? "Pickup": "Drop"} ${index +1}`}
                    </div>
                  )
                  }
                </>
              ))}
            </div>

            <div>{">"}</div>
          </div>

          <div style={{ display: open ? "block" : "none" }}>
            {data?.map((item, index) => (
              <>
                { (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: " 5px",
                      // float:"left",
                      // alignItems:"flex-start"
                    }}
                  >
                    <div style={{ margin: "0px 0px",fontSize:"13px" }}> {`${type =="Current Location"? "Pickup": "Drop"} ${index +1}`}</div>
                    <div style={{ display: "flex" }}>
                      <input
                        name="name"
                        placeholder="Name"
                        style={{
                          outline: "none",
                          border: "none",
                          borderBottom: "1px solid",
                          margin: "5px",
                          fontSize:"13px",
                        }}
                      />
                      <input
                        name="phone"
                        placeholder="Mobile"
                        style={{
                          outline: "none",
                          border: "none",
                          borderBottom: "1px solid",
                          margin: "5px",
                          fontSize:"13px",
                        }}
                      />
                    </div>
                  </div>
                )}
              </>
            ))}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={handleVisibility}
                style={{
                  background: "rgb(0, 50, 160)",
                  color: "#ffff",
                  border: "none",
                  padding: "5px 15px",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CustomButton = ({ ButtonImage, name, onClick }) => {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "end",
        border: "1px solid",
        background: "#ffff",
        alignItems: "center",
        width: "100%",
        height: "40px",
        marginBottom: "10px",
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: "95%",
          padding: "0% 12%",
          color: "#827575",
          fontSize: "1.2rem",
          textAlign: "start",
        }}
      >
        {name}
      </div>
      <div style={{ width: "5%", margin: "3%" }}>{ButtonImage}</div>
    </button>
  );
};

const CustomeAdvanceAmount = ({}) => {
  const [value, setValue] = useState("");
  const [display, setDisplay] = useState("none");

  const taxAmtVal = (val) => {
    const data = (val || "").toString().replace(/\D+/g, "").slice(0, 7);
    return parseFloat(data) > 0
      ? (parseFloat(data) / 100)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : "";
  };

  const handleAmont = useCallback((event) => {
    const { name, value } = event.target;

    setValue(taxAmtVal(value));
  }, []);

  const handleVisibility = useCallback(() => {
    setDisplay((prev) => (prev == "none" ? "block" : "none"));
  }, []);

  const handleConfirm = useCallback(() => {
    setDisplay((prev) => (prev == "none" ? "block" : "none"));
  }, []);
  const handleClose = useCallback(() => {
    setDisplay((prev) => (prev == "none" ? "block" : "none"));
  }, []);

  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "40px",
          border: "1px solid",
          alignItems: "center",
          padding: "10px",
        }}
        onClick={handleVisibility}
      >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
          </svg>
        </div>
        <div style={{fontSize:"12px", color:"rgb(130, 117, 117)"}}>{value ? value : "Advance Amount"}</div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
        </div>
      </div>
      <div
        style={{
          display: display,
          justifyContent: "center",
          padding: "10px",
          border: "1px solid",
          borderTop: "none ",
        }}
      >
        <input
          name="Amount"
          placeholder="Amount"
          onChange={handleAmont}
          value={value}
          style={{
            height: "40px",
            width: "80%",
            textAlign: "center",
            margin: "0% 10%",
            outline: "none",
            fontSize:"1.2rem", 
            color: "#827575",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "40%",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input type="radio" id="cash" />
            <label for="cash">Cash</label>
          </div>
          <div
            style={{
              width: "40%",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input type="radio" id="wallet" />
            <label for="wallet">Wallet</label>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "40%",
            margin: "0% 30%",
          }}
        >
          <button
            style={{
              color: "#ffffff",
              background: "#0032a0",
              padding: "5px 10px",
              border: "none",
            }}
            onClick={handleConfirm}
          >
            confirm
          </button>
          <button
            style={{
              color: "#ffffff",
              background: "#0032a0",
              padding: "5px 10px",
              border: "none",
            }}
            onClick={handleClose}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomAddress = ({
  handlePickupChange,
  handlePickupSelect,
  value,
  imagePath,
  ButtonImage,
  disabled,
  onClick,
  name ,
}) => {

  return (
    <div
      style={{
        margin: "2px 0px",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // height: "40px",
        width: "100%",
        textAlign: "left",
        marginBottom: "5px",
      }}
    >
      <div style={{ width: "10%" }} >
        <img scr={imagePath} />
      </div>
      <PlacesAutocomplete
        value={value?.address}
        onChange={handlePickupChange}
        onSelect={handlePickupSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div
            className="pickup-autocomplete-dropdown-container"
            style={{ border: "none", outline: "none", width:"80%" }}
          >
            <input
              {...getInputProps({
                autoComplete: "off",
                placeholder: `${name}`,
                className:
                  "drop-location-search-input form-control shadow-none",
              })}
              style={{ border: "none", outline: "none",  fontSize:"1.2rem", 
              color: "#827575", }}
            />
            <div className="drop-suggestions-container">
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? "drop-suggestion-item drop-suggestion-item--active"
                  // : "drop-suggestion-item";
                  : "drop-suggestion-item drop-suggestion-item--active";

                return (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <i
                      className="bi bi-geo-alt-fill"
                      style={{
                        paddingRight: "5px",
                        color: "lightgreen",
                      }}
                    />
                    <span>{suggestion.formattedSuggestion.mainText}</span>
                    <span className={"secondary_text"}>
                      {suggestion.formattedSuggestion.secondaryText}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <div style={{ width: "10%", margin:"10px" }} >
        <button
          style={{
            width: "10%",
            border: "none",
            outline: "none",
            backgroundColor: "#ffffff",
          }}
          onClick={onClick}
          disabled={disabled}
        >
          {ButtonImage}
        </button>
      </div>
    </div>
  );
};


export {
  CustomAddress,
  CustomeInput,
  CustomeSelect,
  GroupRadioButton,
  CustomAccortionList,
  MenuHeader,
  PickUpPerson,
  CustomButton,
  CustomeAdvanceAmount,
};
