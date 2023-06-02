import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Carrossel = ({ cards }) => {
    return (
        <div>
            <Carousel>
                {cards.map((card, index) => (
                    <Carousel.Item interval={3000} key={index}>
                        {card}
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

Carrossel.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Carrossel;
