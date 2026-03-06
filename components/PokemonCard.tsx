import {Image, View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

interface PokemonCardProps {
    name: string;
    url: string;
}


export default function PokemonCard(props: PokemonCardProps) {
    const id = props.url.split("/").filter(Boolean).at(-1);
    const pokemonImageURL = 
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <Pressable 
            onPress={() => router.push('/new-screen')} 
            style={({ pressed }) => [
                styles.pressableStyle,
                pressed &&
                { opacity: 0.5 }
            ]}
        >
            <View>
                <Image 
                    source={{ uri: pokemonImageURL }}
                    style={{ width: 100, height: 100 }}
                />
                <Text>{props.name}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressableStyle: {
        borderWidth: 1,
        alignItems: "center",
        margin: 5,
        padding: 5,
        backgroundColor: "#0c246a",


    }


});