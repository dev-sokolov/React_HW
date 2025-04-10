import { useId } from 'react';
import { useForm } from 'react-hook-form';

import setUserInfo from '../../redux/actionCreators';
import { useDispatch } from 'react-redux';

import styles from './UserForm.module.css';

const UserForm = () => {

    const dispatch = useDispatch();    

    const usernameID = useId();
    const statusId = useId();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onClick = (value) => {
        const action = setUserInfo(value)
        dispatch(action);
        reset();
    }

    return (
        <div className={styles.wrapper}>
            <h2>Edit User Information</h2>
            <form>
                <div>
                    <label htmlFor={usernameID}>Name:</label>
                    <input {...register('name', { required: "Заполните поле" })} type="text" id={usernameID} />
                    {errors.name && <p className={styles.error} >{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor={statusId}>Status:</label>
                    <input {...register('status', { required: "Заполните поле" })} type="text" id={statusId} />
                    {errors.status && <p className={styles.error} >{errors.status.message}</p>}
                </div>
                <button onClick={handleSubmit(onClick)} type='button'>Save</button>
            </form>
        </div>
    )
}

export default UserForm;