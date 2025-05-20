import { Translation } from '@/i18n/types';

export const project: Translation = {
    title: 'Project',
    hanwha: {
        name: 'Hanwha Life',
        projectName: 'Core Project',
        durationStart: '2022-06',
        durationEnd: '2022-12',
        skillKeywords: 'Java, JavaScript, Servlet, Apache, Oracle, KendoUI, GitLab, JobPass, TeraStream, ETL',
        description: `Legacy elimination and new frontend development<br />
                      Development of FP commission payment process ETL batch process<br />
                      AS-IS, TO-BE migration<br />
                      Interface execution and data verification`,
        development: {
            develop1: {
                type: 'Feature',
                name: 'ETL Program Transition and Full Legacy System Overhaul',
                developmentStart: '',
                developmentEnd: '',
                description: `Rebuilt existing batch programs to align with new systems by introducing new ETL programs such as TeraStream and JobPass.<br />
                            Developed batch interfaces for data transmission between systems and designed and applied comprehensive validation logic to ensure accurate data delivery in the production environment.`
            },
            develop2: {
                type: 'Test',
                name: 'Data Migration Validation',
                developmentStart: '',
                developmentEnd: '',
                description: `Automated logic to verify the accuracy of migrated data during large-scale data migration between as-is and to-be systems.<br />
                            Developed scripts to perform full data comparisons (not sampling), enabling column-level detailed validation and statistical reporting to ensure data integrity.`
            },
            develop3: {
                type: 'Feature',
                name: 'New Front-End Development (Legacy System Decommission)',
                developmentStart: '',
                developmentEnd: '',
                description: `Planned and developed new pages reflecting user workflows such as commission calculation, verification, and pre-processing tasks.<br />
                            Implemented screens with careful consideration of dynamic rendering and state management due to behavior-driven logic.`
            },
        },
    },
    naedam: {
        name: 'Naedam C&C',
        projectName: 'In-house Homepage Development',
        durationStart: '2022-12',
        durationEnd: '2023-03',
        skillKeywords: 'Java, Spring Boot, JavaScript, jQuery, MariaDB, Servlet, Cafe24',
        description: `Design, implementation, and system construction of backend and frontend for the in-house homepage<br />
                      Integration and application with Naedam Admin program<br />
                      Design and implementation of utilities for asynchronous task processing<br />
                      Design and development based on user experience (UX) and user interface (UI)<br />
                      Implementation of SEO (Search Engine Optimization) optimization<br />
                      Simultaneous construction of Korean/English pages and implementation of multilingual support`,
        development: {
            develop1: {
                type: 'Feature',
                name: 'In-house Homepage Planning',
                developmentStart: '',
                developmentEnd: '',
                description: `Planned main and subpages.<br />
                            Collected materials by requesting data from each department head.<br />
                            Designed utilities for asynchronous operations.<br />
                            Planned based on UI/UX principles.`
            },
            develop2: {
                type: 'Feature',
                name: 'In-house Homepage Back-end and Front-end Development',
                developmentStart: '',
                developmentEnd: '',
                description: `Built the system and integrated it with the Admin program.<br />
                            Implemented SEO optimization.<br />
                            Developed Korean and English pages to support multiple languages.`
            },
        },
    },
    misumiMaintenance: {
        name: 'Misumi Korea',
        projectName: 'Frontend Maintenance/Operations',
        durationStart: '2023-03',
        durationEnd: '2023-12',
        skillKeywords: 'PHP, RxJS, Twig, JavaScript, jQuery, Ubuntu Linux, Docker, Apache, Node.js, XAMPP, Bitbucket, Jenkins',
        description: `Design, application, and frontend development of new APIs<br />
                      UI/UX improvements and enhancement of user convenience<br />
                      Integration and implementation of GA4 (Google Analytics 4) data analysis<br />
                      Admin function improvements: management of response status and retrieval functions<br />
                      Design and implementation of CAD download waiting feature<br />
                      Development of product recommendation feature and frontend interface implementation`,
        development: {
            develop1: {
                type: 'Feature',
                name: 'GA4 Integration and Conversion Event Tracking Setup',
                developmentStart: '2023-04',
                developmentEnd: '2023-07',
                description: `Manually implemented PV events and major user behavior events on all pages due to the transition from Google Analytics UA to GA4.<br />
                            Implemented tracking for detailed events related to the purchase funnel such as cart, order completion, and my page.`
            },
            develop2: {
                type: 'Feature',
                name: 'API and UI Development Due to Shipping Policy Change',
                developmentStart: '2023-08',
                developmentEnd: '2023-09',
                description: `Participated in a project to add special shipping options following API changes from the Japanese headquarters.<br />
                            Designed APIs and modified screens to support new billing items and shipping logic.`
            },
            develop3: {
                type: 'Style',
                name: 'UI/UX Improvements',
                developmentStart: '2023-09',
                developmentEnd: '2023-11',
                description: `Improved repetitive and unnecessary UI interactions and introduced micro-interactions to enhance user convenience.<br />
                            Ensured consistency and reusability in common layout components such as the Header and Footer.`
            },
            develop4: {
                type: 'Fix',
                name: 'Admin Feature Improvement (Answer Recall Feature)',
                developmentStart: '2023-12',
                developmentEnd: '2023-12',
                description: `Added logic to handle status changes when answers to user inquiries need to be recalled from the admin page.<br />
                            Implemented conditional UI changes and API integration on the frontend.`
            },
            develop5: {
                type: 'Feature',
                name: 'Product Recommendation Feature Using Groobee',
                developmentStart: '2024-01',
                developmentEnd: '2024-03',
                description: `Developed a recommendation feature using the Groobee API to display suggested products based on recently viewed items.<br />
                            Applied different recommendation logic to search bar, main page, category page, and product detail page.`
            },
        },
    },
    misumiRenewal: {
        name: 'Misumi Korea',
        projectName: 'Renewal Development/Maintenance/Operations',
        durationStart: '2024-03',
        durationEnd: '진행중',
        skillKeywords: 'React, TypeScript, Next.js, Redux, Node.js, Sass, Vercel, Webpack, SWC, Babel, DataDog, GitHub Actions, CircleCI',
        description: `PC and mobile frontend renewal development<br />
                      Development of common header: implementation of logo, phrases, quotes/orders, cart, inquiries, login/logout, etc.<br />
                      Design and development of category pages and sub-terminal category UI<br />
                      Development of search features: search bar, orders, cart, banners, support for unlisted product orders<br />
                      Implementation of common floating bar: development of product recommendation, CAD, compare, quotes/orders features<br />
                      Development of common user functions: authority management, price checking, cart, my parts list, member information and delivery management<br />
                      Design and development of the main page<br />
                      Development of brand page UI<br />
                      Implementation of product comparison features and comparison page<br />
                      Development of AA and GA integration and data analysis features`,
        development: {
            develop1: {
                type: 'Feature',
                name: 'Renewal Development (Responsive for Web and Mobile)',
                developmentStart: '2024-05',
                developmentEnd: '2024-12',
                description: `Participated in overall structure design and defined state management and API integration structure using Redux.<br />
                            Developed key layout components such as the common header and floating bar (recommend/compare/order, etc.).<br />
                            Implemented category pages, product comparison features, and user-related features (permissions, cart, delivery, etc.).`
            },
            develop2: {
                type: 'Test',
                name: 'Function Testing and Launch Support',
                developmentStart: '2024-12',
                developmentEnd: '2025-01',
                description: `Performed cross-browser and mobile compatibility testing in collaboration with the QA team.<br />
                            Stabilized features and made adjustments based on user feedback to meet the final launch schedule.`
            },
            develop3: {
                type: 'Stabilize',
                name: 'Stabilization and Operations',
                developmentStart: '2025-01',
                developmentEnd: '2025-03',
                description: `Monitored and fixed errors in key features after service launch.<br />
                            Improved UI/UX and optimized performance based on user behavior data.<br />
                            Strengthened service stability by responding to operational issues and enhancing management features.`
            },
        },
    }
};