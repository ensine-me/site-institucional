import sButton from './button.module.css';
import LinkHref from 'components/atoms/linkHref/linkHref';

const Button = ({ path, text }) => {
    return (
        <div className={sButton.buttonContainer}>
            <LinkHref link={path} text={text}/>
        </div>
    )
}

export default Button;