import styles from './Layout.module.scss';
import { Footer } from "./footer"
import { Header } from './header';
import { ContextProviders } from '@/components/functional/ContextProviders';
import { TooltipController } from '@/components/ui/tooltips';

type LayoutProps = {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <ContextProviders>
            <div className={styles.layout}>
                <Header />
                <div className={styles.main}>
                    <div className={styles.childrenWrapper}>{children}</div>
                </div>
                <Footer />
            </div>
            <TooltipController />
        </ContextProviders>
    )
}