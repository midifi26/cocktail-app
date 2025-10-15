import { useState, useEffect } from 'react';
import Logo from './Logo';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from './SearchBar/SearchBar';

const Header = ({onSearch}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/");


  return <div className="header">
    <Logo isScrolled={isScrolled} />
    <SearchBar onSearch={onSearch} />
    <Navbar />

  </div>;
};

export default Header;
