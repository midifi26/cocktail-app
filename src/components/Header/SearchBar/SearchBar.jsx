import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({onSearch}) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

   useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue.trim() !== "") {
        onSearch(inputValue);
        setInputValue("");
      }
    }, 1000);

    return () => clearTimeout(handler);
  }, [inputValue, onSearch]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

   const handleBack = () => {
    navigate("/");
  };

  return <div>
    <input
      type="text"
      placeholder="Buscar cóctel..."
      onChange={handleChange}
      className="search-bar"
    />
    <button onClick={handleBack} className="back-button">Volver</button>
  </div>;
};

export default SearchBar;
