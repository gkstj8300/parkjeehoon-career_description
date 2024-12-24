import { useMemo } from 'react';
import styles from './ProjectItem.module.scss';
import { Skill } from '@/components/project/Skill';

type Props = {
    idx: number,
    projectName: string,
    logoImg: string,
    duration: string,
    skillKeywords: string,
}

export const ProjectItem: React.FC<Props> = ({
    idx,
    projectName,
    logoImg,
    duration,
    skillKeywords,
}) => {
    const isEven = useMemo(() => 
        idx % 2 === 0
    , [idx]);

    const skillList = useMemo(() => 
        skillKeywords.split(',')
    , [skillKeywords]);

    const Item = (
        <div className={styles.projectItem}>
            {isEven && (
                <div className={styles.detail}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.projectLogo} src={logoImg} alt={projectName} />
                </div>
            )}
            <div 
                className={styles.detailBody}
                data-even={isEven}
            >
                <div>
                    <h3 className={styles.projectName}>{projectName}</h3>
                    <p className={styles.duration}>{duration}</p>
                </div>
                <ul className={styles.description}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vulputate felis vivamus facilisis ligula.</li>
                    {skillList.map(skill => 
                        <Skill key={skill} skill={skill}/>
                    )}
                </ul>
            </div>
            {!isEven && (
                <div className={styles.detail}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.projectLogo} src={logoImg} alt={projectName} />
                </div>
            )}
        </div>
    );

    return Item;
}