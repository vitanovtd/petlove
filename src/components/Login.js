import { useState } from 'react';

import styles from './Login.module.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/");
                // ...
            })
            .catch((error) => {
                setError(true);
            });
    }




    return (
        <div className={styles.login}>
            <form className={styles.formOne} onSubmit={handleLogin}>
                <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {error && <span className={styles.spanOne}>Wrong email or password</span>}
            </form>
        </div>
    )
}


export default Login;