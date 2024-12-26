import { useTranslation } from 'react-i18next';
import styles from './Education.module.scss';
import { EducationItem } from './EducationItem';
import { Title } from '@/components/ui/title';

export type EducationProps = {
    name: string;
    major: string;
    durationStart: string;
    durationEnd: string;
}

export const Education: React.FC = () => {
    const { t } = useTranslation();

    const educations: EducationProps[] = [
        {
            name: t('common.education.highSchool.name'),
            major: t('common.education.highSchool.major'),
            durationStart: t('common.education.highSchool.durationStart'),
            durationEnd: t('common.education.highSchool.durationEnd'),
        },
        {
            name: t('common.education.university1.name'),
            major: t('common.education.university1.major'),
            durationStart: t('common.education.university1.durationStart'),
            durationEnd: t('common.education.university1.durationEnd'),
        },
        {
            name: t('common.education.education.name'),
            major: t('common.education.education.major'),
            durationStart: t('common.education.education.durationStart'),
            durationEnd: t('common.education.education.durationEnd'),
        },
        {
            name: t('common.education.university2.name'),
            major: t('common.education.university2.major'),
            durationStart: t('common.education.university2.durationStart'),
            durationEnd: t('common.education.university2.durationEnd'),
        },
    ];

    return (
        <section>
            <Title title={t('common.education.title')} />
            <div className={styles.education}>
                {educations.map(item =>
                    <EducationItem key={item.name} {...item}/>
                )}
            </div>
        </section>
    )
}