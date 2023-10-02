import { useEffect, useReducer, useState } from "react";
import { HomeBanner } from "./../components";
import { useNavigate } from "react-router-dom";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { booknow } from "../constants/Constants";

const BookNow = () => {
  const initialState = {
    load_type: 0,
    pickup_address: {
      address: "",
      lat: "",
      lng: "",
    },
    drop_address: {
      address: "",
      lat: "",
      lng: "",
    },
  };

  const handleAddresses = (state, action) => {
    switch (action.type) {
      case booknow.PICKUP_ADDADDRESS:
        return {
          ...state,
          pickup_address: {
            ...state.pickup_address,
            address: action.payload.address,
            lat: action.payload.lat,
            lng: action.payload.lng,
          },
        };
      case booknow.CHNAGE_PICKUP_ADDADDRESS:
        return {
          ...state,
          pickup_address: {
            ...state.pickup_address,
            address: action.payload.address,
          },
        };
      case booknow.CHNAGE_DROP_ADDADDRESS:
        return {
          ...state,
          drop_address: {
            ...state.drop_address,
            address: action.payload.address,
          },
        };
      case booknow.DROP_ADDADDRESS:
        return {
          ...state,
          drop_address: {
            ...state.drop_address,
            address: action.payload.address,
            lat: action.payload.lat,
            lng: action.payload.lng,
          },
        };
      case booknow.LOAD_TYPE:
        return {
          ...state,
          load_type: action.payload.load_type,
        };
      default:
        return state;
    }
  };

  const [address, dispatch] = useReducer(handleAddresses, initialState);

  const handlePickupChange = (newAddress) => {
    const makeAddress = {
      payload: { address: newAddress },
      type: booknow.CHNAGE_PICKUP_ADDADDRESS,
    };
    dispatch(makeAddress);
  };

  const handleDropChange = (newAddress) => {
    const makeAddress = {
      payload: { address: newAddress },
      type: booknow.CHNAGE_DROP_ADDADDRESS,
    };
    dispatch(makeAddress);
  };

  const handlePickupSelect = async (selectedAddress) => {
    try {
      geocodeByAddress(selectedAddress)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          dispatch(
            handlePickupAddress({
              lat,
              lng,
              address: selectedAddress,
            })
          );
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDropSelect = async (selectedAddress) => {
    try {
      geocodeByAddress(selectedAddress)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          dispatch(
            handleDropAddress({
              lat,
              lng,
              address: selectedAddress,
            })
          );
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function handlePickupAddress(address) {
    return { type: booknow.PICKUP_ADDADDRESS, payload: address };
  }

  function handleDropAddress(address) {
    return { type: booknow.DROP_ADDADDRESS, payload: address };
  }

  function handleLoadType(type) {
    return {
      type: booknow.LOAD_TYPE,
      payload: { load_type: type },
    };
  }

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/booking_now");
  };

  return (
    <div className="home">
      <HomeBanner />
      <div className="row">
        <div className="home-why">
          {window.google && (
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-4 col-md-6 col-sm-8"
                  style={{ backgroundColor: "#FFF", marginTop: "-120px" }}
                >
                  {/* <p>
                  <ul className="nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Local
                      </a>
                    </li>
                    <li className="nav-item" style={{ marginLeft: "120px" }}>
                      <a className="nav-link" href="#">
                        Outstation
                      </a>
                    </li>
                  </ul>
                </p> */}
                  <div className="tab-container event-elem" id="tab-container">
                    <div
                      className={
                        address.load_type === 0 ? "tab-item active" : "tab-item"
                      }
                      tabIndex="0"
                      onClick={() => dispatch(handleLoadType(0))}
                    >
                      Local
                    </div>
                    <div
                      className={
                        address.load_type !== 0 ? "tab-item active" : "tab-item"
                      }
                      tabIndex="0"
                      onClick={() => dispatch(handleLoadType(2))}
                    >
                      Outstation
                    </div>
                  </div>
                </div>
                <div className="col-lg-8"></div>
              </div>
              <div className="row">
                <div
                  className="col-lg-12 col-md-12 col-sm-12"
                  style={{
                    backgroundColor: "#cccbe6",
                    marginTop: "-70px",
                    height: "100px",
                  }}
                >
                  <form name="form1" method="post" onSubmit={handleSubmit}>
                    <div className="" id="Contact-form">
                      <div className="row">
                        <div className="col-md-1 booking"></div>

                        <div className="col-md-4 booking">
                          <label htmlFor="CurrentLocation"></label>

                          <PlacesAutocomplete
                            value={address.pickup_address.address}
                            onChange={handlePickupChange}
                            onSelect={handlePickupSelect}
                          >
                            {({
                              getInputProps,
                              suggestions,
                              getSuggestionItemProps,
                            }) => (
                              <div className="pickup-autocomplete-dropdown-container">
                                <input
                                  {...getInputProps({
                                    autoComplete: "off",
                                    placeholder: "Current Location",
                                    className:
                                      "drop-location-search-input form-control shadow-none",
                                  })}
                                />
                                <div className="drop-suggestions-container">
                                  {suggestions.map((suggestion, index) => {
                                    const className = suggestion.active
                                      ? "drop-suggestion-item drop-suggestion-item--active"
                                      : "drop-suggestion-item";

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
                                        <span>
                                          {
                                            suggestion.formattedSuggestion
                                              .mainText
                                          }
                                        </span>
                                        <span className={"secondary_text"}>
                                          {
                                            suggestion.formattedSuggestion
                                              .secondaryText
                                          }
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                        </div>
                        <div className="col-md-4 booking">
                          <label htmlFor="Destination"></label>
                          <PlacesAutocomplete
                            value={address.drop_address.address}
                            onChange={handleDropChange}
                            onSelect={handleDropSelect}
                          >
                            {({
                              getInputProps,
                              suggestions,
                              getSuggestionItemProps,
                            }) => (
                              <div className="drop-autocomplete-dropdown-container">
                                <input
                                  {...getInputProps({
                                    autoComplete: "off",
                                    placeholder: "Enter Destination",
                                    className:
                                      "drop-location-search-input form-control shadow-none",
                                  })}
                                />
                                <div className="drop-suggestions-container">
                                  {suggestions.map((suggestion, index) => {
                                    const className = suggestion.active
                                      ? "drop-suggestion-item drop-suggestion-item--active"
                                      : "drop-suggestion-item";

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
                                            opacity: 0.7,
                                            color: "red",
                                          }}
                                        />
                                        <span>
                                          {
                                            suggestion.formattedSuggestion
                                              .mainText
                                          }
                                        </span>
                                        <span className={"secondary_text"}>
                                          {
                                            suggestion.formattedSuggestion
                                              .secondaryText
                                          }
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                        </div>
                        <div className="col-md-2 booking">
                          <button
                            className="btn-primary form-control"
                            name="contact_form"
                            id="contact_form"
                            style={{ marginTop: "25px" }}
                          >
                            Search Trucks
                          </button>
                        </div>
                        <div className="col-md-1 booking"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookNow;
