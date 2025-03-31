import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import { tractEvent } from '@/logs/googleAnalytics/event';

const ACTION_CLICK = 'click';

export const Footer: React.FC = () => {
    const { t } = useTranslation();

    const handleLinkClick = useCallback((label: string) => {
        tractEvent({ action: ACTION_CLICK, category: 'Footer', label })
    }, []);
    
    return (
        <footer className={styles.footer}>
            <div className={styles.linkList}>
                <p>
                    <span>{t('component.ui.layouts.footer.emain')}</span>
                </p>
                <a 
                    target="_blank" 
                    href='https://github.com/gkstj8300'
                    onClick={() => handleLinkClick('github')}
                >
                    <span>{t('component.ui.layouts.footer.github')}</span>
                </a>
                <a 
                    target="_blank" 
                    href='https://www.baakhan.com/'
                    onClick={() => handleLinkClick('blog')}
                >
                    <span>{t('component.ui.layouts.footer.blog')}</span>
                </a>
            </div>
            <div>
                <span>{t('component.ui.layouts.footer.copyright')}</span>
            </div>
        </footer>
    )
}