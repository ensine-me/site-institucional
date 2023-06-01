import sLargeSection from './largeSection.module.css'

import Title from 'components/atoms/title/blackTitle/blackTitle';

const LargeSection = ({ background, textColor}) => {

    const sectionStyle = {
        background: background
    };

    <section style={sectionStyle} className={sLargeSection.section}>
        aaaaaaaaaaaaaaaa
        <Title text='amongus' color={textColor}/>
    </section>
}

export default LargeSection;