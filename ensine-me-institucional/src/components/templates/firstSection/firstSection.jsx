import sFirstSection from './firstSection.module.css'

import Title from 'components/atoms/title/title';

const FirstSection = ({ text }) => {
    return (
        <section className={sFirstSection.section}>
            <Title text={text} />
        </section>
    )
}

export default FirstSection;