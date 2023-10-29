import React from 'react';
import styles from './Button.module.scss'

const Button = (props) => {

    return (
        <a href={'#'} className={`${ styles.button } ${ styles[props.className] }`}>
            Войти
        </a>

    );
};

export default Button;