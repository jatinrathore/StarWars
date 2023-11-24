import { Box, SimpleGrid } from "@chakra-ui/react";
import FrameHeader from "./FrameHeader";
import useFilms from "../../hooks/useFilms";
import FilmCard from "../Cards/FilmCard";
import SkeletonCard from "../Cards/SkeletonCard";
import { useState } from "react";
import FilmsList from "../Lists/FilmsList";

const FilmsFrame = () => {
  const { data, isLoading } = useFilms();
  const skeleton = [1, 2, 3, 4, 5, 6];
  const [isGridActive, setGrid] = useState(true);

  return (
    <Box padding="10px">
      <FrameHeader title="Films" onGridChange={(isGrid) => setGrid(isGrid)} />
      {isGridActive ? (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={4}
          padding="20px 0"
        >
          {isLoading && skeleton.map((s, idx) => <SkeletonCard key={idx} />)}
          {data?.results.map((film, index) => (
            <FilmCard title={film.title} key={index} />
          ))}
        </SimpleGrid>
      ) : (
        <FilmsList />
      )}
    </Box>
  );
};

export default FilmsFrame;
