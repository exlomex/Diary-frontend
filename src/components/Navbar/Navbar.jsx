import React from 'react';


import styles from './Navbar.module.scss'
import {MainContainer} from "../Containers";
import {Button} from "../ui";
import {BurgerMenu} from "../BurgerMenu";

import logo from '../../assets/Diary.svg'

import useWindowSize from "../../hooks/useWindowSize";

const Navbar = () => {
    const { width}  = useWindowSize()

    return (
        <div className={styles.Navbar}>
            <MainContainer>
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
                    ) : <BurgerMenu/>}
                </div>
            </MainContainer>
        </div>
    );
};

export default Navbar;