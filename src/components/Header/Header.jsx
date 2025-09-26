import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/");
  return <div className="header">
    <Navbar />

  </div>;
};

export default Header;
