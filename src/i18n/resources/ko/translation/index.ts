import type { Translation } from '@/i18n/types';
import { meta } from '../../../../components/meta/Meta.i18n.ko';
import { aboutMe } from '../../../../components/aboutMe/AboutMe.i18n.ko';

const translation: Translation = {
	common: {
		meta,
		aboutMe,
	}
};

// 'export default' for i18n-ally (vscode extension)
export default translation;
