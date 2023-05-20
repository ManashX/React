
import { useState } from "react";
import AnimalShow from "./animalShow";
import './app.css';

function getRandomAnimal(){
    const animals = ['Cow', 'Dog', 'Gator', 'Horse', 'Cat'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    
    const [animals, setAnimals] = useState([]);

    const handleClick = () =>{
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal,index) =>{
       
        return <AnimalShow type = {animal} key = {index}/>
    })
    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}
export default App;