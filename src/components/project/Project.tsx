import { useTranslation } from 'react-i18next';
import styles from './Project.module.scss';
import { ProjectItem } from './ProjectItem';
import hanwhaLogo from './assets/hanwhaLogo.png';
import misumiLogo from './assets/misumiLogo.svg';
import naedamLogo from './assets/naedamLogo.jpg';
import { Title } from '@/components/ui/title';

export type ProjectItem = {
    className?: string,
    index?: number,
    projectName: string,
    logoImg: string,
    duration: string,
}

export const Project: React.FC = () => {

    const { t } = useTranslation();

    const projects: ProjectItem[] = [
        {
            projectName: t('common.project.hanwha.name'),
            logoImg: hanwhaLogo.src,
            duration: t('common.project.hanwha.duration'),
        },
        {
            projectName: t('common.project.naedam.name'),
            logoImg: naedamLogo.src,
            duration: t('common.project.naedam.duration'),
        },
        {
            projectName: t('common.project.misumi.name'),
            logoImg: misumiLogo.src,
            duration: t('common.project.misumi.duration'),
        },
    ];

    return (
        <section>
            <Title title={t('common.project.title')} />
            <div className={styles.projects}>
                {projects.map((item, index) => 
                    <ProjectItem 
                        key={item.projectName}
                        index={index}
                        projectName={item.projectName}
                        duration={item.duration}
                        logoImg={item.logoImg}
                    />
                )}
            </div>
        </section>
    )
}