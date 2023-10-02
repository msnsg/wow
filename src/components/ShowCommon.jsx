import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowCommon = ({ children }) => {
  const location = useLocation();
  const [isShow, setIsShow] = useState(true);

  // Add here excluded Routes
  const excludedRoutes = ["/", "/book-now", "/about-us"];

  useEffect(() => {
    const pathname = location.pathname;
    const isRoute = !excludedRoutes.includes(pathname);
    if (isRoute) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [location]);

  return isShow && children;
};

export default ShowCommon;
