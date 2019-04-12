import React from 'react';
import Card from './Card';
import Slider from "react-slick";

const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300
};

const CardGroup = ({items}) => (
    <li className="cards-group-item">
        <Slider {...settings}>
            {items.map((item, index) => (
                <Card card={item} key={index} />
            ))}
        </Slider>
    </li>
);

export default CardGroup;