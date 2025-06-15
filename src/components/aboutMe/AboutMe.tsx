import React, { useCallback } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styles from './AboutMe.module.scss';
import profileImg from '@/components/aboutMe/assets/profile.jpg';
import { Title } from '@/components/ui/title';
import { useTooltip } from '@/components/ui/tooltips';
import { tractEvent } from '@/logs/googleAnalytics/event';

const ACTION_CLICK = 'click';

export const AboutMe: React.FC = () => {
    const { t } = useTranslation();

    const { bind } = useTooltip<HTMLDivElement>({
		content: t('component.ui.aboutMe.emailTooltip'),
		theme: 'dark',
        direction: 'left',
		closeOnClick: true,
	});

    const handleLinkClick = useCallback((label: string) => {
        tractEvent({ action: ACTION_CLICK, category: 'AboutMe', label })
    }, []);

    const handleEmailCopy = useCallback((email: string) => {
        navigator.clipboard.writeText(email).then(() => {
            alert(t('component.ui.aboutMe.emailCopy'));
        });
    }, [t]);

    return (
        <section>
            <Title title={t('component.ui.aboutMe.title')} />
            <div className={styles.aboutMeWrap}>
                <div className={styles.introduction}>
                    <h2>
                        <Trans>{t('component.ui.aboutMe.introduction')}</Trans>
                    </h2>
                    <ul className={styles.description}>
                        <li className={styles.list}>
                            <i className={styles.emailIcon}></i>
                            <span className={styles.email} {...bind}>
                                <span onClick={() => handleEmailCopy(t('component.ui.aboutMe.email'))}>{t('component.ui.aboutMe.email')}</span>
                            </span>
                        </li>
                        <li className={styles.list}>
                            <i className={styles.phoneIcon}></i>
                            <p>{t('component.ui.aboutMe.phone')}</p>
                        </li>
                        <li className={styles.list}>
                            <i className={styles.githubIcon}></i>
                            <a
                                className={styles.iconLink}
                                href={t('component.ui.aboutMe.github')}
                                title={t('component.ui.aboutMe.githubTxt')} 
                                target="_blank"
                                onClick={() => handleLinkClick('github')}
                            >
                                {t('component.ui.aboutMe.githubTxt')}
                            </a>
                        </li>
                        <li className={styles.list}>
                            <i className={styles.blogIcon}></i>
                            <a
                                className={styles.iconLink}
                                href={t('component.ui.aboutMe.blog')}
                                title={t('component.ui.aboutMe.blogTxt')}
                                target="_blank"
                                onClick={() => handleLinkClick('blog')}
                            >
                                {t('component.ui.aboutMe.blogTxt')}
                            </a>
                        </li>
                        <li className={styles.list}>
                            <i className={styles.portfolioIcon}></i>
                            <a
                                className={styles.iconLink}
                                href={t('component.ui.aboutMe.portfolio')}
                                title={t('component.ui.aboutMe.portfolioTxt')}
                                target="_blank"
                                onClick={() => handleLinkClick('portfolio')}
                            >
                                {t('component.ui.aboutMe.portfolioTxt')}
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