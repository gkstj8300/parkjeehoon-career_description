import { useTranslation } from 'react-i18next';
import styles from './Skill.module.scss';
import { SkillItem } from './SkillItem';
import { Title } from '@/components/ui/title';

export type SkillProps = {
    title: string;
    skills: string[];
}

export const Skill: React.FC = () => {
    const { t } = useTranslation();

    const skillKeys = [
        'languages',
        'frameworksAndLibraries',
        'infrastructureAndDatabases',
        'toolsAndIdes',
    ];

    const skills: SkillProps[] = skillKeys.map((key) => ({
        title: t(`component.ui.skill.${key}.title`),
        skills: t(`component.ui.skill.${key}.skills`).split(','),
    }));
    
    return (
        <section>
            <Title title={t(`component.ui.skill.title`)} />
            <div className={styles.skill}>
                {skills.map((item, index) => (
                    <SkillItem key={index} {...item}/>
                ))}
            </div>
        </section>
    )
}