import styles from './LocalePanel.module.scss';

const LOCALES = {
    KOR: 'ko',
    ENG: 'en',
};

type Props = {
    handleLocaleChangeClick: (locale: string) => void
}

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
    <li className={styles.link}>
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

export const LocalePanel: React.FC<Props> = ({
    handleLocaleChangeClick,
}) => {
    return (
        <div className={styles.localeWrap}>
            <ul>
                <LocaleLink locale={LOCALES.KOR} label="KOR" onClick={handleLocaleChangeClick} />
                <LocaleLink locale={LOCALES.ENG} label="ENG" onClick={handleLocaleChangeClick} />
            </ul>
        </div>
    )
}