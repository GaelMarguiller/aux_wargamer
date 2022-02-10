import React from "react";

import {ITile} from './tileInterface';

interface TileProps {
    name: ITile['name'],
    imgTile: ITile['tileImage']
}

const Tile: React.FC<TileProps> = ({name , imgTile } :TileProps) => {

    return (
        <div className="tile">
            <h2>{name}</h2>
            <img
                src={imgTile}
                alt="logo"
            />
        </div>
    );
};

export default Tile;
