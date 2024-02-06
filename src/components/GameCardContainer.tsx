import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box borderRadius={10} overflow="hidden">
			{children}
		</Box>
		// <Box maxW="450px" minW="200px" borderRadius={10} overflow="hidden">
		// 	{children}
		// </Box>
	);
};

export default GameCardContainer;
