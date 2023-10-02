import "./ActiveTrip.css";

const ActiveTrip = ({ list, formatDate }) => {
  const dotFormat = (content) => {
    let lines = content.split(".").filter((item) => item != "");
    if (lines.length > 1) {
      const newLine = lines.map((line, i) => {
        return <p key={i}>{`${line}.`}</p>;
      });
      return newLine;
    } else {
      return content;
    }
  };

  return (
    <div className="active_rides__item">
      <div className="active_rides__item-container">
        <div className="row">
          <div className="col-9 col-sm-9 col-md-9">
            <div className="active_rides__item-booking-at">
              {formatDate(list.booking_creation_timestamp)}
            </div>
          </div>
          <div className="col-3 col-sm-3 col-md-3 active_rides__item-amt">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-currency-rupee"
              viewBox="0 0 16 16"
            >
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>

            {list.load_type == 2 ? list.base_fare : list.total_booking_amount}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="active_rides__item-booking-id">
              Booking ID: {list.booking_id}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 active_rides__item-pickup-dot">
                &#8226;
              </div>
              <div className="col-11 col-sm-11 col-md-11 active_rides__item-pickup">
                {list.pickup_address}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 active_rides__item-drop-dot">
                &#9632;
              </div>
              <div className="col-11 col-sm-11 col-md-11 active_rides__item-drop">
                {list.dropoff_address}
              </div>
            </div>
          </div>
        </div>

        <div className="row active_rides__item-bottom">
          <div className="col-3 col-sm-3 col-md-3">
            <div
              className={
                list.load_type != 2
                  ? "active_rides__item-load_type-local"
                  : "active_rides__item-load_type-outstation"
              }
            >
              {list.load_type != 2 ? "Local" : "Outstation"}
            </div>
          </div>
          <div className="col-9 col-sm-9 col-md-9">
            <div
              className={`active_rides__item-trip-status active_rides__item-trip-status-${
                list.booking_status != 10 ? "completed" : "cancelled"
              }`}
            >
              {list.booking_status_text}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 active_rides__item-truck-container">
            <div className="active_rides__item-vehicle">
              <img
                src="/images/Trucks/truck-1.svg"
                alt="truck-1"
                className="active_rides__item-vehicle_logo"
              />

              <p className="active_rides__item-vehicle_name">
                {list.load_type == 2
                  ? `${list.tonnage}`
                  : // ${list.length != "" ? ", " + `${list.length}` : ""}`
                    `${list.vehicle_name}`}
              </p>
            </div>
            {parseInt(list.lr_show, 10) === 1 && (
              <div className="active_rides__item-lr">
                <button type="button">CREATE LORRY RECEIPT</button>
              </div>
            )}
          </div>
        </div>

        {list.booking_notes.length > 0 && list.booking_notes_visible == 1 && (
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="active_rides__item-ds">
                {dotFormat(list.booking_notes)}
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <button type="button" className="md__trip-cancel-btn">
              CANCEL BOOKING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveTrip;
