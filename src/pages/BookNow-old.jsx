import { HomeBanner } from "./../components";
import {useNavigate} from 'react-router-dom';

const BookNow = () => {
  
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    navigate('/booking_now');
  };
  
  return (
    <div className="home">
      <HomeBanner />
      <div className="row">
        <div className="home-why">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-8"
                style={{ backgroundColor: "#FFF", marginTop: "-120px" }}
              >
                <p>
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
                </p>
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
                <form name="form1" method="post"  onSubmit={handleSubmit}>
                  <div className="" id="Contact-form">
                    <div className="row">
                      <div className="col-md-1 booking"></div>
                      <div className="col-md-4 booking">
                        <label htmlFor="CurrentLocation"></label>
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Current Location *"
                          className="form-control"
                        />
                        <span id="CurrentLocation-info" className="info"></span>
                      </div>
                      <div className="col-md-4 booking">
                        <label htmlFor="Destination"></label>
                        <input
                          type="text"
                          name="LastName"
                          id="lastName"
                          placeholder="Enter Destination *"
                          className="form-control"
                        />
                        <span id="Destination-info" className="info"></span>
                      </div>
                      <div className="col-md-2 booking">
                        <button
                          className="btn-primary"
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
        </div>
      </div>
    </div>
  );
};

export default BookNow;