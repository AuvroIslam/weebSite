import React from 'react';
import Anime from './Anime';

const Animes = ({animes}) => {
   
    return (
        <div className="grid grid-cols-12 mt-10">

            {animes.map((anime, index) => (
                <Anime key={index} anime={anime} />
            ))}
        </div>
    );
};

export default Animes;