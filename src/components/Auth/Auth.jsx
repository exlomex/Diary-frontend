import React from 'react';
import styles from './Auth.module.scss'
import auth_img from '../../assets/image/auth_content_bg.svg'
import {MainContainer} from "../Containers";
import {AuthForm} from "../AuthForm";

const Auth = () => {
    return (
        <section className={styles.Auth}>
            <MainContainer>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Авторизация</h2>
                        <AuthForm/>
                    </div>
                    <div className={styles.img_box}>
                        <img src={auth_img} alt=""/>
                    </div>
                </div>
            </MainContainer>
        </section>
    );
};

export default Auth;