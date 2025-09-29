import React from "react";
import logoIcon from '../../../assets/DrinkUPIcon(1).png';
import logoFull from '../../../assets/DrinkUP.png';

const Logo = ({isScrolled}) => {
  return (
    <div className="logo">
      {isScrolled ? (
        <img src={logoFull} alt="Logo" className="logo-icon" />
      ) : (
        <h1 className="logo-full">
          DrinkUP
          <img src={logoIcon} alt="Logo" className="logo-icon" />
        </h1>
      )}
    </div>
  );
};

export default Logo;
