import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/image 2.svg";
import locationLogo from "../assets/Vector (1).svg";
import allProductLogo from "../assets/Vector (2).svg";
import guestLogo from "../assets/Vector (3).svg";
import cartLogo from "../assets/Vector (4).svg";
import Cart from "../pages/Cart";

const Navbars = () => {
  const [show, setShow] = useState(false);
  // function moueseIn(){
  //   show === false ?     setShow(true) : setShow(false)


  // }

  // function mouseOut(){
  //   setShow(false)

  // }
  return (
    <div className="container position-relative">
      <nav className="container d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center gap-3">
          <div>
            <Link to="/">
              <img src={navLogo} className="img-fluid p-3" alt="nav-logo" />
            </Link>
          </div>
          <div>
            <img
              src={locationLogo}
              className="d-none d-lg-block"
              alt="location-logo"
            />
          </div>
          <h5 className="d-none d-lg-block text-danger">Lagos, Nigeria</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-3 ">
          <img
            src={allProductLogo}
            className="img-fluid"
            alt="all-product-logo"
          />
          <h5 className="d-none d-lg-block mt-2 text-danger">All Products</h5>
          <img src={guestLogo} alt="guest-logo" />
          <h5 className="d-none d-lg-block mt-2">Hi, Guests</h5>
          <div
            className=""
            onClick={() => (!show ? setShow(true) : setShow(false))}
          >
            <div>
              <img className="" role="button" src={cartLogo} alt="cart-logo" />
            </div>
          </div>
          {/* <div
            className=""
            onMouseOver={moueseIn}
          >
            <div>
              <img className="" role="button" src={cartLogo} alt="cart-logo" />
            </div>
          </div> */}
        </div>

        {/* <ul>
                <li> <Link to='/'> Home </Link> </li>
                <li>  <Link to='/Cart'> Cart </Link> </li>
              </ul> */}
      </nav>
      <div className="position-absolute end-0">{show && <Cart />}</div>
    </div>
  );
};

export default Navbars;
