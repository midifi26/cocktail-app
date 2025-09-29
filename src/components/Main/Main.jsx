import { Routes, Route } from "react-router-dom";
import CocktailList from "./CocktailList";
import CocktailDetails from "./CocktailDetails";

<Routes>
  <Route path="/" element={<CocktailList cocktails={cocktails} />} />
  <Route path="/cocktail/:id" element={<CocktailDetails cocktails={cocktails} />} />
</Routes>
