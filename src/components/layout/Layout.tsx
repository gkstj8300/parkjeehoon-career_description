import styles from './Layout.module.scss';
import { Footer } from "./footer"
import { Header } from './header';

type LayoutProps = {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.main}>
                <div className={styles.childrenWrapper}>{children}</div>
            </div>
            <Footer />
        </div>
    )
}