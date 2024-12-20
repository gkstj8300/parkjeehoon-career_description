import React from "react";
import styles from './Home.module.scss';
import { AboutMe } from '@/components/aboutMe';
import { Experience } from '@/components/experience';
import { Project } from '@/components/project';

type Props = {
    className?: string;
}

export const Home: React.FC<Props> = () => {
    return (
        <div className={styles.home}>
            <AboutMe />
            <Experience />
            <Project />
        </div>
    );
};

Home.displayName = 'Home';
