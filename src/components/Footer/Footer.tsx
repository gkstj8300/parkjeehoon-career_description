import styles from './Footer.module.scss';

export const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>
            <div className="flex gap-1">
                <a target="_blank" rel="noreferrer" href="mailto:tjd123123@naver.com" className="w-fit">
                    <span className="px-1 text-xs dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK undefined">Email</span>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/bbung95" className="w-fit">
                    <span className="px-1 text-xs dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK undefined">Github</span>
                </a>
                <a target="_blank" rel="noreferrer" href="https://velog.io/@bbung" className="w-fit">
                    <span className="px-1 text-xs dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK undefined">Blog</span>
                </a>
            </div>
            <div className="flex flex-col items-center">
                <span className="whitespace-pre-wrap text-center">Copyright 2024. 박지훈 </span>
                <a target="_blank" rel="noreferrer" href="https://github.com/sjoleee/very-simple-portfolio">Powered by very-simple-portfolio</a>
            </div>
        </footer>
    )
}