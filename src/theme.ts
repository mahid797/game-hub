import { extendTheme, ThemeConfig, useColorModeValue } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
	initialColorMode: 'dark',
};

const theme = extendTheme({
	config,
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				color: 'default',
				bg: useColorModeValue('gray.50', 'gray.900'),
			},
		}),
	},
	colors: {
		gray: {
			50: '#e8f0ff',
			100: '#c3d2ef',
			200: '#9db4e1',
			300: '#7596d5',
			400: '#4f77c9',
			500: '#385eb0',
			600: '#2b498a',
			700: '#1e3462',
			800: '#101f3c',
			900: '#030f24',
		},
		purple: {
			200: '#6d2fa3',
		},
	},
});

export default theme;
