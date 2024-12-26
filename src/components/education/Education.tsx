import { useTranslation } from 'react-i18next';
import styles from './Education.module.scss';
import { EducationItem } from './EducationItem';
import { Title } from '@/components/ui/title';

export type EducationProps = {
    name: string;
    major: string;
    durationStart: string;
    durationEnd: string;
};

export const Education: React.FC = () => {
    const { t } = useTranslation();

    const educationKeys = [
        'highSchool',
        'university1',
        'education',
        'university2',
    ];

    const educations: EducationProps[] = educationKeys.map((key) => ({
        name: t(`common.education.${key}.name`),
        major: t(`common.education.${key}.major`),
        durationStart: t(`common.education.${key}.durationStart`),
        durationEnd: t(`common.education.${key}.durationEnd`),
    }));

    return (
        <section>
            <Title title={t('common.education.title')} />
            <div className={styles.education}>
                {educations.map((item, index) => (
                    <EducationItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
};
