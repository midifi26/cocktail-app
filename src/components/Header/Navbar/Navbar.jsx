import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <section className="navbar">
    <article>
      <Link to="/">Inicio</Link>
    </article>
    <article>
      <Link to="/favoritos">Favoritos</Link>
    </article>
  </section>;
};

export default Navbar;
