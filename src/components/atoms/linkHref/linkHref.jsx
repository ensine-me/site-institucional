import PropTypes from 'prop-types';

import sLinkHref from './linkHref.module.css'
import SimpleText from '../simpleText/simpleText';

const LinkHref = ({ link, text, size }) => {
    return (
        <a className={sLinkHref.a} href={link}><SimpleText text={text} size={size}/></a>
    )
}

LinkHref.propTypes= {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default LinkHref;