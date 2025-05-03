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
                      Simultaneous construction of Korean/English pages and implementation of multilingual support`
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
                      Development of AA and GA integration and data analysis features`
    }
};