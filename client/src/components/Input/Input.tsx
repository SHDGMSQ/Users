import React, {ChangeEvent} from "react";
import styles from "./Input.module.css";
import {withMask} from "use-mask-input";

export const Input = React.memo(function Input(props: InputPropsType) {

    const {
        placeholder,
        value,
        onChange,
        error,
        mask
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value.trim());
    };

    return (
        <div>
            <input
                type="text"
                ref={mask ? withMask("99-99-99") : null}
                className={error ? `${styles.inputError} ${styles.input}` : styles.input}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                autoFocus={false}
            />
            <div className={styles.error}>{error}</div>
        </div>
    );
});

// types
type InputPropsType = {
    placeholder: string,
    value: string,
    onChange: (value: string) => void
    error?: string,
    mask?: boolean
}
