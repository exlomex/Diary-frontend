import React from 'react';
import Navbar from "../Navbar/Navbar";
import styles from './Button.module.scss'

const Button = (props) => {

    return (
        <a href={'#'} className={`${ styles.button } ${ styles[props.className] }`}>
            Войти
        </a>

    );
};

export default Button;