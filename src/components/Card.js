import React from 'react';
import Tag from './Tag';

const Card = ({card: {title, subtitle, description, tags}}) => (
    <div className="card">
        <h3 className="card-title">{title}</h3>
        <small className="card-subtitle">{subtitle}</small>
        <h1 className="card-description">{description}</h1>
        
        <div className="card-tags">
            {tags.map(({value}, index) => (
                <Tag tag={value} key={index} />
            ))}
        </div>
    </div>
);

export default Card;
