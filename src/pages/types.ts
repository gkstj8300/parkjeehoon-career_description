import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type GetLayout = (page: ReactElement) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: GetLayout;
};

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export const LayoutType = {
	DEFAULT: 1,
	PURCHASE_LINK: 2,
	INDUSTRY: 3,
} as const;

export type LayoutType = (typeof LayoutType)[keyof typeof LayoutType];

export const LoginSession = {
	NOT_LOGIN_OR_INVALID_SESSION: '1',
	LOGIN_WITHIN_30_MIN: '2',
	LOGIN_OVER_30_MIN: '3',
} as const;

export type LoginSession = (typeof LoginSession)[keyof typeof LoginSession];
