import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import styles from './AuthForm.module.scss'
import {PiEye, PiEyeSlash} from "react-icons/pi";
import {BsCheck} from "react-icons/bs";
import {loginUser} from "../../slices/AuthSlice";

const AuthForm = () => {
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState(false)
    const togglePassVisibility = () => {
        setShowPass(!showPass)
    }
    const [credentials, setCredentials] = useState(
        {
            username: '',
            password: ''
        }
    )
    const handleInputChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(credentials, dispatch)
    }


    return (
        <form className={styles.auth_form}>
            <label htmlFor="" className={styles.login}>
                <span>Логин</span>
                <input
                    className={styles.login__input}
                    name={'username'}
                    type="text"
                    placeholder={'Введите свой логин'}
                    value={credentials.username}
                    onChange={handleInputChange}

                />
            </label>

            <label htmlFor="" className={styles.password}>
                <span>Пароль</span>
                <div className={styles.password__inner}>
                    {credentials.password.length < 1 ? <span className={styles.password__placeHolder}>••••••</span> : false}
                    <input
                        className={styles.password__input}
                        name={'password'}
                        type={showPass ? 'text' : 'password'}
                        placeholder=''
                        value={credentials.password}
                        onChange={handleInputChange}
                    />
                    <span
                        className={styles.password__icon}
                        onClick={togglePassVisibility}>
                        {showPass ? <PiEye/> : <PiEyeSlash/>}
                    </span>
                </div>
            </label>

            <div className={styles.middle_block}>
                <label className={styles.checkbox}>
                    <input
                        className={styles.checkbox__hidden}
                        type="checkbox"/>
                    <div
                        className={styles.checkbox__main}>
                        <BsCheck className={styles.checkbox__mark}/>
                    </div>
                    <span>Запомнить пароль</span>
                </label>
                <a
                    href="#"
                    className={styles.forgot_pass}>Забыл пароль</a>
            </div>

            <a
                onClick={handleLogin}
                href="#"
                className={styles.auth_btn}>Войти</a>
        </form>
    );
};

export default AuthForm;