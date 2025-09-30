import React from "react";
import CocktailList from "./CocktailList";

const Main = ({ cocktails }) => {
  return (
    <main className="main">
      <CocktailList cocktails={cocktails} />
    </main>
  );
};

export default Main;
