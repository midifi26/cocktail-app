import { useEffect, useState } from "react";

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

  return (
    <div>
      <h1>Total cócteles: {cocktails.length}</h1>
      <ul>
        {cocktails.map(c => <li key={c.idDrink}>{c.strDrink}</li>)}
      </ul>
    </div>
  );
}

export default App;
