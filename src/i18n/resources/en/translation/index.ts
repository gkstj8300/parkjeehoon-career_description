import { aboutMe } from '@/components/aboutMe/AboutMe.i18n.en';
import { education } from '@/components/education/Education.i18n.en';
import { experience } from '@/components/experience/Experience.18n.en'; 
import { introduce } from '@/components/introduce/Introduce.i18n.en';
import { footer } from '@/components/layout/footer/Footer.i18n.en';
import { header } from '@/components/layout/header/Header.i18n.en';
import { meta } from '@/components/meta/Meta.i18n.en';
import { project } from '@/components/project/Project.i18n.en';
import { skill } from '@/components/skill/Skill.i18n.en';
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
			skill,
		}
	}
};

// 'export default' for i18n-ally (vscode extension)
export default translation;
