import React from "react";
import styles from "./Header.module.css";

export const Header = React.memo(function Header(props: HeaderPropsType) {

    const {
        title
    } = props;

    return (
        <header className={styles.header}>
            <h1 className={styles.header_inner}>{title}</h1>
        </header>
    );
});

//types
type HeaderPropsType = {
    title: string
}
