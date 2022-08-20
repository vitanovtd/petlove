import { Fragment, useContext, useState } from 'react';

import styles from './Login.module.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import InputLogin from '../components/InputLogin'



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
            // pattern: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$",
            required: true,
        }
    ]

    const [error, setError] = useState(false);




    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

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
                console.log(user);
                navigate('/');
                // ...
            })
            .catch((error) => {

                setError(true);
            });
    }




    {/* <label>{inputs.label}</label>
        <input
            {...inputs} onChange={onChange} onBlur={handleFocus}
        />


        {error && <span className={styles.spanOne}>Wrong email or password</span>} */}

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
                        <button className={styles.btnlogin}>Login</button>

                        {error && <p className='error-login'>Incorrect Credentials</p>}
                    </div>
                </form>
            </div>

        </div>

    )
}

// value={values[inputs.name]}

export default Login;