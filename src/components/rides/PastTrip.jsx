import "./PastTrip.css";
import RidesAccordion from "./RidesAccordion";
const PastTrip = ({ list, formatDate }) => {
  return (
    <div className="past_rides__item" key={list.booking_id}>
      <div className="past_rides__item-container">
        <div className="row">
          <div className="col-9 col-sm-9 col-md-9">
            <div className="past_rides__item-booking-at">
              {formatDate(list.booking_creation_timestamp)}
            </div>
          </div>
          <div className="col-3 col-sm-3 col-md-3 past_rides__item-amt">
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
            {/* {list.load_type == 2 ? list.base_fare : list.total_booking_amount} */}
            {list.override_amount}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="past_rides__item-booking-id">
              Booking ID: {list.booking_id}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 past_rides__item-pickup-dot">
                &#8226;
              </div>
              <div className="col-11 col-sm-11 col-md-11 past_rides__item-pickup">
                {list.pickup_address}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 past_rides__item-drop-dot">
                &#9632;
              </div>
              <div className="col-11 col-sm-11 col-md-11 past_rides__item-drop">
                {list.dropoff_address}
              </div>
            </div>
          </div>
        </div>

        <div className="row past_rides__item-bottom">
          <div className="col-3 col-sm-3 col-md-3">
            <div
              className={
                list.load_type != 2
                  ? "past_rides__item-load_type-local"
                  : "past_rides__item-load_type-outstation"
              }
            >
              {list.load_type != 2 ? "Local" : "Outstation"}
            </div>
          </div>
          <div className="col-9 col-sm-9 col-md-9">
            <div
              className={`past_rides__item-trip-status past_rides__item-trip-status-${
                list.booking_status != 10 ? "completed" : "cancelled"
              }`}
            >
              {list.booking_status_text}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <RidesAccordion list={list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastTrip;
