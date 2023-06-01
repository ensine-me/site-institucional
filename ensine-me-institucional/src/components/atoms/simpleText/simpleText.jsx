import sSimpleText from './simpleText.module.css'

const SimpleText = ({ text }) => {
    return (
        <span className={sSimpleText.span}>{text}</span>
    )
}
export default SimpleText;