import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CocktailDetails = ({ cocktails }) => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const cocktail = cocktails.find(c => c.idDrink === id);

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure ? measure : ""} ${ingredient}`);
    }
  }

  return (
    <div className="cocktail-details">
      <button onClick={() => navigate(-1)}>Volver</button>
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p><strong>Tipo:</strong> {cocktail.strAlcoholic}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instrucciones:</h3>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetails;

