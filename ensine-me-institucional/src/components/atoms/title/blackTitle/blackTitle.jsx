import React from 'react';
import PropTypes from 'prop-types';

import sBlackTitle from './blackTitle.module.css'

const Title = ({ text, color }) => {
    const textStyle = {
        color: color
    };

    return <h2 style={textStyle} className={sBlackTitle.h2}>{text}</h2>;
}

Title.propTypes = {
    texto: PropTypes.string.isRequired
}

export default Title;