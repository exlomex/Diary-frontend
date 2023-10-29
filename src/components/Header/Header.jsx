import React, {useState} from 'react';
import Navbar from "../Navbar/Navbar";
import styles from './Header.module.scss'

import header_img from '../../assets/image/header_content_bg.svg'
import Button from "../Button";

const Header = () => {
    return (
        <header className={styles.Header}>
            <Navbar/>
            <div className='container'>
                <div className={styles.body_inner}>
                    <div className={styles.content}>
                        <div className={styles.heading}>
                            <h1 className={styles.heading__title}>
                                <p>Больше</p>
                                чем дневник
                            </h1>
                            <p className={styles.heading__subtitle}>Однозначно, активно развивающиеся страны третьего
                                мира
                                формируют глобальную экономическую сеть и при этом — своевременно верифицированы.</p>
                        </div>

                        <Button className={'filling_btn'}/>
                    </div>

                    <div className={styles.img_box}>
                        <img src={header_img} alt=""/>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;