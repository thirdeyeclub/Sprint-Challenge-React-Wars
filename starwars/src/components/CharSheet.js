import React from 'react';
import './StarWars.css';

const CharSheet = props => {return(
<div className="char-sheet">
    
    <p className="name">{props.character.name}</p>
    
  
    <p className="characterData">Height: {props.character.height}</p>

    <p className="characterData">Mass: {props.character.mass}</p>
   
    <p className="characterData">Hair color: {props.character.hair_color}</p>
    
    <p className="characterData">Skin color: {props.character.skin_color}</p>
   
    <p className="characterData">Eye color: {props.character.eye_color}</p>
    
    <p className="characterData">Birth year: {props.character.birth_year}</p>
   <p className="characterData">Gender: {props.character.gender}</p>
    </div>

                                        );
                                        };

export default CharSheet;