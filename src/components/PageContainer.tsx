import { Box, BoxProps } from '@chakra-ui/react';

export const PageContainer = (props: BoxProps) => (
	<Box
		display="flex"
		flexDirection="column"
		alignItems="center"
		justifyContent="flex-start"
		bg="gray.50"
		color="black"
		_dark={{
			bg: 'gray.800',
			color: 'white',
		}}
		transition="all 0.15s ease-out"
		{...props}
	/>
);
