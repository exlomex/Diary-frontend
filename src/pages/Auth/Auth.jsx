import React, {useState} from 'react';
import styles from './Auth.module.scss'
import auth_img from '../../assets/image/auth_content_bg.svg'

import AuthForm from "../../components/Auth-form";

const Auth = () => {
    return (
        <section className={styles.Auth}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Авторизация</h2>

                        <AuthForm/>
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