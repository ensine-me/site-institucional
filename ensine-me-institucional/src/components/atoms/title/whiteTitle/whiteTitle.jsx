import React from 'react';
import PropTypes from 'prop-types';

import sWhiteTitle from './whiteTitle.module.css'

const WhiteTitle = ({ text }) => {
    return <h2 className={sWhiteTitle.h2}>{text}</h2>;
}

WhiteTitle.propTypes = {
    texto: PropTypes.string.isRequired
}

export default WhiteTitle;