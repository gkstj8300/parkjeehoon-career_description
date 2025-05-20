import { useTranslation } from 'react-i18next';
import styles from './Project.module.scss';
import { ProjectItem } from './ProjectItem';
import hanwhaLogo from './assets/hanwhaLogo.png';
import misumiLogo from './assets/misumiLogo.svg';
import naedamLogo from './assets/naedamLogo.jpg';
import { Title } from '@/components/ui/title';
import { DevelopType } from '@/components/ui/title/MiniTitle';

export type Develop = {
    type: DevelopType;
    name: string;
    developmentStart: string;
    developmentEnd: string;
    description: string;
}

type ProjectItemType = {
    name: string;
    projectName: string;
    logoImg: string;
    durationStart: string;
    durationEnd: string;
    skillKeywords: string;
    description: string;
    development: Develop[];
};

const projectData = [
    { key: 'hanwha', logoImg: hanwhaLogo.src },
    { key: 'naedam', logoImg: naedamLogo.src },
    { key: 'misumiMaintenance', logoImg: misumiLogo.src },
    { key: 'misumiRenewal', logoImg: misumiLogo.src },
];

export const Project: React.FC = () => {
    const { t } = useTranslation();

    const projects: ProjectItemType[] = projectData.map(({ key, logoImg }) => {
        const development: Develop[] = [];

        for (let i = 1; i <= 5; i++) {
            const type: DevelopType = t(`component.ui.project.${key}.development.develop${i}.type`);
            if (!type || type === `component.ui.project.${key}.development.develop${i}.type`) {
                continue;
            }

            development.push({
                type,
                name: t(`component.ui.project.${key}.development.develop${i}.name`),
                developmentStart: t(`component.ui.project.${key}.development.develop${i}.developmentStart`),
                developmentEnd: t(`component.ui.project.${key}.development.develop${i}.developmentEnd`),
                description: t(`component.ui.project.${key}.development.develop${i}.description`),
            });
        }

        return {
            name: t(`component.ui.project.${key}.name`),
            projectName: t(`component.ui.project.${key}.projectName`),
            logoImg,
            durationStart: t(`component.ui.project.${key}.durationStart`),
            durationEnd: t(`component.ui.project.${key}.durationEnd`),
            skillKeywords: t(`component.ui.project.${key}.skillKeywords`),
            description: t(`component.ui.project.${key}.description`),
            development,
        };
    }).reverse();

    return (
        <section>
            <Title title={t('component.ui.project.title')} />
            <div className={styles.projects}>
                {projects.map((item, index) => (
                    <ProjectItem
                        key={index}
                        idx={index}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};
