import React from "react";
import styled from 'styled-components';

const Game = styled.div`
color: black;

`;

const Mac = styled.div`


`

const Oxtail = styled.div`



`


const Soursoap = styled.span `


`



const Housecard = props => {


    return(
        <div className="The-One">
             <Game>{props.name}</Game>
            <Mac><Soursoap>Height:</Soursoap> {props.height} cm.</Mac>
            <Mac><Soursoap>Weight:</Soursoap> {props.weight} Kg.</Mac>
            <Mac><Soursoap>Sex:</Soursoap> {props.gender}</Mac>
            <Mac><Soursoap>Born:</Soursoap> {props.birthYear}</Mac>
            <Mac><Oxtail>Eye Color:</Oxtail> {props.eyeColor}</Mac>
            <Mac><Oxtail>Skin Pigment: </Oxtail> {props.skinColor}</Mac>
            <Mac><Oxtail>Hair Color: </Oxtail> {props.hairColor}</Mac>

        </div>
    
             
             )
    


}

export default Housecard;