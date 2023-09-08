
import { Link } from "react-router-dom";
import {Bell, ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
    {/* <div className="logo">
      GameZone
    </div> */}
      <div className="links">
        <Link to="/"> Shop </Link>

        <Link to="/Notification"><Bell size={32} /></Link>
        
        <Link to="/cart">
          <ShoppingCart size={31} />
        </Link>


      </div>
    </div>
  );
};