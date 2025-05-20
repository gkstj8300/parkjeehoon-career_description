import i18n from 'i18next';
import React, { useState, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { LocalePanel } from './LocalePanel';
import useOuterClick from '@/hooks/useOuterClick';

export const Header: React.FC = () => {
    const { t } = useTranslation();

    const rootRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);

    const panelRef = useRef<HTMLDivElement>(null);

    const handleLocaleChangeClick = useCallback((locale: string) => {
        i18n.changeLanguage(locale);
    }, []);

    const handleOpenResumePdf = () => {
        window.open('https://d2ut7x8yqv441q.cloudfront.net/posts/resume.pdf', '_blank');
    };

    useOuterClick(
		rootRef as React.RefObject<HTMLElement>,
		useCallback(() => setExpanded(false), [])
	);

    return (
        <div className={styles.header} ref={rootRef}>
            <div className={styles.locale}>
                <div className={styles.localeContainer}>
                    <div 
                        className={styles.pdf} 
                        onClick={handleOpenResumePdf}
                    >
                        {t('component.ui.layouts.header.pdf')}
                    </div>
                    <div
                        className={styles.menu}
                        ref={panelRef}
                    >
                        {expanded && 
                            <LocalePanel
                                handleLocaleChangeClick={handleLocaleChangeClick}
                            />
                        }
                    </div>
                    <i 
                        className={styles.localeIcon}
                        onClick={() => setExpanded(expanded => !expanded)}
                    ></i>
                </div>
            </div>
        </div>
    );
};