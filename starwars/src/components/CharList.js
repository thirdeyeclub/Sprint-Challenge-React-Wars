import React from 'react';
import './StarWars.css';
import CharSheet from './CharSheet';

const CharList = props => {return(
    <div ClassName='CharList'>
    {props.characters.map(character => (
        <CharSheet
            key = {character.name}
            name = {character.name}
            height = {character.height}
            mass = {character.mass}
            hair_color = {character.hair_color}
            skin_color = {character.skin_color}
            eye_color = {character.eye_color}
            birth_year = {character.birth_year}
             gender = {character.gender}
            character = {character}
                                             />))}
    </div>
                                        );
                                        };
    
export default CharList;                   