import styles from './ProjectItem.module.scss';

type Props = {
    idx: number,
    projectName: string,
    logoImg: string,
    duration: string,
}

export const ProjectItem: React.FC<Props> = ({
    idx,
    projectName,
    logoImg,
    duration,
}) => {
    const Item = (idx === 0 || idx % 2 === 0) 
        ? (
            <div className={styles.projectItem}>
                <div className={styles.detail}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.projectLogo} src={logoImg} alt={projectName} />
                </div>
                <ul className={styles.description}>
                    <div>
                        <h3 className={styles.projectName}>{projectName}</h3>
                        <p className={styles.duration}>{duration}</p>
                    </div>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                </ul>
            </div>
        )
        : (
            <div className={styles.projectItem}>
                <ul className={styles.description}>
                    <div>
                        <h3 className={styles.projectName}>{projectName}</h3>
                        <p className={styles.duration}>{duration}</p>
                    </div>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                </ul>
                <div className={styles.detail}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.projectLogo} src={logoImg} alt={projectName} />
                </div>
            </div>
        );

    return Item;
}