import React from "react";
import styles from './Home.module.scss';
import { AboutMe } from '@/components/aboutMe';
import { Experience } from '@/components/experience';

type Props = {
    className?: string;
}

export const Home: React.FC<Props> = () => {
    return (
        <div className={styles.home}>
            <AboutMe />
            <Experience />
        </div>
    );
};

Home.displayName = 'Home';
