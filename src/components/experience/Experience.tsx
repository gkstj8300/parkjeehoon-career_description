import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Experience.module.scss';
import naedamLogoImg from './assets/neadam_logo.png';
import { Title } from '@/components/ui/title';

export const Experience: React.FC = () => {
    
    const { t } = useTranslation();
    const [duration, setDuration] = useState<string>();

    const calculateDuration = () => {
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
        const duration = `${yearText} ${monthText}`.trim();
        setDuration(duration);
    };

    const experienceList = useMemo(() => {
        const experience = t('common.experience.experience');
        return experience.split('<br />').map(item => item.trim())
    }, [t]);

    useEffect(() => {
        calculateDuration();
    }, [t]);

    return (
        <section>
            <Title title={t('common.experience.title')} />
            <div className={styles.experience}>
                <div className={styles.details}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.companyImg} src={naedamLogoImg.src} alt="companyImg"/>
                    <div className={styles.companyWrap}>
                        <h4 className={styles.companyName}>{t('common.experience.naedam.name')}</h4>
                        <div className={styles.duration}>
                            <div>
                                {t('common.experience.naedam.durationStart')}
                                <span>~</span>
                                {t('common.experience.naedam.durationEnd')}
                            </div>
                            <span className={styles.calculateDuration}>
                                {duration}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <ul className={styles.description}>
                    {experienceList.map((experience, idx) => 
                        <li key={idx}>{experience}</li>
                    )}
                </ul>
            </div>
        </section>
    );
}