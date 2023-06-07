import UlElementList from "components/molecules/ulElementList/ulElementList";
import Logo from '../../atoms/logo/logo.jsx'

import sMenu from './menu.module.css';
import Button from "components/molecules/button/button.jsx";

const Menu = () => {
    return (
        <div className={sMenu.menu}>
            <Logo />
            <UlElementList items={[
                { text: 'Sobre', link: '#quem-somos', size: 'large' },
                { text: 'Proposta', link: '#como-funciona', size: 'large' },
                { text: 'Funcionamento', link: '#o-que-oferecemos', size: 'large' },
                { text: 'Depoimentos', link: '#depoimentos', size: 'large' }]}
            />
            <div className={sMenu.buttons}>
                    <Button path={'./login'} text='Login' />
                    <Button path={'./cadastro'} text='Cadastro' />

            </div>
        </div>
    )
}

export default Menu;