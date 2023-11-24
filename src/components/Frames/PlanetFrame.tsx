import { HStack, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PiPlanetBold } from "react-icons/pi";
import FrameCard from "../Cards/FrameCard";
import SkeletonCard from "../Cards/SkeletonCard";
import GridListSwitch from "../Switch/GridListSwitch";
import usePlanets from "../../hooks/usePlanets";
import PlanetList from "../Lists/PlanetList";
import planetCardImg from "../../assets/planets.webp";

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
          {data?.results.map((planet, index) => (
            <FrameCard
              title={planet.name}
              children={<PiPlanetBold className="card--icon" />}
              cardImg={planetCardImg}
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
