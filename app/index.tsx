
import { use, useEffect, useState } from "react";
import { ScrollView, Text,} from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"
import PokemonCard from "../components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}


export default function Index() {

const [results, setResults] = useState<Pokemon[]>([]);
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const response = await fetch(URL, {
      method: "GET",
    });
    if (response.ok) {
      console.log(response);
      const data = await response.json();
      setResults(data.results);
    } else {
      console.log("Bad Request");
    }
  } catch (error) {
    console.log("Error fetching pokemons:", error);
  }
    }

  return (
    <ScrollView>
      {results.map((item) => (
        <PokemonCard 
        key={item.name} 
        name={item.name} 
        url={item.url}></PokemonCard>
      ))}
    </ScrollView>
  );
}