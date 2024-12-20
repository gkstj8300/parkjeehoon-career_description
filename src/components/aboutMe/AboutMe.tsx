import styles from './AboutMe.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Title } from '@/components/ui/title';
import { Trans } from 'react-i18next';
import profileImg from '@/components/aboutMe/assets/profile.png';

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
                    <Image className={styles.profileImg} src={profileImg} alt="profileImg"/>
                </div>
            </div>
        </section>
    )
}