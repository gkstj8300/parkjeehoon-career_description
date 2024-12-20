import styles from './Project.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Title } from '@/components/ui/title';

export const Project: React.FC = () => {

    const { t } = useTranslation();

    return (
        <section>
            <Title title={t('common.project.title')} />
        </section>
    )
}