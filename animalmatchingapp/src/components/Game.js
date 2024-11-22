import React, { useState } from "react";
import AnimalsDb from "../AnimalsDb.js";

const Game = () => {
    const [randomAnimal, setRandomAnimal] = useState("");
    const [result, setResult] = useState("");

    // Function to generate a random animal
    const generateRandomAnimal = () => {
        const randomIndex = Math.floor(Math.random() * AnimalsDb.length);
        setRandomAnimal(AnimalsDb[randomIndex].name);
        setResult(""); // Reset result
    };

    // Function to check the player's choice
    const handleAnimalClick = (animalName) => {
        if (animalName === randomAnimal) {
            setResult("Win");
        } else {
            setResult("Lose");
        }
    };

    // Generate animal images dynamically
    const animalImages = AnimalsDb.map((animal, index) => (
        <img
            key={index}
            src={animal.image}
            alt={animal.name}
            onClick={() => handleAnimalClick(animal.name)}
            style={{ width: "100px", cursor: "pointer", margin: "10px" }}
        />
    ));

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Animal Matching Game</h1>
            <div>
                <h2>Result: {result || "Click an animal"}</h2>
                <h2>Animal Name: {randomAnimal || "Click 'Start Game'"}</h2>
            </div>
            <button onClick={generateRandomAnimal} style={{ margin: "20px", padding: "10px 20px" }}>
                Start Game
            </button>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {animalImages}
            </div>
        </div>
    );
};

export default Game;