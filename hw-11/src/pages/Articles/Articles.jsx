import { articles } from '../../data/articles';
import { Link } from 'react-router-dom';

import styles from './Articles.module.css';

const Articles = () => {
    const element = articles.map(item => <li key={item.id}><Link className={styles.text} to={`/articles/${item.id}`}>{item.title}</Link></li> )
    return (
        <ul>
            {element}
        </ul>
    )
}

export default Articles;