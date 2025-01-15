import i18n from 'i18next';
import React, { useState, useCallback, useRef } from 'react';
import styles from './Header.module.scss';
import { LocalePanel } from './LocalePanel';
import useOuterClick from '@/hooks/useOuterClick';

export const Header: React.FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);

    const panelRef = useRef<HTMLDivElement>(null);

    const handleLocaleChangeClick = useCallback((locale: string) => {
        i18n.changeLanguage(locale);
    }, []);

    useOuterClick(
		rootRef as React.RefObject<HTMLElement>,
		useCallback(() => setExpanded(false), [])
	);

    return (
        <div className={styles.header} ref={rootRef}>
            <div className={styles.locale}>
                <div className={styles.localeContainer}>
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