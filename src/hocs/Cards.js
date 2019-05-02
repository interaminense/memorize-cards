import React, {useEffect, useState} from 'react';
import Cards from '../components/Cards';
import Loading from '../components/Loading';
import {database} from '../utils/firebase';
import {getFormattedCards} from '../utils/cards';

const WithCards = () => {
    const [state, setState] = useState({cards: [], loading: true})

    useEffect(() => {
        database.ref().once('value').then(snapshot => {
            const data = snapshot.val();

            setState({
                cards: getFormattedCards(data),
                loading: false
            })
        });
    }, [])

    const {cards, loading} = state;

    return loading ? <Loading /> : <Cards cards={cards} />;
};

export default WithCards;