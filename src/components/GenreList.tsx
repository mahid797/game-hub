import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import GenreListSkeleton from './GenreListSkelton';

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	if (isLoading)
		return skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />);
	if (error) return null;

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							objectFit="cover"
							src={genre.image_background}
						/>{' '}
						<Button
							onClick={() => onSelectGenre(genre)}
							fontSize="md"
							variant="link">
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
