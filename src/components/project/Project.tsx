import { useTranslation } from 'react-i18next';
import styles from './Project.module.scss';
import { ProjectItem } from './ProjectItem';
import hanwhaLogo from './assets/hanwhaLogo.png';
import misumiLogo from './assets/misumiLogo.svg';
import naedamLogo from './assets/naedamLogo.jpg';
import { Title } from '@/components/ui/title';

type ProjectItem = {
    projectName: string,
    logoImg: string,
    durationStart: string,
    durationEnd: string,
    skillKeywords: string,
}

export const Project: React.FC = () => {

    const { t } = useTranslation();

    const projects: ProjectItem[] = [
        {
            projectName: t('common.project.hanwha.name'),
            logoImg: hanwhaLogo.src,
            durationStart: t('common.project.hanwha.durationStart'),
            durationEnd: t('common.project.hanwha.durationEnd'),
            skillKeywords: t('common.project.hanwha.skillKeywords'),
        },
        {
            projectName: t('common.project.naedam.name'),
            logoImg: naedamLogo.src,
            durationStart: t('common.project.naedam.durationStart'),
            durationEnd: t('common.project.naedam.durationEnd'),
            skillKeywords: t('common.project.naedam.skillKeywords'),
        },
        {
            projectName: t('common.project.misumiMaintenance.name'),
            logoImg: misumiLogo.src,
            durationStart: t('common.project.misumiMaintenance.durationStart'),
            durationEnd: t('common.project.misumiMaintenance.durationEnd'),
            skillKeywords: t('common.project.misumiMaintenance.skillKeywords'),
        },
        {
            projectName: t('common.project.misumiRenewal.name'),
            logoImg: misumiLogo.src,
            durationStart: t('common.project.misumiRenewal.durationStart'),
            durationEnd: t('common.project.misumiRenewal.durationEnd'),
            skillKeywords: t('common.project.misumiRenewal.skillKeywords'),
        },
    ];

    return (
        <section>
            <Title title={t('common.project.title')} />
            <div className={styles.projects}>
                {projects.map((item, index) => 
                    <ProjectItem 
                        key={item.projectName}
                        idx={index}
                        projectName={item.projectName}
                        durationStart={item.durationStart}
                        durationEnd={item.durationEnd}
                        logoImg={item.logoImg}
                        skillKeywords={item.skillKeywords}
                    />
                )}
            </div>
        </section>
    )
}