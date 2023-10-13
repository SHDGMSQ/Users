import React from "react";
import styles from "./User.module.css";

export const User = (props: UserPropsType) => {

    const {
        email,
        number
    } = props;

    return (
        <li className={styles.usersList}>
            <span className={styles.email}>{email}</span>
            <span className={styles.number}>{number}</span>
        </li>
    );
};

//types
type UserPropsType = {
    email: string,
    number: string
}