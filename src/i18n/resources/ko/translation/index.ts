import { aboutMe } from '@/components/aboutMe/AboutMe.i18n.ko';
import { experience } from '@/components/experience/Experience.18n.ko'; 
import { meta } from '@/components/meta/Meta.i18n.ko';
import { project } from '@/components/project/Project.i18n.ko';
import type { Translation } from '@/i18n/types';

const translation: Translation = {
	common: {
		meta,
		aboutMe,
		experience,
		project,
	}
};

// 'export default' for i18n-ally (vscode extension)
export default translation;
