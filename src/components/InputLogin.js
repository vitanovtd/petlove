import { useState } from "react";

import styles from './InputLogin.module.css';

const InputLogin = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className={styles['formInput']}>
            <label className={styles['label-field']}>{label}</label>
            <input className={styles['input-field']}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "repeatPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};


export default InputLogin;

