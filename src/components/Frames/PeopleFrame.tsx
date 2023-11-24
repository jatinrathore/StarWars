import { useState } from "react";
import usePeoples from "../../hooks/usePeoples";
import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import FilmCard from "../Cards/FilmCard";
import SkeletonCard from "../Cards/SkeletonCard";
import { LuUsers2 } from "react-icons/lu";
import PeopleList from "../Lists/PeopleList";
import GridListSwitch from "../Switch/GridListSwitch";
import peopleCardImg from "../../assets/people.jpg";

const PeopleFrame = () => {
  const { data, isLoading } = usePeoples();
  const skeleton = [1, 2, 3, 4, 5, 6];
  const [isGridActive, setGrid] = useState(false);

  return (
    <Box padding="10px">
      <HStack width="100%">
        <Text flex="1" fontSize={25} fontWeight="500">
          People
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
          {data?.results.map((people, index) => (
            <FilmCard
              title={people.name}
              children={<LuUsers2 className="card--icon" />}
              cardImg={peopleCardImg}
              key={index}
            />
          ))}
        </SimpleGrid>
      ) : (
        <PeopleList children={<LuUsers2 size="20px" />} />
      )}
    </Box>
  );
};

export default PeopleFrame;
