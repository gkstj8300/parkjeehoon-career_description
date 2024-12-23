import { useTranslation } from 'react-i18next';
import styles from './Experience.module.scss';
import naedamLogoImg from './assets/neadam_logo.png';
import { Title } from '@/components/ui/title';

export const Experience: React.FC = () => {
    
    const { t } = useTranslation();

    return (
        <section>
            <Title title={t('common.experience.title')} />
            <div className={styles.experience}>
                <div className={styles.details}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.companyImg} src={naedamLogoImg.src} alt="companyImg"/>
                    <div className={styles.companyWrap}>
                        <h4 className={styles.companyName}>{t('common.experience.naedam.name')}</h4>
                        <p className={styles.duration}>{t('common.experience.naedam.duration')}</p>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <ul className={styles.description}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                </ul>
            </div>
        </section>
    );
}