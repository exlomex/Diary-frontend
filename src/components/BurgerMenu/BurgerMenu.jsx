import React, {useEffect, useState} from 'react';
import styles from './BurgerMenu.module.scss'

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('body--no-scroll');
        } else {
            document.body.classList.remove('body--no-scroll');
        }

        return () => {
            document.body.classList.remove('body--no-scroll')
        }
    }, [isMenuOpen])
    return (
        <>
            <label className={styles.burger}>
                <input
                    type="checkbox"
                    onClick={toggleMenu}/>

                <div className={styles.burger__main}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </label>

            <div className={`${styles.menuItems} ${isMenuOpen ? styles['burger--visible'] : ''}`}>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li className={styles.item}><a href="#" className={styles.link}>Новости</a></li>
                            <li className={styles.item}><a href="#" className={styles.link}>Возможности</a></li>
                            <li className={styles.item}><a href="#" className={styles.link}>Контакты</a></li>
                        </ul>
                    </nav>
            </div>
        </>


    );
};

export default BurgerMenu;
