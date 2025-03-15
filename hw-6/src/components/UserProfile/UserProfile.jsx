import { useState, useEffect } from 'react';
import axios from 'axios';

import style from './UserProfile.module.css'

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [switcher, setSwitcher] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get("https://randomuser.me/api");
                setUser(data.results[0]);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [switcher])

    const changePerson = () => {
        setSwitcher(prevSwitcher => !prevSwitcher);
    }

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p className={style.error}>{error}</p>}
            {user &&
                <div className={style.wrap}>
                    <div className={style.userCard}>
                        <div className={style.img}><img src={user.picture.large} alt="User" /></div>
                        <h2>{`${user.name.first} ${user.name.last}`}</h2>
                        <p className={style.mail}>Email: {user.email}</p>
                        <p className={style.phone}>Phone: {user.phone}</p>
                        <button onClick={changePerson}>Load New User</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default UserProfile;



