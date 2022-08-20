import { useContext } from 'react';
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signOut } from "firebase/auth";
import { auth } from '../firebase';

import { AuthContext } from '../context/AuthContext';
import styles from './Header.module.css';


const Header = () => {
    const { dispatch } = useContext(AuthContext);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();

        signOut(auth).then(() => {


            dispatch({ type: "LOGOUT" })
            navigate('/');
        }).catch((error) => {

            console.log(error);
        });
    }





    return (
        <Fragment>


            <div className={styles.banner}>

                <div className="container">
                    <header className={styles.header}>
                        <Link to="/">
                            <img
                                className={styles.logo}
                                src="../assets/img/logo/pet-rescue-logo.svg"
                                alt="Pet Rescue"
                            />
                        </Link>
                        <nav className={styles['main-nav-list']}>
                            <ul className={styles['main-nav-list']}>
                                {!currentUser && (
                                    <>
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
                                    </>
                                )}
                                <li>
                                    <Link className={styles['main-nav-link']} to="/pets">
                                        All Pets
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
                                            <Link className={styles['main-nav-link']} to="/profile">
                                                Profile
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
                                    <a className={styles['ctabtn']} href="#">
                                        Contact Us
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