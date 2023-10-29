import React, {useState} from 'react';
import styles from './AuthForm.module.scss'
import {PiEye, PiEyeSlash} from "react-icons/pi";
import {BsCheck} from "react-icons/bs";

const AuthForm = () => {
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const [showPass, setShowPass] = useState(false)

    const togglePassVisibility = () => {
        setShowPass(!showPass)
    }

    return (
        <form className={styles.auth_form}>
            <label htmlFor="" className={styles.login}>
                <span>Email / логин</span>
                <input
                    className={styles.login__input}
                    type="text"
                    placeholder={'Введите свой email / логин'}
                    value={login}
                    onChange={(e) => {
                        setLogin(e.target.value)
                    }}

                />
            </label>

            <label htmlFor="" className={styles.password}>
                <span>Пароль</span>
                <div className={styles.password__inner}>
                    {password.length < 1 ? <span className={styles.password__placeHolder}>••••••</span> : false}
                    <input
                        className={styles.password__input}
                        type={showPass ? 'text' : 'password'}
                        placeholder=''
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <span className={styles.password__icon} onClick={togglePassVisibility}>
                                        {showPass ? <PiEye/> : <PiEyeSlash/>}
                                    </span>
                </div>
            </label>

            <div className={styles.middle_block}>
                <label className={styles.checkbox}>
                    <input className={styles.checkbox__hidden} type="checkbox"/>
                    <div className={styles.checkbox__main}>
                        <BsCheck className={styles.checkbox__mark}/>
                    </div>
                    <span>Запомнить пароль</span>
                </label>
                <a href="#" className={styles.forgot_pass}>Забыл пароль</a>
            </div>

            <a href="" className={styles.auth_btn}>Войти</a>
        </form>
    );
};

export default AuthForm;