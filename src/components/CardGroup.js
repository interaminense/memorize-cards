import React, {useState} from 'react';
import Card from './Card';

const CardItems = ({items, activeItem}) => (
    <ul className="card-group-items">
        {items.map((item, index) => {
            const active = parseInt(activeItem) === index;
            const classes = `card-group-item ${active ? 'active' : 'initial'}`;

            return (
                <li
                    className={classes}
                    key={index}
                >
                    <Card card={item} />
                </li>
            )
        })}
    </ul>
);

const Pagination = props => {
    const {items, onChange} = props;

    const handleClickItem = ({target}) => {
        const {index} = target.dataset;

        onChange && onChange(index);
    }

    return (
        <div className="card-pagination">
            {items.map((item, index) => (
                <button
                    data-index={index}
                    onClick={handleClickItem}
                    key={index}>
                </button>
            ))}
        </div>
    )
};

const CardGroup = ({items}) => {
    const [state, setState] = useState({activeItem: 0});

    const handleChangeItem = index => {
        setState({activeItem: index});
    }

    const {activeItem} = state;

    return (
        <li className="card-group">
            <CardItems
                activeItem={activeItem}
                items={items}
            />
            <Pagination
                onChange={handleChangeItem}
                items={items}
            />
        </li>
    );
}

export default CardGroup;