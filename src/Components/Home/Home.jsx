import "./Home.css";
import Recette from "../Recette/Recette";
import { useEffect, useState } from "react";
function Home() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [array, setArray] = useState([]);

  const getInput = (e) => {
    setInput(e.target.value);
  };

  const saveSearch = () => {
    setSearch(input);
  };

  const getAPIResponse = async () => {
    let response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
    let donnees = await response.json();
    console.log("donnees : ", donnees);
    setArray(donnees.drinks);
  };

  const displayArray = () => {
    return array.map((e, key) => {
      return (
        <Recette
          key={key}
          img={e.strDrinkThumb}
          name={e.strDrink}
          category={e.strAlcoholic}
          mesures1={e.strMeasure1}
          ingredients1={e.strIngredient1}
          mesures2={e.strMeasure2}
          ingredients2={e.strIngredient2}
          mesures3={e.strMeasure3}
          ingredients3={e.strIngredient3}
          mesures4={e.strMeasure4}
          ingredients4={e.strIngredient4}
          instructions={e.strInstructions}
        />
      );
    });
  };

  useEffect(() => {
    console.log("search : ", search);
  }, [search]);
  useEffect(() => {
    getAPIResponse();
  }, []);
  useEffect(() => {
    console.log("Array updated", array);
  }, [array]);

  return (
    <>
      <div className="containerSearch">
        <input type="text" id="searchBar" onChange={getInput} />
        <button onClick={saveSearch}>Rechercher</button>
      </div>
      <div className="containerResponse">{displayArray()}</div>
    </>
  );
}

export default Home;
