import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/products">Products</Link>
        <Link to="/add">Add Product</Link>
        {/* <Link to="/update">Update</Link> */}
      </nav>
    </div>
  );
};

export default Header;
