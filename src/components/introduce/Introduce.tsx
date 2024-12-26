import { Trans, useTranslation } from 'react-i18next';
import styles from './Introduce.module.scss';

export const Introduce: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {t('common.introduce.title')}
                </h1>
                <div className={styles.introduce}>
                    <div>
                        <Trans>
                            {t('common.introduce.introduce')}
                        </Trans>
                    </div>
                    <div className={styles.updateWrap}>
                        <small className={styles.lastUpdate}>
                            {t('common.introduce.updateDate')}
                        </small>
                        <span className={styles.updateDate}>2024.12.26</span>
                    </div>
                </div>
            </div>
        </section>
    )
}