import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";

export default function PokemonDetailsScreen() {
  const [pokemon, setPokemon] = useState<any>(null);
  const params = useLocalSearchParams();

  useEffect(() => {
    console.log("Pasando info");
    infoditto();
  }, []);

  const infoditto = async () => {
    try {
      const URL = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setPokemon(data);
      } else {
        console.log("Bad request");
      }
    } catch (error) {
      console.log("Ocurrio un error");
    }
  };

  if (!pokemon) {
    return <Text>cargando...</Text>;
  }
  return (
    <ScrollView>
      <Text>{JSON.stringify(pokemon, null, 2)}</Text>
    </ScrollView>
  );
}