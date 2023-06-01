import PropTypes from 'prop-types';

import sLinkHref from './linkHref.module.css'

const LinkHref = ({ link, text }) => {
    return (
        <a className={sLinkHref.a} href={link}>{text}</a>
    )
}

LinkHref.PropTypes= {
    texto: PropTypes.string.isRequired
}

export default LinkHref;