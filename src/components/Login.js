import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

import InputLogin from '../components/InputLogin'
import { AuthContext } from '../context/AuthContext';

import styles from './Login.module.css'


const Login = () => {
    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email adress",
            label: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Minimum six characters, at least one letter and one number",
            required: true,
        }
    ]

    const [error, setError] = useState(false);

    const [values, setValues] = useState({
        email: "",
        password: "",
    })


    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                navigate('/');

            })
            .catch((error) => {

                setError(true);
            });
    }

    return (

        <div className="container">
            <div className={styles.login}>
                <form className={styles.formOne} onSubmit={handleLogin}>


                    {inputs.map((input) => (
                        <InputLogin
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <div className={styles.divBtn}>
                        <button disabled={error} className={styles.btnlogin}>Login</button>
                        <p className={styles["p-auth-info"]}>
                            Don't Have an Account?{" "}
                            <Link className="link-auth" to="/register">
                                {" "}
                                Register
                            </Link>{" "}
                        </p>
                        {error && <p className={styles['error-login']}>Incorrect Credentials</p>}
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Login;