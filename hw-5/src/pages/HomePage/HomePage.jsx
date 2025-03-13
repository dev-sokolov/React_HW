import Logo from '../../assets/icons/logo';
import { AppleLogo, GoogleLogo, XLogo } from '../../assets/media';
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.logo}>
                    <div><Logo /></div>
                </div>
                <div className={styles.content}>
                    <h1>LIFE IS WASTED ON THE LIVING</h1>
                    <div className={styles.descr}><p>Sign in with</p></div>

                    <div>
                        <div className={styles.media_wrap}>
                            <AppleLogo className={styles.media_item} />
                            <GoogleLogo className={styles.media_item} />
                            <XLogo className={styles.media_item} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;