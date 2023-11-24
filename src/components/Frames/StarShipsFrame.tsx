import { HStack, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { LuRocket } from "react-icons/lu";
import FilmCard from "../Cards/FilmCard";
import SkeletonCard from "../Cards/SkeletonCard";
import GridListSwitch from "../Switch/GridListSwitch";
import useStarships from "../../hooks/useStarships";
import StarShipsList from "../Lists/StarShipsList";
import starshipCardImg from "../../assets/starwarsships.webp";

const StarShipsFrame = () => {
  const { data, isLoading } = useStarships();
  const skeleton = [1, 2, 3, 4, 5, 6];
  const [isGridActive, setGrid] = useState(false);

  return (
    <Box padding="10px">
      <HStack width="100%">
        <Text flex="1" fontSize={25} fontWeight="500">
          Starships
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
            <FilmCard
              title={planet.name}
              children={<LuRocket className="card--icon" />}
              cardImg={starshipCardImg}
              key={index}
            />
          ))}
        </SimpleGrid>
      ) : (
        <StarShipsList children={<LuRocket size="20px" />} />
      )}
    </Box>
  );
};

export default StarShipsFrame;
