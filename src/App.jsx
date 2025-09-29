import { useEffect, useState } from "react";
import './styles/styles.scss'
import CocktailList from "./components/Main/CocktailList/CocktailList.jsx";
import CocktailDetails from "./components/Main/CocktailDetails/CocktailDetails.jsx";
import Header from "./components/Header/Header.jsx";

import { Routes, Route } from "react-router-dom";


function App() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  useEffect(() => {
    async function fetchCocktails() {
      const stored = localStorage.getItem("cocktails");
      if (stored) {
        setCocktails(JSON.parse(stored));
        setLoading(false);
        return;
      }

      let allCocktails = [];
      for (let letter of letters) {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
        const data = await res.json();
        if (data.drinks) allCocktails = [...allCocktails, ...data.drinks];
      }

      localStorage.setItem("cocktails", JSON.stringify(allCocktails));
      setCocktails(allCocktails);
      setLoading(false);
    }

    fetchCocktails();
  }, []);

  if (loading) return <p>Cargando cócteles...</p>;

  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CocktailList cocktails={cocktails} />} />
        <Route
          path="/cocktail/:id"
          element={<CocktailDetails cocktails={cocktails} />}
        />
      </Routes>
    </>
  );
}

export default App;
