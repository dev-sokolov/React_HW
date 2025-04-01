import { NavLink } from "react-router-dom";

import styles from "./MainMenu.module.css";

const MainMenu = () => {
    return (
        <ul className={styles.menu} >
            <li>
                <NavLink className={styles.li} to="/">Главная</NavLink>
            </li>
            <li>
                <NavLink className={styles.li} to="/articles">Статьи</NavLink>
            </li>        
        </ul>
    )
}

export default MainMenu;