import {
	HStack,
	IconButton,
	Switch,
	Text,
	keyframes,
	useColorMode,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaRegMoon } from 'react-icons/fa6';
import { MdOutlineWbSunny } from 'react-icons/md';
import { LuSunMedium } from 'react-icons/lu';
import { FaRegSun } from 'react-icons/fa6';
import { GoSun } from 'react-icons/go';
import { IoMoonOutline } from 'react-icons/io5';

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();
	const [animation, setAnimation] = useState('');

	const spin = keyframes`  
		0%,100% { opacity: 1 }
		50% { opacity: 0 }
		from {
			transform: rotate(0deg)}   
		to {
			transform: rotate(1080deg);
		} `;
	const spinAnimation = `${spin} 1400ms ease-in-out`;

	const handleClick = () => {
		setAnimation(spinAnimation);
		setTimeout(toggleColorMode, 600);
	};

	return (
		<HStack>
			{/* <Switch
				colorScheme="purple"
				isChecked={colorMode === 'dark'}
				onChange={toggleColorMode}
			/>
			<Text whiteSpace="nowrap">Dark Mode</Text> */}

			<IconButton
				animation={animation}
				onAnimationEnd={() => {
					setAnimation('');
				}}
				variant="ghost"
				colorScheme={colorMode === 'light' ? 'yellow' : 'purple'}
				aria-label="Dark Mode"
				fontSize="30px"
				_hover={{
					color: colorMode === 'light' ? '#8229ba' : '#f7d883',
					bg: 'inherit',
				}}
				onClick={handleClick}
				icon={colorMode === 'light' ? <GoSun /> : <IoMoonOutline />}
			/>
		</HStack>
	);
};

export default ColorModeSwitch;
