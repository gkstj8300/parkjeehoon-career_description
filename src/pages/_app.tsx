import '@/styles/globals.scss';
import { Meta } from "@/components/Meta";
import { type AppPropsWithLayout } from '@/pages/types';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    return (
        <>
            <Meta />
            <Component {...pageProps} />
        </>
    );
}
