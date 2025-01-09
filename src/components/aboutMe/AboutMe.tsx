import { Trans, useTranslation } from 'react-i18next';
import styles from './AboutMe.module.scss';
import profileImg from '@/components/aboutMe/assets/profile.jpg';
import { Title } from '@/components/ui/title';

export const AboutMe: React.FC = () => {

    const { t } = useTranslation();

    return (
        <section>
            <Title title={t('component.ui.aboutMe.title')} />
            <div className={styles.aboutMeWrap}>
                <div className={styles.introduction}>
                    <h2>
                        <Trans>{t('component.ui.aboutMe.introduction')}</Trans>
                    </h2>
                    <ul className={styles.description}>
                        <li>
                            <i className={styles.emailIcon}></i>
                            <a href={t('component.ui.aboutMe.email')}>{t('component.ui.aboutMe.email')}</a>
                        </li>
                        <li>
                            <i className={styles.phoneIcon}></i>
                            <p>{t('component.ui.aboutMe.phone')}</p>
                        </li>
                        <li>
                            <i className={styles.githubIcon}></i>
                            <a href={t('component.ui.aboutMe.github')} target="_blank">
                                {t('component.ui.aboutMe.github')}
                            </a>
                        </li>
                        <li>
                            <i className={styles.blogIcon}></i>
                            <a href={t('component.ui.aboutMe.blog')} target="_blank">
                                {t('component.ui.aboutMe.blog')}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.profileWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.profileImg} src={profileImg.src} alt="profileImg"/>
                </div>
            </div>
        </section>
    )
}