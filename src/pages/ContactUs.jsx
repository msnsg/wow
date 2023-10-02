import { InnerBanner } from "../components";

const ContactUs = () => {
  return (
    <>
      <InnerBanner bannerFor="contact" />
      <div className="row">
        <div className="contact">
          <div className="container">
            <div className="col-lg-12 contact-top">
              <h1>Ready to make the good move?</h1>
              <h2>
                Leave your details below, <br />
                and we&apos;ll get in touch with you!
              </h2>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12  ">
                    <fieldset>
                      <div className="" id="Contact-form">
                        <div className="row">
                          <div className="col-md-6 contact-top-rep">
                            <label htmlFor="fullName"></label>
                            <input
                              type="text"
                              name="fullName"
                              id="fullName"
                              placeholder="First Name *"
                              className="form-control"
                            />
                            <span id="fullName-info" className="info"></span>
                          </div>
                          <div className="col-md-6 contact-top-rep">
                            <label htmlFor="LastName"></label>
                            <input
                              type="text"
                              name="LastName"
                              id="lastName"
                              placeholder="Last Name *"
                              className="form-control"
                            />
                            <span id="lastName-info" className="info"></span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 contact-top-rep">
                            <label htmlFor="emailAddress"></label>

                            <input
                              type="text"
                              name="emailAddress"
                              id="emailAddress"
                              placeholder="Email Address *"
                              className="form-control"
                            />
                            <span
                              id="emailAddress-info"
                              className="info"
                            ></span>
                          </div>
                          <div className="col-md-6 contact-top-rep">
                            <label htmlFor="mobile"></label>

                            <input
                              type="text"
                              name="mobile"
                              id="mobile"
                              placeholder="Mobile Number *"
                              className="form-control"
                            />
                            <span id="mobile-info" className="info"></span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 contact-top-rep">
                            <label htmlFor="jobTitle"></label>

                            <input
                              type="text"
                              name="jobTitle"
                              id="jobTitle"
                              placeholder="JOB TITLE *"
                              className="form-control"
                            />
                            <span id="jobTitle-info" className="info"></span>
                          </div>

                          <div className="col-md-6 contact-top-rep">
                            <label htmlFor="company"></label>

                            <input
                              type="text"
                              name="company"
                              id="company"
                              placeholder="COMPANY *"
                              className="form-control"
                            />
                            <span id="company-info" className="info"></span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 contact-top-rep">
                            <label htmlFor="message"></label>

                            <textarea
                              name="message"
                              id="message"
                              cols="10"
                              rows="5"
                              className="form-control"
                              placeholder="Message *"
                            ></textarea>
                            <span id="message-info" className="info"></span>
                          </div>

                          <div className="col-md-6 contact-top-rep">
                            <label htmlFor="interested"></label>

                            <textarea
                              name="interested"
                              id="interested"
                              cols="10"
                              rows="5"
                              className="form-control"
                              placeholder="I AM INTERESTED IN *"
                            ></textarea>
                            <span id="interested-info" className="info"></span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <button
                              className="btn-primary"
                              name="contact_form"
                              id="contact_form"
                            >
                              Submit
                            </button>
                            <button
                              className="btn-primary"
                              id="clear_form_data"
                            >
                              Clear
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        id="Contact_success"
                        className="contactus-inner-left-success dn"
                      >
                        <div id="mail-status"></div>
                        <p>
                          &nbsp; <br />{" "}
                        </p>
                        <button
                          className="btn-primary"
                          name="back"
                          id="back_contact_form"
                        >
                          Back
                        </button>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 contact-bottom">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <h4>WOWTRUCK TECHNOLOGIES PRIVATE LIMITED</h4>
                    <p>
                      601, 6<sup>th</sup> Floor, Phase I, Spencer Plaza <br />
                      No 769, Anna salai, Mount Road <br />
                      Chennai - 600002 TN.{" "}
                    </p>

                    <p>
                      Contact : 044 40257777
                      <br />
                      Email : contactus@wowtruck.in
                    </p>

                    <p>
                      For Driver enrollment, Please contact us @ 044 40257766.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="taging">
          <div className="container">
            <h1>Are you up for tagging along?</h1>
            <p>
              Join us on a journey to uplift small and medium-sized logistics
              businesses in India, empowering them to envision a brighter
              future.
            </p>
            <a href="#">Join WOWTRUCK</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
