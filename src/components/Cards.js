import React from 'react';
import CardGroup from './CardGroup';

const Cards = ({cards}) => (
    <ul className="cards-group">
        {cards.map(({items}, index) => (
            <CardGroup items={items} key={index} />
        ))}
    </ul>
);

export default Cards;