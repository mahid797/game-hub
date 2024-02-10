import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import GenreListSkeleton from './GenreListSkelton';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	if (isLoading)
		return <>{skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}</>;
		

	if (error) return null;

	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<Button
							paddingX={1}
							onClick={() => onSelectGenre(genre)}
							fontSize={genre.id === selectedGenre?.id ? 'lg' : 'md'}
							fontWeight={genre.id === selectedGenre?.id ? '700' : '400'}
							whiteSpace="normal"
							textAlign="left"
							variant="ghost">
							<HStack justifyContent="space-between">
								<Image
									boxSize="32px"
									borderRadius={8}
									objectFit="cover"
									src={genre.image_background}
								/>{' '}
								<Text marginX={2}>{genre.name}</Text>
							</HStack>
						</Button>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
