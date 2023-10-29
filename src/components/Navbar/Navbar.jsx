import React, {useState} from 'react';
import styles from './Navbar.module.scss'

import logo from '../../assets/Diary.svg'
import Button from "../Button";
import Burger from "../Burger";
import useWindowSize from "../../hooks/useWindowSize";

const Navbar = () => {
    const { width}  = useWindowSize()

    return (
        <div className={styles.Navbar}>
            <div className="container">
                <div className={styles.inner}>
                    <a
                        href={'#'}
                        className={styles.logo}>
                        <img src={logo} alt="Diary"/></a>

                    { !(width < 900) ? (
                        <>
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
                        </>
                    ) : <Burger/>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;