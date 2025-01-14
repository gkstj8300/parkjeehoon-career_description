import i18n from 'i18next';
import React, { useState, useCallback } from 'react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {

    const [isHover, setIsHover] = useState(false);

    const handleLocaleChageClick = useCallback((locale: string) => {
        i18n.changeLanguage(locale);
    }, []);

    return (
        <div className={styles.local}>
            <div 
                className={styles.localeWrap}
                data-hover={isHover}
                onMouseLeave={() => setIsHover(false)}
            >
                <ul>
                    <li>
                        <a 
                            className={styles.localeLink} 
                            href="#"
                            onClick={() => handleLocaleChageClick('ko')}
                        >KOR</a>
                    </li>
                    <li>
                        <a 
                            className={styles.localeLink} 
                            href="#"
                            onClick={() => handleLocaleChageClick('en')}
                        >ENG</a>
                    </li>
                </ul>
            </div>
            <i 
                className={styles.localeIcon}
                onMouseOver={() => setIsHover(true)}
            ></i>
        </div>
    )
}