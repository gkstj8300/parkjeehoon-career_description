import i18next from 'i18next';
import { Layout } from '@/components/layout';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { setLocale } from 'yup';
import '@/styles/globals.scss';
import '@/i18n';
import { Meta } from "@/components/meta";
import { type AppPropsWithLayout } from '@/pages/types';
import { createLocale } from '@/validators/locale';

(() => {
	const t = i18next.getFixedT('ko');
	setLocale(createLocale(t));
})();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const [t] = useTranslation();

    useEffect(() => {
		setLocale(createLocale(t));
	}, [t]);

    return (
        <Layout>      
            <Meta />
            <Component {...pageProps} />
        </Layout>
    );
}
export default App;