import React from "react";
import styles from "./Loader.module.css";

export const Loader = (props: LoaderPropsType) => {

    const {
        show
    } = props

    return (
        <h3 className={show ?styles.loader: styles.notDisplay}
        >
            Загрузка...
        </h3>
    );
};

//types
type LoaderPropsType = {
    show: boolean
}
