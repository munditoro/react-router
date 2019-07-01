import React from 'react';
import PlayerAPI from '../api/PlayerAPI';
import { Link } from 'react-router-dom';

const Player = ({match}) => {

    const { number } =  match;

    console.log("Entro al componente Player");
    console.log(number);
    
    const player = PlayerAPI.get(
        parseInt(number, 10)
    )

    if (!player) {
        return <div>Lo sentimos, pero el jugador no fue encontrado</div>
    }

    return(
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>{player.position}</h2>
            <Link to='/roster'>Volver</Link>
        </div>
    )
}

export default Player;