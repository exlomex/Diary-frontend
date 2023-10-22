import React from 'react';
import styles from './Auth.module.scss'

import auth_img from '../../assets/image/auth_content_bg.svg'

const Auth = () => {
    return (
        <section className={styles.Auth}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Авторизация</h2>
                        <form className={styles.auth_form}>
                            <label htmlFor="" className={styles.login}>
                                Email / логин
                                <input type="text" placeholder={'Введите свой email / логин'}/>
                            </label>

                            <label htmlFor="" className={styles.password}>
                                Пароль
                                <input type="password" placeholder={'•••••••••'}/>
                            </label>

                            <div className={styles.middle_block}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" name={'auth_checkbox'}/>
                                    <label htmlFor="auth_checkbox">Запомнить меня</label>
                                </div>

                                <a href="#" className={styles.forgot_pass}>Забыл пароль</a>
                            </div>

                            <a href="" className={styles.auth_btn}>Войти</a>
                        </form>
                    </div>
                    <div className={styles.img_box}>
                        <img src={auth_img} alt=""/>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Auth;