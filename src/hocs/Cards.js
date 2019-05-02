import React from 'react';
import Cards from '../components/Cards';
import {cards, groups, tags} from '../data/data.json';
import {database} from '../utils/firebase';

console.log(database)

const WithCards = () => {
    const formattedCard = cards.map(card => ({
        ...card,
        tags: card.tags.map(tagId => (
            tags.find(({id}) => id === tagId)
        ))
    }))

    const formattedCards = groups.map(group => ({
        items: group.cards.map(cardId => (
            formattedCard.find(({id}) => id === cardId)
        ))
    }));

    return <Cards cards={formattedCards} />;
};

export default WithCards;