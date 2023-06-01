import sUl from './ulElementList.module.css'

const UlElementList = ({ items }) => {
    return (
        <ul className={sUl.ulContainer}>
            {items.map((item, index) => (
                <li className={sUl.li} key={qtd}>{item}</li>
            ))}
        </ul>
    )
}

UlElementList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default UlElementList;