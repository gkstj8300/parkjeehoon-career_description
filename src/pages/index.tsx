import dynamic from "next/dynamic";
import { NextPageWithLayout } from "./types";
import { None } from '@/layouts/none';
import styles from '@/styles/home.module.scss';

const Home = dynamic(
	() => import('@/components/home').then(module => module.Home),
	{ ssr: false }
);

const HomePage: NextPageWithLayout = () => {
    return (
        <div className={styles.page}>
            <Home className={styles.home}/>
        </div>
    );
}
HomePage.displayName = 'HomePage';
HomePage.getLayout = None;

export default HomePage;
