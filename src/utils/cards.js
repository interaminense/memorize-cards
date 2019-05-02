export const getFormattedCards = ({cards, groups, tags}) => (
    groups.map(group => ({
        items: group.cards.map(cardId => (
            cards.map(card => ({
                ...card,
                tags: card.tags.map(tagId => (
                    tags.find(({id}) => id === tagId)
                ))
            })).find(({id}) => id === cardId)
        ))
    }))
);