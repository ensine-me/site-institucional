import React from 'react';
import PropTypes from 'prop-types';

import sGreenTitle from './greenTitle.module.css'

const GreenTitle = ({ texto }) => {
    return <h2 className={sGreenTitle.h2}>{texto}</h2>;
}

GreenTitle.propTypes = {
    texto: PropTypes.string.isRequired
}

export default GreenTitle;