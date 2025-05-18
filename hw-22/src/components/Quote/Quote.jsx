import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentQuote } from '../../redux/quote/quotes-selectors';
import { getQuote } from '../../redux/quote/quotes-thunks';

import { useEffect } from 'react';

import styles from './Quote.module.css';

const Quote = () => {
    const { currentQuote, author, loadilg, error } = useSelector(selectCurrentQuote);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuote())
    }, [dispatch])

    const onGetRandomQuote = () => {
        dispatch(getQuote());
    }

    return (
        <>
            <div className={styles.wrapper}>
                {loadilg && <p>Loading...</p>}
                {error && <p className={styles.error}>{error}</p>}
                <p>{currentQuote}</p>
                <p className={styles.author}>{author}</p>
                <button onClick={onGetRandomQuote}>Get new quote</button>
            </div>
        </>
    )
}

export default Quote;