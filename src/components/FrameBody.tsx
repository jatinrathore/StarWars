import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import useFilms from "../hooks/useFilms";
import FilmCard from "./Cards/FilmCard";
import SkeletonCard from "./Cards/SkeletonCard";

const FrameBody = () => {
  const { data, isLoading } = useFilms();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} padding="20px 0">
      {isLoading && skeleton.map((s, idx) => <SkeletonCard key={idx} />)}
      {data?.results.map((film, index) => (
        <FilmCard title={film.title} key={index} />
      ))}
    </SimpleGrid>
  );
};

export default FrameBody;
