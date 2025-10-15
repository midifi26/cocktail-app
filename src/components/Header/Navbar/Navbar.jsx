import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onResetSearch }) => {
  const navigate = useNavigate();

  const handleInicio = () => {
    onResetSearch();
    navigate("/");
  };

  return (
    <section className="navbar">
      <article>
        <button onClick={handleInicio}>Inicio</button>
      </article>
      <article>
        <Link to="/favoritos">Favoritos</Link>
      </article>
    </section>
  );
};

export default Navbar;
