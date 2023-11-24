import { HStack, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PiPlanetBold } from "react-icons/pi";
import FilmCard from "../Cards/FilmCard";
import SkeletonCard from "../Cards/SkeletonCard";
import GridListSwitch from "../Switch/GridListSwitch";
import usePlanets from "../../hooks/usePlanets";
import PlanetList from "../Lists/planetList";

const PlanetFrame = () => {
  const { data, isLoading } = usePlanets();
  const skeleton = [1, 2, 3, 4, 5, 6];
  const [isGridActive, setGrid] = useState(false);

  return (
    <Box padding="10px">
      <HStack width="100%">
        <Text flex="1" fontSize={25} fontWeight="500">
          Planets
        </Text>
        <GridListSwitch
          gridActive={false}
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
          {data?.results.map((planet, index) => (
            <FilmCard
              title={planet.name}
              children={<PiPlanetBold className="card--icon" />}
              key={index}
            />
          ))}
        </SimpleGrid>
      ) : (
        <PlanetList children={<PiPlanetBold size="20px" />} />
      )}
    </Box>
  );
};

export default PlanetFrame;
