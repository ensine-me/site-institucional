import React from 'react';
import PropTypes from 'prop-types';

import sBlackTitle from './blackTitle.module.css'

const WhiteTitle = ({ text }) => {
    return <h2 className={sBlackTitle.h2}>{text}</h2>;
}

WhiteTitle.propTypes = {
    texto: PropTypes.string.isRequired
}

export default WhiteTitle;