import React from 'react';
import PropTypes from 'prop-types';

import sGreenTitle from './greenTitle.module.css'

const GreenTitle = ({ text }) => {
    return <h2 className={sGreenTitle.h2}>{text}</h2>;
}

GreenTitle.propTypes = {
    texto: PropTypes.string.isRequired
}

export default GreenTitle;