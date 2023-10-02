import { NavLink } from "react-router-dom";
import { wowtruck_social_media_urls } from "../constants/Constants";
const Footer = () => {
  return (
    <div className="row">
      <footer className="footer col-lg-12">
        <div className="footer-top row">
          <div className="col-lg-1 footer-top-rep">
            <img
              src="images/wow-logo-white.png"
              className="img-fluid"
              alt="WOWTRUCKs Logo"
            />
          </div>
          <div className="col-lg-2 footer-top-rep">
            <h4>Company</h4>
            <ul>
              <li>
                <NavLink aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink aria-current="page" to="/about-us">
                  About Us
                </NavLink>
              </li>

              <li>
                <a href="careers.html"></a>
                <NavLink aria-current="page" to="/careers">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink aria-current="page" to="#">
                  FAQ&apos;s
                </NavLink>
              </li>
              <li>
                <NavLink aria-current="page" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 footer-top-rep">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="termsconditions.html">Terms and Conditions</a>
              </li>

              <li>
                <a href="privacypolicy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="disclaimer.html">Disclaimer</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 ms-auto text-center footer-top-app">
            <h4> Download our app on</h4>
            <a
              href={
                wowtruck_social_media_urls.WOWTRUCK_CUSTOMER_APP_APPLE_STORE_URL
              }
              target="_blank"
              title="Download Customer App"
            >
              <img src="images/app_store.png" className="img-fluid" alt="" />
            </a>
            <a
              href={
                wowtruck_social_media_urls.WOWTRUCK_CUSTOMER_APP_PLAY_STORE_URL
              }
              target="_blank"
              title="Download Customer App"
            >
              <img src="images/play_store.png" className="img-fluid" alt="" />
            </a>
          </div>
        </div>
        <hr />
        <div className="footer-bottom row">
          <div className="col-lg-4 footer-bottom-left">
            <a
              href={wowtruck_social_media_urls.WOWTRUCK_FACEBOOK_URL}
              target="_blank"
              title="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href={wowtruck_social_media_urls.WOWTRUCK_INSTAGRAM_URL}
              target="_blank"
              title="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href={wowtruck_social_media_urls.WOWTRUCK_TWITTER_URL}
              target="_blank"
              title="Twitter"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href={wowtruck_social_media_urls.WOWTRUCK_LINKEDIN_URL}
              target="_blank"
              title="Linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href={wowtruck_social_media_urls.WOWTRUCK_YOUTUBE_URL}
              target="_blank"
              title="Youtube"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>
          <div className="col-lg-8 footer-bottom-right">
            © 2023 WOWTRUCK and/or its affiliates. All rights reserved.
            <a>Privacy Policy</a>
            <a>Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
