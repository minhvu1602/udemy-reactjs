import Container from "@material-ui/core/Container";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./_Header.scss";

const Header = () => {
  const [pathname, setPathname] = useState(null);
  let location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div className="header-wrapper">
      <Container maxWidth="xl" className="header-control">
        <div className="navbar-item">
          <span className="title-header">
            <Link className={pathname === "/" ? "active" : ""} to="/">
              Trang chủ
            </Link>
          </span>
          <span className="title-header">
            <Link
              className={pathname === "/productList" ? "active" : ""}
              to="/productList"
            >
              Sản phẩm
            </Link>
          </span>
          <span className="icon-cart">
            <Link className={pathname === "/cart" ? "active" : ""} to="/cart">
              <ShoppingCartIcon />
            </Link>
          </span>
        </div>
      </Container>
    </div>
  );
};
export default Header;
