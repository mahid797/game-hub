import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text, color } from '@chakra-ui/react';
import {
	FaWindows,
	FaPlaystation,
	FaLinux,
	FaApple,
	FaXbox,
	FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		linux: FaLinux,
		mac: FaApple,
		ios: MdPhoneIphone,
		android: FaAndroid,
		web: BsGlobe,
	};
	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<Icon as={iconMap[platform.slug]} color="gray.500" />
			))}
		</HStack>
	);
};

export default PlatformIconList;
