import { InnerBanner } from "./../components";
const Careers = () => {
  return (
    <>
      <InnerBanner />
      <div className="row">
        <div className="careers">
          <div className="container">
            <div className="col-lg-12 careers-top">
              <h2>
                Get <span>Growing</span>{" "}
              </h2>
              <p>
                {" "}
                WowTruck is a tech based logistics platform which provides
                simplified and cost effective last mile connectivity to
                customers as well as higher earning potential for truck drivers.
                Send your resume to the below email address to be a part of our
                company.
              </p>
            </div>

            <div className="col-lg-12 careers-middle">
              <div className="row">
                <div className="col-lg-6 careers-middle-img nopad">
                  {" "}
                  <img src="images/lifeatwt.png" alt="" />
                </div>
                <div className="col-lg-6 careers-middle-content nopad">
                  <h2>
                    Life at <span>WOWTRUCK</span>{" "}
                  </h2>
                  <p>
                    {" "}
                    WOWTRUCK has a dynamic work environment which encourages
                    ideas and participation in the larger vision of the company.
                    Employees are welcomed to take up roles that they are
                    interested to take up and experiment. Here ideas area valued
                    and employees are given a free hand to explore their
                    capabilities. Employees are encouraged to voice their
                    opinions and take their ideas to completion.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 careers-form">
              <h2> Share Your Resume</h2>
              <fieldset>
                <div
                  className="wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="1s"
                >
                  <form
                    method="post"
                    encType="multipart/form-data"
                    id="form"
                    className="col-md-12"
                  >
                    <div className="row">
                      <div className="col-md-6 careers-form-rep">
                        <label htmlFor="firstName">First Name</label>
                        <span id="firstName-info" className="info"></span>
                        <br />
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder=""
                          className="demoInputBox form-control"
                        />
                      </div>
                      <div className="col-md-6 careers-form-rep">
                        <label htmlFor="lastName">Last Name</label>
                        <span id="lastName-info" className="info"></span>
                        <br />
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder=""
                          className="demoInputBox form-control"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 careers-form-rep">
                        <label htmlFor="emailAddress">Email Address</label>
                        <span id="emailAddress-info" className="info"></span>
                        <br />
                        <input
                          type="text"
                          name="emailAddress"
                          id="emailAddress"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 careers-form-rep">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <span id="mobileNumber-info" className="info"></span>
                        <br />
                        <input
                          type="tel"
                          name="mobileNumber"
                          id="mobileNumber"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 careers-form-rep">
                        <label htmlFor="experience">Experience </label>
                        <span id="experience-info" className="info"></span>
                        <br />
                        <div className="row">
                          <div className="col-md-6">
                            <select id="experience" className="form-control">
                              <option value=""> MM</option>
                              <option value="0">0 </option>
                              <option value="1">1 </option>
                              <option value="2">2 </option>
                              <option value="3">3 </option>
                              <option value="4">4 </option>
                              <option value="5">5 </option>
                              <option value="6">6 </option>
                              <option value="7">7 </option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10 </option>
                              <option value="11">11</option>
                              <option value="12">12 </option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <select id="experience1" className="form-control">
                              <option value=""> YY </option>
                              <option value="0">0</option>
                              <option value="1">1 </option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5 </option>
                              <option value="6">6 </option>
                              <option value="7">7 </option>
                              <option value="8">8 </option>
                              <option value="9">9 </option>
                              <option value="10">10 </option>
                              <option value="11">11 </option>
                              <option value="12">12 </option>
                              <option value="13">13 </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 careers-form-rep">
                        <label htmlFor="upload">Upload Resume</label>
                        <span id="upload-info" className="info"></span>
                        <br />
                        <input
                          type="file"
                          className="form-control"
                          name="upload"
                          id="upload"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-12 careers-form-rep">
                        <label htmlFor="message">Message</label>
                        <span id="message-info" className="info"></span>
                        <br />
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          className="form-control"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-12 col-xs-12  ">
                        {/* <a role="button" href="javascript:void(0);" className="btn btn-consult">Submit</a>
                      <button className="btn btn-consult" name="careers_form" id="careers_form">Book a consult</button> */}
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="btn-primary"
                              name="careers_form"
                              id="careers_form"
                              type="submit"
                              value="Submit"
                            />
                            <input
                              className="btn-primary"
                              name=""
                              id="clear_form_data"
                              type="submit"
                              value="Clear"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div
                    id="Contact_success"
                    className="contact-success col-md-12 col-xs-12 dn"
                  >
                    <div id="mail-status"></div>
                    <p>
                      &nbsp; <br />{" "}
                    </p>
                    <button
                      className="btn-primary col-md-2 ml-auto mr-auto"
                      name="back"
                      id="back_contact_form"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
