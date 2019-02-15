import React from 'react';
import './Starwars.css';

const CharSheet = props => {return(
<div className="CharSheet">
    <div>
    <p className="characterName">Name: {props.character.name}</p>
    </div> 
    <div>
    <p className="characterData">Height: {props.character.height}</p>
    </div>
    <div>
    <p className="characterData">Mass: {props.character.mass}</p>
    </div>
    <div>
    <p className="characterData">Hair color: {props.character.hair_color}</p>
    </div>
    <div>
    <p className="characterData">Skin color: {props.character.skin_color}</p>
    </div>
    <div>
    <p className="characterData">Eye color: {props.character.eye_color}</p>
    </div>
    <div>
    <p className="characterData">Birth year: {props.character.birth_year}</p>
    </div>
    <div>
    <p className="characterData">Gender: {props.character.gender}</p>
    </div>
</div>
                                        );
                                        };

export default CharSheet;