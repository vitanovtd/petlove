import { Fragment } from 'react';
import styles from './Header.module.css';


const Header = () => {
    return (
        <Fragment>


            <div className={styles.banner}>
                {/* header */}
                <div className="container">
                    <header className={styles.header}>
                        <img
                            className={styles.logo}
                            src="../assets/img/logo/pet-rescue-logo.svg"
                            alt="Pet Rescue"
                        />
                        <nav className={styles['main-nav-list']}>
                            <ul className={styles['main-nav-list']}>
                                <li>
                                    <a className={styles['main-nav-link']} href="#">
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a className={styles['main-nav-link']} href="#">
                                        Register
                                    </a>
                                </li>
                                <li>
                                    <a className={styles['main-nav-link']} href="#">
                                        Add a pet
                                    </a>
                                </li>
                                <li>
                                    <a className={styles['main-nav-link']} href="#">
                                        Logout
                                    </a>
                                </li>
                                <li>
                                    <a className={styles['main-nav-link', 'nav-cta']} href="#">
                                        Section 5
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>
        </Fragment>
    )
}


export default Header;