import { useTranslation } from 'react-i18next';
import styles from './Project.module.scss';
import { ProjectItem } from './ProjectItem';
import hanwhaLogo from './assets/hanwhaLogo.png';
import misumiLogo from './assets/misumiLogo.svg';
import naedamLogo from './assets/naedamLogo.jpg';
import { Title } from '@/components/ui/title';

type ProjectItem = {
    projectName: string;
    logoImg: string;
    durationStart: string;
    durationEnd: string;
    skillKeywords: string;
    description: string;
};

const projectData = [
    { key: 'hanwha', logoImg: hanwhaLogo.src },
    { key: 'naedam', logoImg: naedamLogo.src },
    { key: 'misumiMaintenance', logoImg: misumiLogo.src },
    { key: 'misumiRenewal', logoImg: misumiLogo.src },
];

export const Project: React.FC = () => {
    const { t } = useTranslation();

    const projects: ProjectItem[] = projectData.map(({ key, logoImg }) => ({
        projectName: t(`component.ui.project.${key}.name`),
        logoImg,
        durationStart: t(`component.ui.project.${key}.durationStart`),
        durationEnd: t(`component.ui.project.${key}.durationEnd`),
        skillKeywords: t(`component.ui.project.${key}.skillKeywords`),
        description: t(`component.ui.project.${key}.description`),
    }));

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
