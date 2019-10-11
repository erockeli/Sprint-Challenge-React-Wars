import React,{useState, useEffect} from "react";
import Housecard from './Housecard';
import axios from "axios";







export default function House() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios
        .get (`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response);
            setItem(response.data);  
        })
        .catch(error => {
            console.log('No data received', error);
        })
    },[]);

    return (
        <Housecard>
            {item.map(ship => {return(
                <CharacterCard
                key={ship.name}
                name={ship.name}
                height = {ship.height}
                weight = {ship.mass}
                birthYear = {ship.birth_year}
                gender = {ship.gender}
                eyeColor = {ship.eye_color}
                skinColor = {ship.skin_color}
                hairColor = {ship.hair_color}
                />
            )})}
            </Housecard>

    )

}
            
