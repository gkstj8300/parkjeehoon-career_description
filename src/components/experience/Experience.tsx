import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Experience.module.scss';
import naedamLogoImg from './assets/neadam_logo.png';
import { Title } from '@/components/ui/title';

export const Experience: React.FC = () => {
    
    const { t } = useTranslation();

    const calculateDuration = useMemo(() => {
        const durationStart = t('common.experience.naedam.durationStart');
        const durationEnd = t('common.experience.naedam.durationEnd');

        const startDate = new Date(durationStart);
        const endDate = durationEnd === '재직중' ? new Date() : new Date(durationEnd);
    
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();
    
        if (months < 0) {
            years--;
            months += 12;
        }

        const yearText = years > 0 ? `${years}년` : '';
        const monthText = months > 0 ? `${months}개월` : '';
    
        return `${yearText} ${monthText}`.trim();
    }, []);

    return (
        <section>
            <Title title={t('common.experience.title')} />
            <div className={styles.experience}>
                <div className={styles.details}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.companyImg} src={naedamLogoImg.src} alt="companyImg"/>
                    <div className={styles.companyWrap}>
                        <h4 className={styles.companyName}>{t('common.experience.naedam.name')}</h4>
                        <p className={styles.duration}>
                            <div>
                                {t('common.experience.naedam.durationStart')}
                                <span>~</span>
                                {t('common.experience.naedam.durationEnd')}
                            </div>
                            <span className={styles.calculateDuration}>
                                {calculateDuration}
                            </span>
                        </p>
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