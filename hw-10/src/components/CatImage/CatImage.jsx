import { getCats } from '../../api/cats';
import { useEffect, useState } from 'react';

import styles from './CatImage.module.css';

const CatImage = () => {

    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [flag, setFlag] = useState(true)

    useEffect(() => {
        const getCatsList = async () => {
            try {
                setLoading(true);
                const data = await getCats();
                setCats(data);
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        getCatsList()
    }, [flag])

    const reload = () => {
        setFlag(prevFlag => !prevFlag)
    }

    const elements = cats.map(item => <div className={styles.box} key={item.id}><img style={{ width: "300px", height: "300px" }} src={item.url} alt="cat" /></div>)

    return (
        <>
            <div className={styles.content}>
                <h2>Random Cat Image</h2>
                {elements}
                <div className={styles.btn}><button onClick={reload} type='submit'>Load New Image</button></div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
            </div>
        </>
    )
}

export default CatImage;