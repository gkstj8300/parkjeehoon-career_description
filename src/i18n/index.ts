import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '@/i18n/resources';
console.log("접근")
if (!i18n.isInitialized && resources.ko) {
	console.log("접근2")
	i18n
		.use(initReactI18next)
		.init({
            debug: true,
			resources: {
				ko: {
					translation: {
						...resources.ko.translation,
					},
				},
			},
            lng: 'ko',
            fallbackLng: 'ko',
			interpolation: {
				escapeValue: false,
			},
		})
		.then();
}
