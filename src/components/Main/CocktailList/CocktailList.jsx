import React from "react";
import CocktailCard from "./CocktailCard/CocktailCard";

const CocktailList = ({cocktails}) => {
    
  const filteredCocktails = cocktails.filter(c => c.strDrink.length > 2);

  const sortedCocktails = filteredCocktails.sort((a, b) =>
    a.strDrink.localeCompare(b.strDrink)
  );
  return (
    <div className="cocktail-list">
     {sortedCocktails.map((cocktail) => (
        <CocktailCard key={cocktail.strDrink} cocktail={cocktail} />
      ))}
    </div>
  );

};

export default CocktailList;
