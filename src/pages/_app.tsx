import i18next from 'i18next';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { setLocale } from 'yup';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { Layout } from '@/components/layout';
import '@/styles/globals.scss';
import '@/i18n';
import { Meta } from "@/components/meta";
import { Standard } from '@/layouts/standard';
import { type AppPropsWithLayout } from '@/utils/types';
import { createLocale } from '@/validators/locale';

(() => {
	const t = i18next.getFixedT('ko');
	setLocale(createLocale(t));
})();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const [t] = useTranslation();

    const getLayout = Component.getLayout || Standard;

    useEffect(() => {
		setLocale(createLocale(t));
	}, [t]);

    return (
        <Layout>      
            <Meta />
            <GoogleAnalytics />
            {getLayout(<Component {...pageProps} />)}
        </Layout>
    );
}
export default App;