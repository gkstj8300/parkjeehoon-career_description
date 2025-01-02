import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.header}>
            {t('component.ui.layouts.header.title')}
        </div>
    )
}