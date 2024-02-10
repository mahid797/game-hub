import React from 'react';
import { Game } from '../hooks/useGames';
import {
	Card,
	CardBody,
	DarkMode,
	HStack,
	Heading,
	Image,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card
			variant="elevated"
			// color={useColorModeValue('blue.500', 'blue.200')}
			backgroundColor={useColorModeValue('gray.100', '#084470')}>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map(
							(p) => p.platform
						)}></PlatformIconList>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">
					{game.name}
					<Emoji rating={game.rating_top}></Emoji>
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
