import React from "react";

const CocktailCard = ({cocktail}) => {
  if (!cocktail) return null;
  return <article className="cocktail-card">
        <h2>{cocktail.strDrink}</h2>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </article>

};

export default CocktailCard;
