import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import { AuthContext } from "../context/AuthContext";
import InputLogin from "../components/InputLogin";
import styles from "./Register.module.css";

const Register = () => {
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
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 3,
            name: "repeatPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Password doesn't match",
            //   pattern: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$",
            required: true,
        },
    ];


    const [error, setError] = useState(false);

    const [values, setValues] = useState({
        email: "",
        password: "",
        repeatPassword: ""
    });

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (values.password !== values.repeatPassword) {
            setError(true)
            return;
        } else {
            setError(false)
        }

        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {

                const user = userCredential.user;
                dispatch({ type: "REGISTER", payload: user });

                navigate("/");

            })
            .catch((error) => {
                setError(true);
            });
    };

    return (
        <div className={styles.register}>
            <form className={styles.formOne} onSubmit={handleLogin}>
                {inputs.map((input) => (
                    <InputLogin
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <div className={styles["divBtn"]}>
                    <button className={styles["btnlogin"]} type="submit">
                        Register
                    </button>
                    <p className={styles["p-auth-info"]}>
                        Have already an account?{" "}
                        <Link className="link-auth" to="/login">
                            {" "}
                            Login
                        </Link>{" "}
                    </p>
                    {error && <p className={styles['error-register']}>passwords does not match</p>}
                </div>
            </form>
        </div>
    );
};

export default Register;
