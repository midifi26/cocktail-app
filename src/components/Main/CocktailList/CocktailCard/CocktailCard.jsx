import React from "react";
import { Link } from "react-router-dom";


const CocktailCard = ({ cocktail }) => {
  if (!cocktail) return null;

  return (
    <article className="cocktail-card">
      <Link to={`/cocktail/${cocktail.idDrink}`}>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <h3>{cocktail.strDrink}</h3>
      </Link>
    </article>
  );
};

export default CocktailCard;
