import React from "react";
import styles from "./Button.module.css";

export const Button = React.memo(function Button(props: ButtonPropsType) {

    const {
        title,
        onClick,
    } = props;

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick(event);
    };

    return (
        <button
            className={styles.button}
            onClick={onClickHandler}
        >{title}</button>
    );
});

//types
type ButtonPropsType = {
    title: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
