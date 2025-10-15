import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CocktailCard from "./CocktailCard/CocktailCard";
import Pagination from "../Pagination/Pagination";

const CocktailList = ({ cocktails, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  // Filtra nombres cortos y aplica búsqueda si hay searchTerm
  const filteredCocktails = cocktails
    .filter(c => c.strDrink.length > 2)
    .filter(c => !searchTerm || c.strDrink.toLowerCase().includes(searchTerm.toLowerCase()));

  // Ordena alfabéticamente
  const sortedCocktails = filteredCocktails.sort((a, b) =>
    a.strDrink.localeCompare(b.strDrink)
  );

  const location = useLocation();

  
  useEffect(() => {
    if (location.pathname === "/") setCurrentPage(0);
  }, [location.pathname]);

  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCocktails = sortedCocktails.slice(startIndex, endIndex);

  return (
    <div className="cocktail-list">
      {currentCocktails.map((cocktail) => (
        <CocktailCard key={cocktail.strDrink} cocktail={cocktail} />
      ))}

      <Pagination
        totalItems={sortedCocktails.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CocktailList;
