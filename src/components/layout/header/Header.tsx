import i18n from 'i18next';
import React, { useState, useCallback } from 'react';
import styles from './Header.module.scss';

const LOCALES = {
    KOR: 'ko',
    ENG: 'en',
};

type LocaleProps = {
    locale: string; 
    label: string; 
    onClick: (locale: string) => void;
}

const LocaleLink: React.FC<LocaleProps> = ({ 
    locale, 
    label, 
    onClick 
}) => (
    <li>
        <a
            className={styles.localeLink}
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick(locale);
            }}
        >
            {label}
        </a>
    </li>
);

export const Header: React.FC = () => {
    const [isHover, setIsHover] = useState(false);

    const handleLocaleChangeClick = useCallback((locale: string) => {
        i18n.changeLanguage(locale);
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.locale} onMouseLeave={() => setIsHover(false)}>
                <div className={styles.localeWrap} data-hover={isHover}>
                    <ul>
                        <LocaleLink locale={LOCALES.KOR} label="KOR" onClick={handleLocaleChangeClick} />
                        <LocaleLink locale={LOCALES.ENG} label="ENG" onClick={handleLocaleChangeClick} />
                    </ul>
                </div>
                <i className={styles.localeIcon} onMouseOver={() => setIsHover(true)}></i>
            </div>
        </div>
    );
};