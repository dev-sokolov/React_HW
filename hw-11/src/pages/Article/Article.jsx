import { articles } from '../../data/articles';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './Article.module.css';

const Article = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const article = articles.find(item => item.id === Number(id))

    const goBack = () => {
        return navigate(-1);
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.text}>{article.text}</p>
            <p className={styles.text}>{article.route}</p>
            <button onClick={goBack}>Назад</button>

        </div>
    )
}

export default Article;