import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useFilms from "../../hooks/useFilms";
import FilmCard from "../Cards/FilmCard";
import SkeletonCard from "../Cards/SkeletonCard";
import { useState } from "react";
import FilmsList from "../Lists/FilmsList";
import { PiFilmReel } from "react-icons/pi";
import GridListSwitch from "../Switch/GridListSwitch";
import FilmCardImg from "../../assets/536696.jpg";

const FilmsFrame = () => {
  const { data, isLoading } = useFilms();
  const skeleton = [1, 2, 3, 4, 5, 6];
  const [isGridActive, setGrid] = useState(true);

  return (
    <Box padding="10px">
      <HStack width="100%">
        <Text flex="1" fontSize={25} fontWeight="500">
          Films
        </Text>
        <GridListSwitch
          gridActive={true}
          onGridChange={(isGrid) => setGrid(isGrid)}
        />
      </HStack>
      {isGridActive ? (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={4}
          padding="20px 0"
        >
          {isLoading && skeleton.map((s, idx) => <SkeletonCard key={idx} />)}
          {data?.results.map((film, index) => (
            <FilmCard
              title={film.title}
              children={<PiFilmReel className="card--icon" />}
              cardImg={FilmCardImg}
              key={index}
            />
          ))}
        </SimpleGrid>
      ) : (
        <FilmsList children={<PiFilmReel size="20px" />} />
      )}
    </Box>
  );
};

export default FilmsFrame;
