import React from 'react';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import {ITile} from '../../components/Tile/tileInterface';
import {Link} from 'react-router-dom';

const Home: React.FC<ITile> = (allTileData: ITile[]) => {
    return (
        <div className="home-page">
            <Header/>
            {allTileData.map((tileData) => (
                <Link key={tileData.id} to={`/home/${tileData.name}`}>
                    <Tile name={tileData.name} imgTile={tileData.tileImage}/>
                </Link>
            ))}
        </div>
    );
};

export default Home;
