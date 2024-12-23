import styles from './ProjectItem.module.scss';
import type { ProjectItem as Props } from "@/components/project/Project";

export const ProjectItem: React.FC<Props> = ({
    // index,
    projectName,
    logoImg,
    duration,
}) => {
    return (
        <div className={styles.projectItem}>
            <div className={styles.detail}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.projectLogo} src={logoImg} alt={projectName} />
                <div>
                    <h3 className={styles.projectName}>{projectName}</h3>
                    <p className={styles.duration}>{duration}</p>
                </div>
            </div>
        </div>
    )
}