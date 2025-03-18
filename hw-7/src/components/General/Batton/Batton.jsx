import { useContext } from 'react';
import { languageContext } from '../../../context/LanguageProvider';

import style from './Batton.module.css';

const Batton = () => {
    const {language, toggleLanguage} = useContext(languageContext)
    const btnValue = language === "English" ? "Switch language on Ukrainian" : "Змінити мову на Англійську"
    return (
        <div>
            <button className={style.btn} onClick={toggleLanguage}>{btnValue}</button>
        </div>
    )
}

export default Batton;