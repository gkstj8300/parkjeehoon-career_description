import { Trans, useTranslation } from 'react-i18next';
import styles from './AboutMe.module.scss';
import profileImg from '@/components/aboutMe/assets/profile.jpg';
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
                        <li>
                            <i className={styles.phoneIcon}></i>
                            <p>{t('common.aboutMe.phone')}</p>
                        </li>
                        <li>
                            <i className={styles.emailIcon}></i>
                            <p>{t('common.aboutMe.email')}</p>
                        </li>
                        <li>
                            <i className={styles.githubIcon}></i>
                            <a href={t('common.aboutMe.github')} target="_blank">
                                {t('common.aboutMe.github')}
                            </a>
                        </li>
                        <li>
                            <i className={styles.blogIcon}></i>
                            <a href={t('common.aboutMe.blog')} target="_blank">
                                {t('common.aboutMe.blog')}
                            </a>
                        </li>
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