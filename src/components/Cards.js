import React, {Fragment} from 'react';
import CardGroup from './CardGroup';

const Cards = props => {
    const {cards} = props;

    return (
        <Fragment>
            <h1 className="title">Memorize!</h1>

            <ul className="cards-group">
                {cards.map(({items}, index) => (
                    <CardGroup items={items} key={index} />
                ))}
            </ul>
        </Fragment>
    );
}

export default Cards;