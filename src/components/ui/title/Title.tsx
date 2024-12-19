import React from 'react';
import styles from './Title.module.scss';

type props = {
    title: string;
}

export const Title: React.FC<props> = ({
    title,
}) => {

    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
                <h1 className={styles.title}>
                    {title}
                </h1>
            <div className={styles.line}></div>
        </div>
    )
}