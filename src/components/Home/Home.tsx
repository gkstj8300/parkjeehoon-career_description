import React from "react";
import styles from './Home.module.scss';
import { AboutMe } from '@/components/aboutMe';

type Props = {
    className?: string;
}

export const Home: React.FC<Props> = props => {
    return (
        <div className={styles.home}>
            <AboutMe />
        </div>
    );
};

Home.displayName = 'Home';
