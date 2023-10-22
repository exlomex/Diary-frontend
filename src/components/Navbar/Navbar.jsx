import React from 'react';
import styles from './Navbar.module.scss'

import logo from '../../assets/Diary.svg'
import Button from "../Button";

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className="container">
                <div className={styles.inner}>
                    <a
                        href={'#'}
                        className={styles.logo}>
                        <img src={logo} alt="Diary"/></a>

                    <nav className={styles.nav}>
                        <ul className={styles.nav_list}>
                            <li className={styles.nav_item}>
                                <a href="#" className={styles.nav_link}>Новости</a>
                            </li>
                            <li className={styles.nav_item}>
                                <a href="#" className={styles.nav_link}>Возможности</a>
                            </li>
                            <li className={styles.nav_item}>
                                <a href="#" className={styles.nav_link}>Контакты</a>
                            </li>
                        </ul>
                    </nav>

                    <Button className={'border_btn'}/>

                </div>
            </div>
        </div>
    );
};

export default Navbar;