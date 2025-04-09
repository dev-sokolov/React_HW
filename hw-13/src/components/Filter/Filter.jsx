import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/createAction";

import styles from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();

    const getValue = (e) => {
        const inputValue = e.target.value;
        const action = setFilter(inputValue)
        dispatch(action)
    }

    return (
        <>
            <input className={styles.text} onChange={getValue} type="text" name="username" placeholder="Введите имя" />
        </>
    )
}

export default Filter;