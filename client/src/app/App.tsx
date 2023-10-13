import React, {useState} from "react";
import styles from "./App.module.css";
import {Header} from "../components/Header/Header";
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";
import {findUsers} from "../services/userService/findUsers";
import {User} from "../components/User/User";
import {Loader} from "../components/Loader/Loader";


export const App = () => {

    const [email, setEmail] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [users, setUsers] = useState<ResponseUserType[]>([]);
    const [showHeader, setShowHeader] = useState<boolean>(false);
    const [error, setEmailError] = useState<string>("");
    const [showLoader, setShowLoader] = useState<boolean>(false)

    const getUsers = React.useMemo(() => (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!email) {
            setEmailError("Field is required!!!");
            return;
        }

        setShowHeader(false);
        setUsers([]);
        setShowLoader(true)

        let numberWithoutMask = number;
        if (number) {
            numberWithoutMask = number.replaceAll(/[-,_]/g, "");
        }

        findUsers(event.currentTarget, email, numberWithoutMask)
            .then(result => {
                setShowHeader(result.showHeader);
                setUsers(result.data);
                setShowLoader(result.showLoader)
            });
    }, [email, number, showLoader]);

    const changeEmailHandler =React.useMemo(() => (value: string) => {
        setEmail(value);
        if (value.length === 0) {
            setEmailError("Field is required!!!");

        } else if (value.length > 20) {
            setEmailError("Character limit exceeded (max 20)");
        } else {
            setEmailError("");
        }
    }, [])

    return (
        <div className={styles.app}>
            <Loader show={showLoader}/>
            <div className={styles.content}>
                <Header title="Поиск пользователей..."/>
                <div className={styles.form_container}>
                    <Input placeholder="Введите email..."
                           value={email || ""}
                           onChange={changeEmailHandler}
                           error={error}
                    />
                    <Input placeholder="Введите номер..."
                           value={number || ""}
                           onChange={setNumber}
                           mask={true}
                    />
                    <Button title="Submit" onClick={getUsers}/>
                </div>
            </div>
            <div className={styles.users}>
                {
                    showHeader
                        ?
                        <h3 className={styles.userHeader}>{users.length !== 0 ? "Найденные пользователи:" : "Пользователи не найдены"}</h3>
                        : null
                }
                {
                    users.map((el, i) => {
                        return (
                            <React.Fragment key={i}>
                                <User email={el.email} number={el.number}/>
                            </React.Fragment>
                        );
                    })
                }
            </div>
        </div>
    );
};

//types
type ResponseUserType = {
    email: string,
    number: string
}
