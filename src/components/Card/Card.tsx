import React from "react";

import { ICard } from './cardInterface';

interface CardProps {
    name: ICard['name'],
    imgCard: ICard['cardImage']
    price: ICard['price']
}

const Card = ({name , imgCard, price }: CardProps) => {

    return (
        <div className="card">
            <img
                src={imgCard}
                alt="logo"
            />
            <h2>{name}</h2>
            <div>
                <p>{price}</p>
                <div>
                    <button>Ajouter au pagnier</button>
                    <button>Liste de cadeaux</button>
                </div>
            </div>

        </div>
    );
};

export default Card;
