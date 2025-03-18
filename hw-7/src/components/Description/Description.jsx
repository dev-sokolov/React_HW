import { useContext } from 'react';
import { languageContext } from '../../context/LanguageProvider';

import items from './items';

import style from './Description.module.css';


const Description = () => {
    const {language} = useContext(languageContext);

    const element = language === "English" ? items[0] : items[1]

    return (
        <div>
            <p className={style.desc}>{element}</p>            
        </div>
    )
}

export default Description;