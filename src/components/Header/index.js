import Container from "@material-ui/core/Container";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./_Header.scss";
// import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import InputBase from "@material-ui/core/InputBase";
// import { fade, makeStyles } from "@material-ui/core/styles";
// import SearchIcon from "@material-ui/icons/Search";
// import { getAccessories, getproducts } from "../services/product/index";
// import { useHistory } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { addDataUser } from "../redux/actions/userActions";

const Header = () => {
  //   const addedProducts = useSelector((state) => state.cart.itemsInCart);
  //   const userLogon = useSelector((state) => state.user.dataUser);
  const [pathname, setPathname] = useState(null);
  //   const dipatch = useDispatch();
  let location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  //   const history = useHistory();

  //   const [anchorEl, setAnchorEl] = React.useState(null);

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     history.replace('/')
  //     setAnchorEl(null);
  //   };

  //   const handleLogout = () => {
  //     dipatch(addDataUser([]));
  //     history.replace('/')
  //     setAnchorEl(null);
  //   };

  return (
    <div className="header-wrapper">
      <Container maxWidth="xl" className="header-control">
        <div className="flex">
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
                {/* <Badge badgeContent={addedProducts.length} color="primary"> */}
                <ShoppingCartIcon />
                {/* </Badge> */}
              </Link>
            </span>
          </div>
          {/* <div className="navbar-right flex">
            <span className="h3 prx4 fw600">
             {userLogon.length ==0 && <Link className={pathname === '/bookme' ? 'active' : ''} to='/bookme'>Đăng nhập</Link>} 
            </span>
            {userLogon.length ==0 && <span className="h3 fw600 prx4"><Link className={pathname === '/signup' ? 'active' : ''} to='/signup'>Đăng ký</Link></span>}
            <span className="white prx2">
              <Link className={pathname === '/mycart' ? 'active' : ''} to='/mycart'>
                <Badge badgeContent={addedProducts.length} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </span>
            {userLogon.name &&
            <span>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="no-padding">
                <AccountCircleIcon style={{ color: 'white' }} />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to='/account'><MenuItem onClick={handleClose}>My account</MenuItem></Link>
                <Link to='/history'><MenuItem onClick={handleClose}>Lịch sử mua hàng</MenuItem></Link>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
              {<Link className={pathname === '/bookme' ? 'active' : ''} onClick={handleClick} >{userLogon.name}</Link>}
            </span>
            }
         </div> */}
        </div>
      </Container>
    </div>
  );
};
export default Header;
