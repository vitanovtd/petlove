import { Fragment } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


import { signOut } from "firebase/auth";
import { auth } from '../firebase';
const Header = () => {
    const { dispatch } = useContext(AuthContext);
    const { currentUser } = useContext(AuthContext);

    const logoutHandler = (e) => {
        e.preventDefault();

        signOut(auth).then(() => {
            // Sign-out successful.

            dispatch({ type: "LOGOUT" })

        }).catch((error) => {
            // An error happened.
        });
    }





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
                                <li >
                                    <Link className={styles['main-nav-link']} to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles['main-nav-link']} to="/register">
                                        Register
                                    </Link>
                                </li>
                                {currentUser && (
                                    <>
                                        <li>

                                            <Link className={styles['main-nav-link']} to="/pets/add">
                                                Add a pet

                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={styles['main-nav-link']} to="/" onClick={logoutHandler}>
                                                Logout
                                            </Link>
                                        </li>
                                    </>
                                )}

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