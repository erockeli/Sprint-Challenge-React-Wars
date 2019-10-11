import React from "react";
import styled from 'styled-components';

const Game = styled.p`
color: red;
font-size:20px;

margin: 25px 25px;

`;

const Mac = styled.div`
border: 3px solid black;
    border-radius: 25px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    width: 55%;
    margin: 10% auto;
    background: #ffac73;
    opacity: 0.85;
    color: white;
    text-align:left;

`

const Oxtail = styled.span`



`


const Soursoap = styled.span `

color:#801f1f;

`

const sun = styled.div`

color: black;

`

const Title =styled.div`

justify-content:center;
font-size: 30px;
text-align: center;

`



const Housecard = props => {


    return(
        <Mac>
            <Title>{props.name}</Title>
           <sun>
            <Game><Soursoap>Height:</Soursoap> {props.height} cm.</Game>
            <Game><Soursoap>Weight:</Soursoap> {props.weight} Kg.</Game>
            <Game><Soursoap>Sex:</Soursoap> {props.gender}</Game>
            <Game><Soursoap>Born:</Soursoap> {props.birthYear}</Game>
            <Game><Soursoap>Eye Color:</Soursoap> {props.eyeColor}</Game>
            <Game><Soursoap>Skin Pigment: </Soursoap> {props.skinColor}</Game>
            <Game><Soursoap>Hair Color: </Soursoap> {props.hairColor}</Game>
        </sun>
        </Mac>
    
             
             )
    


}

export default Housecard;