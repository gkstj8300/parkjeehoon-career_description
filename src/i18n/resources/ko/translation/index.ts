import { aboutMe } from '@/components/aboutMe/AboutMe.i18n.ko';
import { education } from '@/components/education/Education.i18n.ko';
import { experience } from '@/components/experience/Experience.18n.ko'; 
import { introduce } from '@/components/introduce/Introduce.i18n.ko';
import { footer } from '@/components/layout/footer/Footer.i18n.ko';
import { header } from '@/components/layout/header/Header.i18n.ko';
import { meta } from '@/components/meta/Meta.i18n.ko';
import { project } from '@/components/project/Project.i18n.ko';
import type { Translation } from '@/i18n/types';

const translation: Translation = {
	common: {
		meta,
	},
	component: {
		ui: {
			layouts: {
				header,
				footer,
			},
			aboutMe,
			education,
			experience,
			introduce,
			project,
		}
	}
};

// 'export default' for i18n-ally (vscode extension)
export default translation;
