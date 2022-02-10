import React from 'react';
import Tile from '../../components/Tile/Tile';
import {ITile} from '../../components/Tile/tileInterface';

const W40kHome = (allTileData: ITile[]) => {
    return (
        <div className="home-page">
            {allTileData.map((tileData) => (
                <Tile name={tileData.name} imgTile={tileData.tileImage} key={tileData.id}/>
            ))}
        </div>
    );
};

export default W40kHome;
