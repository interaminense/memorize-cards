import React from 'react';

const Card = ({card: {title, subtitle, description}}) => (
    <div className="card">
        <h3 className="card-title">{title}</h3>
        <small className="card-subtitle">{subtitle}</small>
        <h1 className="card-description">{description}</h1>
    </div>
);

export default Card;
