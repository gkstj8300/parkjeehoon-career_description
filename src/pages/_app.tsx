import i18next from 'i18next';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { setLocale } from 'yup';
import '@/styles/globals.scss';
import { Meta } from "@/components/Meta";
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
        <>      
            <Meta />
            <Component {...pageProps} />
        </>
    );
}
export default App;