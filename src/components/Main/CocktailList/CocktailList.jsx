import {useState} from "react";
import CocktailCard from "./CocktailCard/CocktailCard";
import Pagination from "../Pagination/Pagination";

const CocktailList = ({cocktails}) => {
  //Filtra nombre muy cortos.
  const filteredCocktails = cocktails.filter(c => c.strDrink.length > 2);

  //Ordena alfabeticamente
  const sortedCocktails = filteredCocktails.sort((a, b) =>
    a.strDrink.localeCompare(b.strDrink)
  );

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCocktails = sortedCocktails.slice(startIndex, endIndex);

  return (
    <div className="cocktail-list">
     {currentCocktails.map((cocktail) => (
        <CocktailCard key={cocktail.strDrink} cocktail={cocktail} />
      ))}
      <Pagination
        totalItems={cocktails.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );

};

export default CocktailList;
