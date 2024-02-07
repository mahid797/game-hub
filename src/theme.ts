import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
};

const theme = extendTheme({
	config,
	colors: {
		purple: {
			200: '#6d2fa3',
		},
	},
});

export default theme;
