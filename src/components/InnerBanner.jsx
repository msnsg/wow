import { oneOf } from "prop-types";
const InnerBanner = (props) => {
  // eslint-disable-next-line react/prop-types
  const { bannerFor = "careers" } = props;
  return (
    <div className="row">
      <div className={`innerbanner ${bannerFor}`}>
        <div className="container">&nbsp;</div>
      </div>
    </div>
  );
};

export default InnerBanner;

InnerBanner.prototype = {
  bannerFor: oneOf(["careers", "contact"]),
};
