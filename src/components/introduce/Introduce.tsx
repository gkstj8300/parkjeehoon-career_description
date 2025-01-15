import { Trans, useTranslation } from 'react-i18next';
import styles from './Introduce.module.scss';

export const Introduce: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className={styles.container}>
                <h3 className={styles.title}>
                    {t('component.ui.introduce.title')}
                </h3>
                <div className={styles.introduce}>
                    <p>
                        <Trans>
                            {t('component.ui.introduce.introduce')}
                        </Trans>
                    </p>
                </div>
            </div>
            
            <div className={styles.footer}>
                <small className={styles.lastUpdate}>
                    {t('component.ui.introduce.lastUpdate')}
                </small>
                <span className={styles.updateDate}>
                    {t('component.ui.introduce.updateDate')}
                </span>
            </div>
        </section>
    )
}