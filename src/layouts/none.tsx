import { GetLayout } from '@/pages/types';

export const None: GetLayout = page => {
	return (
		<>
			{page}
		</>
	);
};
