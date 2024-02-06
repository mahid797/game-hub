import {
	List,
	ListItem,
	Skeleton,
	SkeletonCircle,
	HStack,
} from '@chakra-ui/react';

const GenreListSkeleton = () => {
	return (
		<List>
			<ListItem>
				<HStack padding="5px">
					<SkeletonCircle />
					<Skeleton width="100px" height="20px" />
				</HStack>
			</ListItem>
		</List>
	);
};

export default GenreListSkeleton;
