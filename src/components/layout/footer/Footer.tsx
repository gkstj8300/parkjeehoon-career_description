import styles from './Footer.module.scss';

export const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.linkList}>
                <a target="_blank">
                    <span>Email</span>
                </a>
                <a target="_blank" href='https://github.com/gkstj8300'>
                    <span>Github</span>
                </a>
                <a target="_blank" href='https://gkstj8300.tistory.com/'>
                    <span>Blog</span>
                </a>
            </div>
            <div>
                <span>Copyright 2024.ParkJeeHoon Corporation All Rights Reserved.</span>
            </div>
        </footer>
    )
}