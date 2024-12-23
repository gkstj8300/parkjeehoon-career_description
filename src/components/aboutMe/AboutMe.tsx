import { Trans, useTranslation } from 'react-i18next';
import styles from './AboutMe.module.scss';
import profileImg from '@/components/aboutMe/assets/profile.png';
import { Title } from '@/components/ui/title';

export const AboutMe: React.FC = () => {

    const { t } = useTranslation();

    return (
        <section>
            <Title title={t('common.aboutMe.title')} />
            <div className={styles.aboutMeWrap}>
                <div className={styles.introduction}>
                    <h2>
                        <Trans>{t('common.aboutMe.introduction')}</Trans>
                    </h2>
                    <ul className={styles.description}>
                        <li>description1</li>
                        <li>description2</li>
                        <li>description3</li>
                        <li>description4</li>
                    </ul>
                </div>
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.profileImg} src={profileImg.src} alt="profileImg"/>
                </div>
            </div>
        </section>
    )
}