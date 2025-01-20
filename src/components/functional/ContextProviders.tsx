import React from 'react';
import { MainLoaderProvider } from '@/components/ui/loaders/MainLoaderProvider';
import { TooltipProvider } from '@/components/ui/tooltips';

/**
 * Context providers
 */
export const ContextProviders: React.FC = ({ children }) => {
	return (
		<MainLoaderProvider>
			<TooltipProvider>
				{children}
			</TooltipProvider>
		</MainLoaderProvider>
	);
};
ContextProviders.displayName = 'ContextProviders';
