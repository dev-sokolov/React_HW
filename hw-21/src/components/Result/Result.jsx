
import { useSelector } from "react-redux";
import { selectScore } from "../../redux/questionnaire/questionnaire-selectors";

import styles from './Result.module.css';

const Result = () => {
    const score = useSelector(selectScore);

    return (

        <div className={styles.wrapper}>           
            <h3 className={styles.title}>Your Score:</h3>
            <p>{score}</p>
        </div>
    );
};

export default Result;
